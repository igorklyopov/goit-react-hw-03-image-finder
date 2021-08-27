const BASE_URL = "https://pixabay.com/api";
const IMAGES_PER_PAGE = 12;
const API_KEY = "17487931-e1e571c2d579d55d938e84222";
// let pageNumber = 1;
// const searchQuery = "bug";
// &SameSite=None; Secure

function fetchImages(searchQuery, pageNumber) {
  return fetch(
    `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${pageNumber}&per_page=${IMAGES_PER_PAGE}&key=${API_KEY}`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error(`No images on request ${searchQuery}`));
  });
}

export default fetchImages;
