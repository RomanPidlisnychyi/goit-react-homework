import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import List from './styles';
import PropTypes from 'prop-types';

export default function ImageGallery({ images, onImgClick }) {
    return (
        <List>
            {images.map(image => (
                <ImageGalleryItem
                    key={image.id}
                    webformatURL={image.webformatURL}
                    tags={image.tags}
                    largeImageURL={image.largeImageURL}
                    onImgClick={onImgClick}
                />
            ))}
        </List>
    );
}

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            webformatURL: PropTypes.string.isRequired,
            tags: PropTypes.string,
            largeImageURL: PropTypes.string.isRequired,
        }),
    ),
    onImgClick: PropTypes.func,
};
