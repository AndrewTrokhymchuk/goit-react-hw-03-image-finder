import axios from 'axios';

export default function getPictures(query, page = 1, itemsPerPage = 15) {
  
  try {
    return axios
      .get(
        `https://pixabay.com/api/?key=28013586-3ef714991d7ccbf56a594a865&q=${query}&page=${page}&per_page=${itemsPerPage}&image_type=photo`
      )
      .then(resp =>
        resp.data.hits.map(({ id, webformatURL, largeImageURL }) => ({
          id,
          webformatURL,
          largeImageURL,
        }))
      );
  } catch (error) {
    console.log(error);
  }
}
