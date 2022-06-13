import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar.jsx';
import Loader from './Loader/Loader.jsx';
import getPictures from './services/getPictures.js';
import ImageGallery from './ImageGallery/ImageGallery.jsx';
import Button from './Button/Button.jsx';
import ModalImage from './Modal/Modal.jsx';

export default class App extends Component {

  state = {
    images: [],
    userQuery: '',
    page: 1,
    itemsPerPage: 15,
    loading: false,
    largeImageUrl: null,
  };

  componentDidUpdate(prevProp, prevState) {
    const { images, userQuery } = this.state;
    if (prevState.userQuery !== userQuery) {
      this.setState({ loading: true });
      this.getPics();
    }
    if (prevState.images.length !== images.length) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
      });
    }
  }

  getPics = () => {
    const { userQuery, page, itemsPerPage } = this.state;
    getPictures(userQuery, page, itemsPerPage)
      .then(image =>
        this.setState(prevState => ({
          images: [...prevState.images, ...image],
          page: prevState.page + 1,
        }))
      )
      .catch(error => console.log(error))
      .finally(() => this.setState({ loading: false }));
  };

  handleSubmit = query => {
    this.setState({
      images: [],
      userQuery: query,
      page: 1,
    });
  };

  setLargeImage = url => {
    this.setState({ largeImageUrl: url });
  };

  render() {

    const { images, loading, largeImageUrl, itemsPerPage } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        {loading && <Loader />}
        {images.length > 0 && (
          <ImageGallery images={images} setLargeImage={this.setLargeImage} />
        )}
        {images.length >= itemsPerPage && (
          <Button loadMore={this.getPics} />
        )}
        {largeImageUrl && (
          <ModalImage
            onClose={() => this.setLargeImage(null)}
            src={largeImageUrl}
          />
        )}
      </>
    );

  }
}
