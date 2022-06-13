import React from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ image, setLargeImage }) {
  
  const { webformatURL, largeImageURL } = image;
  
  return (
    <li className={s.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt="super-gallery"
        className={s.ImageGalleryItem__image}
        onClick={() => setLargeImage(largeImageURL)}
      />
    </li>
  );
  
}

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
  setLargeImage: PropTypes.func.isRequired,
};
