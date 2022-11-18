import { useState, useEffect } from 'react';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import axios from 'axios';
import './styles.css';
import Modal from './Modal';
import Searchbar from './Searchbar';
import { ThreeDots } from 'react-loader-spinner';
import ImageGallery from './ImageGallery';

const API_KEY = '30126477-a57d6dba24f5300b01ed82fe1';
const BASE_URL = 'https://pixabay.com/api/';

const fetchImg = (searchImg, startPage) => {
  const options = {
    params: {
      key: API_KEY,
      q: searchImg,
      image_type: 'photo',
      orientation: 'horizontal',
      // safesearch: 'true',
      page: startPage,
      per_page: 12,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return axios.get(BASE_URL, options).then(response => response.data.hits);
};

export const App = () => {
  const [searchImg, setSearchImg] = useState('');
  const [collection, setCollection] = useState([]);
  const [largeImg, setLargeImg] = useState('');
  const [startPage, setStartPage] = useState(1);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState('false');

  useEffect(() => {
    if (!searchImg) return;

    async function getImages() {
      setIsLoading(true);
      try {
        const data = await fetchImg(searchImg, startPage);
        if (!data.length) {
          NotificationManager.warning(
            'Sorry, there are no images matching your search query. Please try again.'
          );
        }
        const foundImages = data.map(
          ({ id, largeImageURL, webformatURL, tags }) => {
            return { id, largeImageURL, webformatURL, tags };
          }
        );
        setCollection(prevState => [...prevState, ...foundImages]);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    getImages();
  }, [searchImg, startPage]);

  const handleFormSubmit = searchImg => {
    setSearchImg(searchImg);
    setStartPage(1);
    setCollection([]);
    setError(null);
    // console.log('handleFormSubmit, earchQuery, App:', searchImg)
    // console.log('handleFormSubmit, this.state, App:',this.state.searchImg);
  };

  const onImgClick = largeImg => {
    setLargeImg(largeImg);
    // console.log('onImgClick', largeImg);
    // console.log('currentTarget', largeImg.currentTarget);
    // console.log('target', largeImg.target);
  };

  const closeModal = () => {
    setLargeImg('');
  };

  const onLoadMore = () => {
    setStartPage(prevState => prevState + 1);
  };

  return (
    <div className="App">
      <Searchbar onSubmit={handleFormSubmit} />
      {error && <div>Failed to upload picture, please try again later</div>}

      <ImageGallery images={collection} onSelect={onImgClick} />
      {largeImg.length > 0 && (
        <Modal onClose={closeModal}>
          <img src={largeImg} alt={searchImg} />
        </Modal>
      )}
      {searchImg.length > 0 && collection.length > 0 && (
        <button className="Button" type="button" onClick={onLoadMore}>
          Load more
        </button>
      )}

      {isLoading === true && (
        <div className="Spinner">
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#4fa94d"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
            margin="auto"
          />
        </div>
      )}
      <NotificationContainer />
    </div>
  );
};

{/* <BrowserRouter basename="goit-react-hw-05-movies">
  <App />
</BrowserRouter> */}