import PropTypes from 'prop-types';
import ImageGalleryItem from './ImegeGalleryItem';

function ImageGallery({ images, onSelect }) {
  return (
    <ul className="ImageGallery">
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          link={image.webformatURL}
          text={image.tags}
          largeImageURL={image.largeImageURL}
          onSelect={onSelect}
        />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      
    })
  ),
};

export default ImageGallery;
