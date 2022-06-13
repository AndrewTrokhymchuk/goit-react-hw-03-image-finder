import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem.jsx';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import s from './ImageGallery.module.css';

export default function ImageGallery({ images, setLargeImage }) {
  
  return (
    <>
      <ul className={s.ImageGallery}>
        {images.map(image => (
          <ImageGalleryItem
            key={nanoid()}
            image={image}
            setLargeImage={setLargeImage}
          />
        ))}
      </ul>
    </>
  );
  
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      webformatURL: PropTypes.string,
      largeImageURL: PropTypes.string,
    })
  ).isRequired,
  setLargeImage: PropTypes.func.isRequired,
};
