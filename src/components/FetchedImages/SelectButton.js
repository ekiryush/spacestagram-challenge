import React, { useReducer } from 'react';
import { arrowdown } from '../../assets/Icons';
import { initialState, dropdownReducer } from '../../reducers/dropdownReducer';
import PropTypes from 'prop-types';

const SelectButton = ({ setSearchCount }) => {
    const [dropdownState, dispatch] = useReducer(dropdownReducer, initialState);

    const dropdownOpenHandler = () => {
        if (dropdownState.isDropdownOpen) {
            dispatch({ type: 'DROPDOWN_CLOSE' });
        } else {
            dispatch({ type: 'DROPDOWN_OPEN' });
        }
    };

    const clickHandler = evt => {
        setSearchCount(evt.target.value);
        dispatch({ type: 'DROPDOWN_CLOSE' });
    };

    return (
        <div className="flex flex-col items-center justify-center font-base text-white font-normal w-fit-content mt-2 mb-8 relative">
            <div>
                <button
                    className="cursor-pointer p-2 border-2 rounded-lg bg-purplemedium focus:bg-purpledark focus:outline-none"
                    onClick={dropdownOpenHandler}
                >
                    <span>Generate Random Images</span>
                    <span
                        className={`inline-block pl-2 relative ${
                            dropdownState.arrow === arrowdown ? '-top-0.5' : 'top-1.5'
                        }`}
                    >
                        {dropdownState.arrow}
                    </span>
                </button>
            </div>
            {dropdownState.isDropdownOpen && (
                <div
                    className="flex flex-col items-center bg-purplelight bg-opacity-95 p-1 rounded-lg mt-1 w-full z-10 absolute top-11"
                    data-testid="dropdown"
                >
                    <button className="button-option" value="5" onClick={clickHandler}>
                        5 images
                    </button>
                    <button className="button-option" value="10" onClick={clickHandler}>
                        10 images
                    </button>
                    <button className="button-option" value="15" onClick={clickHandler}>
                        15 images
                    </button>
                    <button className="button-option" value="20" onClick={clickHandler}>
                        20 images
                    </button>
                    <button className="button-option border-none" value="25" onClick={clickHandler}>
                        25 images
                    </button>
                </div>
            )}
        </div>
    );
};

SelectButton.propTypes = {
    setSearchCount: PropTypes.func,
};

export default SelectButton;
