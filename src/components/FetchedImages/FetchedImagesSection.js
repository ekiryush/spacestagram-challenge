import React from 'react';
import PropTypes from 'prop-types';
import ListContent from './ListContent';
import SelectButton from './SelectButton';

const FetchedImagesSection = ({ fetchResultProp, favouriteProp, countProp }) => {
    return (
        <main className="flex flex-col items-center w-full h-fit mr-6 rounded-2xl bg-purplemedium">
            <h2 className="text-center mx-auto mt-6 mb-3 font-base font-extrabold text-3xl text-white">
                Astronomy Photos
            </h2>
            <SelectButton {...countProp} />
            <ListContent fetchResultProp={fetchResultProp} favouriteProp={favouriteProp} countProp={countProp} />
        </main>
    );
};

FetchedImagesSection.propTypes = {
    fetchResultProp: PropTypes.object,
    favouriteProp: PropTypes.object,
    countProp: PropTypes.object,
};

export default FetchedImagesSection;
