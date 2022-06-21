const mockObjDataCard = {
  title: 'Titulo', img: 'caminho/ou/link', link: 'https://www.google.com', textLink: 'Descrição', textImg: 'Alt da imagem',
};

const mockArrDataCardOne = {
  id: 1,
  title: {
    rendered: 'Titulo',
  },
  link: 'https://www.google.com',
  slug: 'Descrição',
  _embedded: {
    'wp:featuredmedia': [
      {
        media_details: {
          sizes: {
            'jnews-360x180': {
              source_url: 'caminho/ou/link',
            },
          },
        },
      },
    ],
  },
};
const mockArrDataCard = [
  mockArrDataCardOne,
  { ...mockArrDataCardOne, id: 2 },
  { ...mockArrDataCardOne, id: 3 },
  { ...mockArrDataCardOne, id: 4 },
  { ...mockArrDataCardOne, id: 5 },
  { ...mockArrDataCardOne, id: 6 },
  { ...mockArrDataCardOne, id: 7 },
  { ...mockArrDataCardOne, id: 8 },
  { ...mockArrDataCardOne, id: 9 },
  { ...mockArrDataCardOne, id: 10 },
];

export { mockObjDataCard, mockArrDataCard };
