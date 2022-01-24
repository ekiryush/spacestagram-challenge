import { arrowdown, arrowup } from '../assets/Icons';

export const initialState = { isDropdownOpen: false, arrow: arrowdown };

export const dropdownReducer = (state, action) => {
    if (action.type === 'DROPDOWN_OPEN') {
        return { isDropdownOpen: true, arrow: arrowup };
    }
    if (action.type === 'DROPDOWN_CLOSE') {
        return { isDropdownOpen: false, arrow: arrowdown };
    }
    return state;
};
