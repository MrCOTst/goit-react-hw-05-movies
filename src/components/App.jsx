import React, { Component } from 'react';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import axios from 'axios';
import './styles.css';
import Modal from './Modal';
import Searchbar from './Searchbar';
import { ThreeDots } from 'react-loader-spinner';
import ImageGallery from './ImageGallery';

const API_KEY = '30126477-a57d6dba24f5300b01ed82fe1';
const BASE_URL = 'https://pixabay.com/api/';

export class App extends Component {
  state = {
    searchImg: '',
    collection: [],
    largeImg: '',
    startPage: 1,
    error: null,
    isLoading: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const options = {
      params: {
        key: API_KEY,
        q: this.state.searchImg,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        page: this.state.startPage,
        per_page: 12,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    };
    

    if (prevState.searchImg !== this.state.searchImg) {
      try {
        this.setState({ isLoading: true });
        const response = await axios.get(BASE_URL, options);
        this.setState({ startPage: 1, collection: response.data.hits });
        
        // console.log(response.data.hits);
        // console.log(this.state.collection)
      } catch (error) {
        this.setState({
          error: 'Failed to upload picture, please try again later',
        });
      } finally {
        this.setState({ isLoading: false });
      }
    }
    
    if (
      prevState.startPage !== this.state.startPage &&
      prevState.searchImg === this.state.searchImg
    ) {
      try {
        this.setState({ isLoading: true });
        const response = await axios.get(BASE_URL, options);
        this.setState(prevState => ({
          collection: [...prevState.collection, ...response.data.hits],
        }));
      } catch (error) {
        this.setState({
          error: 'Failed to upload picture, please try again later',
        });
      } finally {
        this.setState({ isLoading: false });
      }
    }
    

      // if (!this.state.collection.hits && !this.state.collection.totalHits) {
      //   alert(
      //     'Sorry, there are no images matching your search query. Please try again.'
      //   ); return
      //   } 
    //
    // if(this.state.collection.length < 1 && this.state.searchImg.length > 0) {
    //   this.setState ({ error: 'Failed to upload picture, please try again later' });
    // } else {
    //   this.setState ({ error: null });
    // }
  }

  // controlImg = () => {if (!this.state.collection.hits && !this.state.collection.totalHits) {
  //     NotificationManager.warning(
  //       'Sorry, there are no images matching your search query. Please try again.'
  //     ); } };

  handleFormSubmit = searchImg => {
    this.setState({ searchImg, startPage: 1 });
    // console.log('handleFormSubmit, earchQuery, App:', searchImg)
    // console.log('handleFormSubmit, this.state, App:',this.state.searchImg);
  };

  onImgClick = largeImg => {
    this.setState({ largeImg });
    // console.log('onImgClick', largeImg);
    // console.log('currentTarget', largeImg.currentTarget);
    // console.log('target', largeImg.target);
  };

  closeModal = () => {
    this.setState({ largeImg: '' });
  };

  onLoadMore = () => {
    this.setState(prevState => ({
      startPage: prevState.startPage + 1,
    }));

    // console.log ('startPage', this.state.startPage)
  };

  render() {
    const { largeImg, searchImg, collection, error, isLoading } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleFormSubmit} />
        {error && <div>{error}</div>}

        <ImageGallery
          images={this.state.collection}
          onSelect={this.onImgClick}
        />
        {largeImg.length > 0 && (
          <Modal onClose={this.closeModal}>
            <img src={largeImg} alt={searchImg} />
          </Modal>
        )}
        {searchImg.length > 0 && collection.length > 0 && (
          <button className="Button" type="button" onClick={this.onLoadMore}>
            Load more
          </button>
        )}

        {isLoading && (
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#4fa94d"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        )}
        <NotificationContainer />
      </div>
    );
  }
}
