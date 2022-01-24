import React from 'react';
import PropTypes from 'prop-types';
import { unfilledHeart, filledHeart, link, share } from '../../assets/Icons';
import { toastNotify } from '../../helpers/toastNotify';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Toaster } from 'react-hot-toast';

const CardControls = ({ image, handleFavourites, inFavourites }) => {
    return (
        <div className="flex mb-2 mt-1 justify-center">
            <a href={image.url} className="card__controls" aria-label="Image URL">
                {link}
            </a>
            <button
                onClick={() => handleFavourites(image)}
                className="card__controls"
                aria-label={`${inFavourites ? 'Remove from Favourites' : 'Add to Favourites'}`}
            >
                {!inFavourites && unfilledHeart}
                {inFavourites && filledHeart}
            </button>
            <CopyToClipboard text={image.url} ariahidden="true">
                <button
                    className="card__controls active:bg-purpledark"
                    onClick={toastNotify}
                    aria-label="Share the image"
                    aria-haspopup="true"
                >
                    {share}
                </button>
            </CopyToClipboard>
            <Toaster />
        </div>
    );
};

CardControls.propTypes = {
    image: PropTypes.object,
    handleFavourites: PropTypes.func,
    inFavourites: PropTypes.bool,
};

export default CardControls;
