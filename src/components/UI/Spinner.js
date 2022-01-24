import React from 'react';

const Spinner = () => {
    return (
        <div className="sh-32 w-32 absolute mb-16 mx-auto inset-x-0" aria-label="Images are loading">
            <div className="spinner__circle border-purpledark animate-spin-fast w-32 h-32">
                <div className="spinner__planet bg-purpledark left-7"></div>
            </div>
            <div className="spinner__circle border-purplelight animate-spin-medium relative -top-28 w-24 h-24">
                <div className="spinner__planet bg-purplelight left-4"></div>
            </div>
            <div className="spinner__circle border-purpleextralight animate-spin-slow relative -top-48 w-16 h-16">
                <div className="spinner__planet bg-purpleextralight left-1"></div>
            </div>
        </div>
    );
};

export default Spinner;
