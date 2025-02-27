import axios from 'axios';

// For testing purposes
const mockProducts = {
    total: 185,
    products: Array.from({ length: 12 }, (_, index) => ({
        id: index + 1,
        name: `Product ${index + 1}`,
        description: `Description for product ${index + 1}`,
        price: Math.floor(Math.random() * 200) + 50,
        oldPrice: Math.floor(Math.random() * 300) + 100,
        rating: (Math.random() * 2 + 3).toFixed(1),
        imageUrl: `/images/products/product-${index + 1}.jpg`,
        category: {
            id: Math.floor(Math.random() * 5) + 1,
            name: ['Ayakkabi', 'Elbise', 'Gomlek', 'Pantolon', 'Canta'][Math.floor(Math.random() * 5)],
            gender: Math.random() > 0.5 ? 'kadin' : 'erkek'
        }
    }))
};

export const fetchProducts = (params = {}) => async (dispatch) => {
    try {
        dispatch({ type: 'FETCH_PRODUCTS_START' });

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 800));

        // For testing with mock data
        dispatch({
            type: 'FETCH_PRODUCTS_SUCCESS',
            payload: mockProducts
        });

        // When API is ready, uncomment this:
        // const response = await axios.get('/products', { params });
        // dispatch({
        //     type: 'FETCH_PRODUCTS_SUCCESS',
        //     payload: response.data
        // });
    } catch (error) {
        dispatch({
            type: 'FETCH_PRODUCTS_FAIL',
            payload: error.message
        });
    }
};
