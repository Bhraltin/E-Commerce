const initialState = {
    products: [],
    total: 0,
    loading: false,
    error: null
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_PRODUCTS_START':
            return {
                ...state,
                loading: true,
                error: null
            };
        case 'FETCH_PRODUCTS_SUCCESS':
            return {
                ...state,
                loading: false,
                products: action.payload.products,
                total: action.payload.total,
                error: null
            };
        case 'FETCH_PRODUCTS_FAIL':
            return {
                ...state,
                loading: false,
                error: action.payload,
                products: [],
                total: 0
            };
        default:
            return state;
    }
};

export default productReducer;