import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000'; // Update this with your actual API base URL

export const fetchCategories = () => async (dispatch) => {
    try {
        dispatch({ type: 'FETCH_CATEGORIES_START' });
        
        // Mock data
        const mockCategories = [
            {
                id: 1,
                name: "Ayakkabi",
                gender: "kadin",
                rating: 4.5,
                imageUrl: "/images/categories/women-shoes.jpg"
            },
            {
                id: 2,
                name: "Elbise",
                gender: "kadin",
                rating: 4.8,
                imageUrl: "/images/categories/women-dresses.jpg"
            },
            {
                id: 3,
                name: "Gomlek",
                gender: "erkek",
                rating: 4.3,
                imageUrl: "/images/categories/men-shirts.jpg"
            },
            {
                id: 4,
                name: "Pantolon",
                gender: "erkek",
                rating: 4.6,
                imageUrl: "/images/categories/men-pants.jpg"
            },
            {
                id: 5,
                name: "Canta",
                gender: "kadin",
                rating: 4.7,
                imageUrl: "/images/categories/women-bags.jpg"
            }
        ];

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));

        dispatch({
            type: 'FETCH_CATEGORIES_SUCCESS',
            payload: mockCategories
        });
    } catch (error) {
        dispatch({
            type: 'FETCH_CATEGORIES_FAIL',
            payload: error.message
        });
    }
};
