import React from 'react';
import { ListItem, Img } from './styles';
import PropTypes from 'prop-types';

export default function ImageGalleryItem({
    webformatURL,
    tags,
    largeImageURL,
    onImgClick,
}) {
    return (
        <ListItem>
            <Img
                src={webformatURL}
                onClick={onImgClick}
                alt={tags}
                data-largeimg={largeImageURL}
            />
        </ListItem>
    );
}

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string,
    largeImageURL: PropTypes.string.isRequired,
    onImgClick: PropTypes.func.isRequired,
};
