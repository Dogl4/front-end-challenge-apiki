const mockObjDataCard = {
  title: 'Titulo', img: 'caminho/ou/link', link: 'https://www.google.com', textLink: 'Descrição', textImg: 'Alt da imagem',
};

const mockArrDataCardOne = {
  id: 1,
  img: 'caminho/ou/link',
  imgAlt: 'Alt da imagem',
  link: 'https://www.google.com',
  slug: 'Descrição',
  title: 'Titulo',
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
