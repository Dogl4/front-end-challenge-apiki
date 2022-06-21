export default function url(page = '', type = 'categories=518') {
  const iniUrl = 'https://blog.apiki.com/wp-json/wp/v2/posts?_embed&';
  return `${iniUrl}${type}${page}`;
}
