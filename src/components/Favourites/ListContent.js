import React from 'react';
import PropTypes from 'prop-types';
import Card from '../PhotoCard/Card';
import { bookmarkIcon } from '../../assets/Icons';

const ListContent = ({ favourites, handleFavourites }) => {
    let listContent = (
        <>
            <p className="mb-6 mx-auto font-base text-white" data-testid="nofav-note">
                Would you like to add a favourite?
            </p>
            <div className="mt-5 mb-10 mx-auto text-7xl opacity-50 text-white">{bookmarkIcon}</div>
        </>
    );
    if (favourites.length > 0) {
        listContent = (
            <>
                <p className="mb-4 mx-auto font-base text-white">{`You liked ${favourites.length} ${
                    favourites.length === 1 ? 'image' : 'images'
                }:`}</p>
                <ul
                    className={
                        favourites.length > 4
                            ? 'mb-5 mx-auto grid xl:gap-5 xl:grid-cols-4 lg:gap-2 lg:grid-cols-3 md:gap-2 md:grid-cols-2 sm:grid-cols-1'
                            : 'mb-5 mx-auto flex flex-wrap justify-center'
                    }
                    role="list"
                >
                    {favourites.map(result => (
                        <Card
                            key={result.url}
                            image={result}
                            handleFavourites={handleFavourites}
                            inFavourites={favourites.find(favImage => favImage.url === result.url) ? true : false}
                        />
                    ))}
                </ul>
            </>
        );
    }

    return <>{listContent}</>;
};

ListContent.propTypes = {
    favourites: PropTypes.array,
    handleFavourites: PropTypes.func,
};

export default ListContent;
