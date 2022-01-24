import React from 'react';
import PropTypes from 'prop-types';
import { video } from '../../assets/Icons';

const CardImage = ({ isDescriptionShown, setIsDescriptionShown, image }) => {
    return (
        <div className="card mx-auto w-250 h-225 mt-5 focus:bg-purpledark focus:outline-none">
            {!isDescriptionShown && image.url && image['media_type'] === 'image' && (
                <img
                    onMouseOver={() => setIsDescriptionShown(true)}
                    onFocus={() => setIsDescriptionShown(true)}
                    className="card--front rounded-3xl w-full h-full focus:bg-purpledark focus:outline-none box-border"
                    src={image.url}
                    alt={`Image of ${image.title}`}
                    tabIndex={0}
                    role="img"
                ></img>
            )}
            {!isDescriptionShown && !image.url && (
                <div
                    className="card--front flex justify-center items-center rounded-3xl w-full h-full box-border border-purplemedium border-2 focus:bg-purpledark focus:outline-none"
                    onMouseOver={() => setIsDescriptionShown(true)}
                    onFocus={() => setIsDescriptionShown(true)}
                    tabIndex={0}
                >
                    <p className="font-base text-base opacity-60 text-white">No Image</p>
                </div>
            )}
            {!isDescriptionShown && image['media_type'] !== 'image' && (
                <div
                    className="card--front flex justify-center items-center rounded-3xl w-full h-full box-border border-purplemedium border-2 focus:bg-purpledark focus:outline-none"
                    onMouseOver={() => setIsDescriptionShown(true)}
                    onFocus={() => setIsDescriptionShown(true)}
                    tabIndex={0}
                >
                    {video}
                </div>
            )}
            {isDescriptionShown && (
                <p
                    className="card--back font-base text-base leading-5 rounded-3xl w-full h-full border-2 p-4 overflow-scroll box-border text-white focus:bg-purpledark focus:outline-none"
                    onMouseLeave={() => setIsDescriptionShown(false)}
                    onBlur={() => setIsDescriptionShown(false)}
                    tabIndex={0}
                    role="note"
                >
                    {image.explanation}
                </p>
            )}
        </div>
    );
};

CardImage.propTypes = {
    isDescriptionShown: PropTypes.bool,
    setIsDescriptionShown: PropTypes.func,
    image: PropTypes.object,
};

export default CardImage;
