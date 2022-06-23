import axios from 'axios';

export const conection = async (page = '', type = 'categories=518') => {
  const baseUrl = 'https://blog.apiki.com/wp-json/wp/v2/posts?_embed&';
  const ConpletUrl = `${baseUrl}${type}${page}`;
  const result = await axios.get(ConpletUrl)
    .then(({ data, headers }) => ({ headers, data }));
  return result;
};

const organize = (item) => {
  const {
    title: { rendered }, link, slug, _embedded, id,
  } = item;
  const [imgObj] = _embedded['wp:featuredmedia'] || [];
  const img = (imgObj && imgObj?.media_details?.sizes['jnews-360x180']?.source_url) || '';
  const { alt_text: imgAlt } = (imgObj && imgObj) || { alt_text: '' };
  return {
    titulo: rendered, link, slug, id, imgAlt, img,
  };
};

const infoPageFormat = (headers) => ({
  currentPage: headers.link?.split('page=', -1)[1].split('>')[0],
  totalPages: headers?.['x-wp-totalpages'],
});

const dataFormatted = async (page = '', type = 'categories=518') => {
  const { data, headers } = await conection(page, type);
  const newData = data?.map(organize);
  const newInfoPage = infoPageFormat(headers);
  return { data: newData, infoPage: newInfoPage };
};

export default dataFormatted;
