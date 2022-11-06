import PropTypes from 'prop-types';

function ImageGalleryItem({ number, link, text, largeImageURL, onSelect }) {
  return (
    <>
      <li className="ImageGalleryItem" key={number}>
        <img src={link} alt={text}
        onClick = {() => onSelect(largeImageURL)}
         />
      </li>
    </>
  );
}

ImageGalleryItem.propTypes = {
 
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
