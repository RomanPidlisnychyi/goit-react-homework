import React, { Component } from 'react';
import Layout from './Layout';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Spinner from './Spinner/Spinner';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import imagesApi from '../services/imagesApi';

export default class App extends Component {
    state = {
        images: [],
        query: '',
        page: 1,
        selectImgUrl: null,
        loading: false,
    };

    componentDidUpdate(prevProps, prevState) {
        const { query, selectImgUrl } = this.state;

        if (selectImgUrl) {
            document.querySelector('body').classList.add('scroll_off');
            window.addEventListener('keydown', this.onEscape);
        } else {
            document.querySelector('body').classList.remove('scroll_off');
            window.removeEventListener('keydown', this.onEscape);
        }

        if (prevState.query !== query) {
            this.fetchImages();
        }
    }

    handlerButton = () => {
        this.fetchImages();
    };

    fetchImages = () => {
        this.setState({ loading: true });
        imagesApi.getImages(this.state.query, this.state.page).then(images => {
            this.setState(prevState => ({
                images: [...prevState.images, ...images],
                page: prevState.page + 1,
                loading: false,
            }));
        });
    };

    scrollTo = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        });
    };

    updateQuery = query => {
        this.setState({ query: query, page: 1, images: [] });
    };

    onGalleryImageClick = e => {
        this.setState({ selectImgUrl: e.target.dataset.largeimg });
    };

    onEscape = e => {
        if (e.code === 'Escape') {
            this.closeModal();
        }
    };

    closeModal = () => {
        this.setState({ selectImgUrl: null });
    };

    onOverlayClick = e => {
        if (e.target === e.currentTarget) {
            this.closeModal();
        }
    };

    render() {
        const { images, selectImgUrl, loading } = this.state;
        return (
            <Layout>
                <Searchbar onSubmit={this.updateQuery} />

                {images.length > 0 && (
                    <ImageGallery
                        images={images}
                        onImgClick={this.onGalleryImageClick}
                    />
                )}

                {loading && <Spinner height={100} width={100} />}

                {images.length > 0 && !loading && (
                    <Button
                        onClick={this.handlerButton}
                        scrollTo={this.scrollTo}
                    />
                )}

                {selectImgUrl && (
                    <Modal
                        imageUrl={selectImgUrl}
                        onOverlayClick={this.onOverlayClick}
                    />
                )}
            </Layout>
        );
    }
}
