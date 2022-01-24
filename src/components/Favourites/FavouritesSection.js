import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../UI/Modal';
import Controls from './Controls';
import ListContent from './ListContent';

const FavouritesSection = ({ favouriteProp }) => {
    return (
        <Modal
            className="flex flex-col w-full rounded-2xl mb-6 bg-purplemedium"
            {...favouriteProp}
            tabIndex={0}
            aria-modal="true"
            role="dialog"
        >
            <h2
                className="text-center mx-auto mt-6 mb-3 font-base font-extrabold text-3xl text-white focus:outline-none"
                tabIndex={0}
            >
                Favourites
            </h2>
            <ListContent {...favouriteProp} />
            <Controls {...favouriteProp} />
        </Modal>
    );
};

FavouritesSection.propTypes = {
    favouriteProp: PropTypes.object,
};

export default FavouritesSection;
