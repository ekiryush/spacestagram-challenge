import React from 'react';
import PropTypes from 'prop-types';
import Card from '../PhotoCard/Card';
import Spinner from '../UI/Spinner';
import { imgIcon, bugIcon } from '../../assets/Icons';

const ListContent = ({ fetchResultProp, favouriteProp, countProp }) => {
    const { results, error, isLoading } = fetchResultProp;
    const { searchCount } = countProp;
    const { favourites, handleFavourites } = favouriteProp;

    let listContent = <div className="mt-5 mb-10 mx-auto text-7xl opacity-50 text-white">{imgIcon}</div>;
    if (results.length > 0) {
        listContent = (
            <ul className="mb-5 grid xl:gap-5 xl:grid-cols-4 lg:gap-2 lg:grid-cols-3 md:gap-2 md:grid-cols-2 sm:grid-cols-1">
                {results.map(result => (
                    <Card
                        key={result.url}
                        image={result}
                        handleFavourites={handleFavourites}
                        inFavourites={favourites.find(favImage => favImage.url === result.url) ? true : false}
                    />
                ))}
            </ul>
        );
    }

    if (searchCount && error) {
        listContent = (
            <>
                <div className="mt-5 mb-10 mx-auto text-7xl opacity-50 text-white">{bugIcon}</div>
                <div className="mb-10 mx-auto font-base text-white">Something went wrong... Please try again!</div>
            </>
        );
    }

    if (searchCount && isLoading) {
        listContent = <div className="mb-40">{<Spinner />}</div>;
    }

    return <>{listContent}</>;
};

ListContent.propTypes = {
    fetchResultProp: PropTypes.object,
    favouriteProp: PropTypes.object,
    countProp: PropTypes.object,
};

export default ListContent;
