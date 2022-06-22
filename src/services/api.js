import axios from 'axios';

const conection = async (page = '', type = 'categories=518') => {
  const baseUrl = 'https://blog.apiki.com/wp-json/wp/v2/posts?_embed&';
  const ConpletUrl = `${baseUrl}${type}${page}`;
  const a = await axios.get(ConpletUrl);

  return { headers: a.headers, data: a.data };
};

const organize = (item) => {
  const {
    title: { rendered }, link, slug, _embedded, id,
  } = item;

  const [imgObj] = _embedded['wp:featuredmedia'];
  const { alt_text: imgAlt, media_details: imgDetails } = imgObj;
  const img = imgDetails.sizes['jnews-360x180'].source_url;
  // o que voce quer que volte aqui nesse retorno que vai ser usado nos compornet react.
  return {
    titulo: rendered, link, slug, id, imgAlt, img,
  };
};

const dataFormatted = async (page = '') => {
  const { data } = await conection(page);

  await conection(page);
  const newData = data?.map(organize);
  return newData;
};

export default dataFormatted;
