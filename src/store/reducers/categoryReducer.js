const initialState = {
    categories: [],
    topCategories: [],
    loading: false,
    error: null
};

export const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_CATEGORIES_START':
            return {
                ...state,
                loading: true,
                error: null
            };
        case 'FETCH_CATEGORIES_SUCCESS':
            // Ensure payload is an array before sorting
            const categories = Array.isArray(action.payload) ? action.payload : [];
            return {
                ...state,
                loading: false,
                categories: categories,
                topCategories: [...categories]
                    .sort((a, b) => (b.rating || 0) - (a.rating || 0))
                    .slice(0, 5),
                error: null
            };
        case 'FETCH_CATEGORIES_FAIL':
            return {
                ...state,
                loading: false,
                error: action.payload,
                categories: [],
                topCategories: []
            };
        default:
            return state;
    }
};
