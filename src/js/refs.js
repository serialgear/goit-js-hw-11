const refs = {
  gallery: document.querySelector('.gallery'),
  form: document.querySelector('.search-form'),
  buttonLoadMore: document.querySelector('.load-more'),
  buttonPageTop: document.querySelector('.page-up'),
  outputPagesLoad: document.querySelector('.pages-load'),
};
const api = {
  BASE_URL: 'https://pixabay.com/api/',
  KEY: '31433031-3d0f0dfea87925373aae81ab3',
};
export { refs, api };
