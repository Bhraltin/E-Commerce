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
        },
        availability: "In Stock",
        colors: ["blue", "green", "orange", "navy"],
        images: [
            `/images/products/product-${index + 1}.jpg`,
            `/images/products/product-${index + 1}-2.jpg`,
            `/images/products/product-${index + 1}-3.jpg`,
        ],
        reviewCount: Math.floor(Math.random() * 100) + 10
    }))
};

const filterMockProducts = (params) => {
    const { limit = 25, offset = 0 } = params; // Set default values for limit and offset

    let filteredProducts = [...mockProducts.products];

    // Apply category filter
    if (params.category) {
        filteredProducts = filteredProducts.filter(p => p.category.id === parseInt(params.category));
    }

    // Apply text filter
    if (params.filter) {
        const searchTerm = params.filter.toLowerCase();
        filteredProducts = filteredProducts.filter(p => 
            p.name.toLowerCase().includes(searchTerm) || 
            p.description.toLowerCase().includes(searchTerm)
        );
    }

    // Apply sorting
    if (params.sort) {
        const [field, direction] = params.sort.split(':');
        filteredProducts.sort((a, b) => {
            const aValue = field === 'price' ? a.price : a.rating;
            const bValue = field === 'price' ? b.price : b.rating;
            return direction === 'asc' ? aValue - bValue : bValue - aValue;
        });
    }

    const paginatedProducts = filteredProducts.slice(offset, offset + limit); // Apply pagination
    return {
        total: filteredProducts.length,
        products: paginatedProducts, // Return paginated products
    };
};

export const fetchProducts = (params = {}) => async (dispatch) => {
    const { limit = 25, offset = 0 } = params; // Set default values for limit and offset

    try {
        dispatch({ type: 'FETCH_PRODUCTS_START' });

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 800));

        // For testing with mock data
        const filteredData = filterMockProducts({ ...params, limit, offset }); // Pass limit and offset

        dispatch({
            type: 'FETCH_PRODUCTS_SUCCESS',
            payload: filteredData
        });
    } catch (error) {
        dispatch({
            type: 'FETCH_PRODUCTS_FAIL',
            payload: error.message
        });
    }
};

// New action to fetch product by ID
export const fetchProductById = (id) => async (dispatch) => {
    try {
        dispatch({ type: 'FETCH_PRODUCT_BY_ID_START' });

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));

        // For testing with mock data
        const product = mockProducts.products.find(p => p.id === parseInt(id));
        
        if (!product) {
            throw new Error('Product not found');
        }

        dispatch({
            type: 'FETCH_PRODUCT_BY_ID_SUCCESS',
            payload: product
        });
    } catch (error) {
        dispatch({
            type: 'FETCH_PRODUCT_BY_ID_FAIL',
            payload: error.message
        });
    }
};
