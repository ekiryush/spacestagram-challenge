export const initialState = { results: [], error: null, isLoading: false };

export const fetchReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_START':
            return { ...state, isLoading: true, error: null };
        case 'FETCH_SUCCESS':
            return { ...state, results: action.payload, isLoading: false };
        case 'FETCH_FAIL':
            return { ...state, error: action.payload, isLoading: false };
        default:
            return initialState;
    }
};
