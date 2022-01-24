import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CardImage from './CardImage';
import CardControls from './CardControls';

const Card = ({ image, handleFavourites, inFavourites }) => {
    const [isDescriptionShown, setIsDescriptionShown] = useState(false);

    const dateArray = image.date.split('-');
    const utcDate = new Date(Date.UTC(dateArray[0], dateArray[1] - 1, dateArray[2]));
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = utcDate.toLocaleDateString('en-US', options);

    const descriptionProp = { isDescriptionShown, setIsDescriptionShown };

    return (
        <li
            className="flex flex-col md:w-300 md:h-400 sm:w-11/12 justify-center bg-gradient-to-tr from-purplelight to-purpledark border-white border-2 rounded-2xl mx-3 my-2"
            area-label="Random image"
        >
            <CardImage {...descriptionProp} image={image} />
            <div className="text-center font-base font-bold text-lg mt-3 mb-1 w-5/6 mx-auto overflow-scroll max-h-12  text-white leading-5">
                <p className=" max-h-5">{image.title}</p>
            </div>
            <div className="text-center font-base text-sm italic text-white">
                <p>{formattedDate}</p>
            </div>
            <CardControls image={image} handleFavourites={handleFavourites} inFavourites={inFavourites} />
        </li>
    );
};

Card.propTypes = {
    image: PropTypes.object,
    handleFavourites: PropTypes.func,
    inFavourites: PropTypes.bool,
};

export default Card;
