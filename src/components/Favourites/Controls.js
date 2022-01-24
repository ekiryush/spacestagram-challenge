import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ favourites, hideFavourites, clearFavourites }) => {
    return (
        <div className="self-center mt-4 mb-2">
            <button
                className=" max-w-250 font-base text-sm py-1 px-6 border-2 mb-4 mr-4 rounded-lg text-white bg-purplelight border-white focus:bg-purpledark focus:outline-none hover:scale-110 transform transition duration-100 hover:bg-purplemedium"
                onClick={hideFavourites}
            >
                Close
            </button>
            <button
                className={` max-w-250 font-base text-sm py-1 px-6 border-2 mb-4 mr-4 rounded-lg text-white bg-purplelight border-white focus:bg-purpledark focus:outline-none ${
                    favourites.length === 0
                        ? 'cursor-not-allowed'
                        : ' transform transition duration-100 hover:bg-purplemedium hover:scale-110'
                }`}
                onClick={clearFavourites}
            >
                Clear
            </button>
        </div>
    );
};

Controls.propTypes = {
    favourites: PropTypes.array,
    hideFavourites: PropTypes.func,
    clearFavourites: PropTypes.func,
};

export default Controls;
