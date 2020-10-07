import React from 'react';
import { Overlay, ModalWindow } from './styles';
import PropTypes from 'prop-types';

export default function Modal({ onOverlayClick, imageUrl }) {
    return (
        <Overlay onClick={onOverlayClick}>
            <ModalWindow>
                <img src={imageUrl} alt="" />
            </ModalWindow>
        </Overlay>
    );
}

Modal.propTypes = {
    onOverlayClick: PropTypes.func,
    imageUrl: PropTypes.string.isRequired,
};
