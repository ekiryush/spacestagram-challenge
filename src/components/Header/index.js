import React from 'react';
import PropTypes from 'prop-types';
import { unfilledHeart, github } from '../../assets/Icons';

const Header = ({ showFavourites, btnAnimated }) => {
    return (
        <header className="flex md:flex-row md:justify-between sm:flex-col w-full my-6 rounded-2xl bg-purplemedium">
            <h1 className="md:m-6 sm:mx-6 sm:mt-6 sm:mb-1 font-cursive font-extrabold text-4xl underline text-center text-white">
                spacestagram
            </h1>
            <nav className="flex m-6 sm:justify-center md:justify-end">
                <button
                    onClick={showFavourites}
                    className={`cursor-pointer font-base text-sm py-1 px-2 border-2 my-2 ml-3 rounded-lg transform transition duration-100 hover:scale-110 text-white bg-purplelight border-white hover:bg-purplemedium focus:bg-purpledark focus:outline-none ${
                        btnAnimated ? 'animate-wiggle' : ''
                    }`}
                >
                    <span className="header__span">Favourites</span>
                    <span className="header__span" aria-hidden="true">
                        {unfilledHeart}
                    </span>
                </button>
                <a
                    href="https://github.com/ekiryush/front-end-intern-challenge"
                    className="cursor-pointer font-base text-sm py-1 px-2 border-2 my-2 ml-3 rounded-lg transform transition duration-100 hover:scale-110 text-white bg-purplelight border-white hover:bg-purplemedium focus:bg-purpledark focus:outline-none"
                >
                    <span className="header__span">GitHub</span>
                    <span className="header__span">{github}</span>
                </a>
            </nav>
        </header>
    );
};

Header.propTypes = {
    showFavourites: PropTypes.func,
    btnAnimated: PropTypes.bool,
};

export default Header;
