const initialState = {
    products: [],
    total: 0,
    loading: false,
    error: null,
    currentProduct: {
        product: null,
        loading: false,
        error: null
    },
    cart: [] // Initialize cart as an empty array
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
        case 'FETCH_PRODUCT_BY_ID_START':
            return {
                ...state,
                currentProduct: {
                    product: null,
                    loading: true,
                    error: null
                }
            };
        case 'FETCH_PRODUCT_BY_ID_SUCCESS':
            return {
                ...state,
                currentProduct: {
                    product: action.payload,
                    loading: false,
                    error: null
                }
            };
        case 'FETCH_PRODUCT_BY_ID_FAIL':
            return {
                ...state,
                currentProduct: {
                    product: null,
                    loading: false,
                    error: action.payload
                }
            };
        default:
            return state;
    }
};

export default productReducer;
