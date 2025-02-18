import React from 'react';
import ProductCard from './ProductCard';

const products = [
    {
        id: 1,
        image: 'link_to_image_1',
        title: 'Graphic Design',
        department: 'English Department',
        price: '15.99',
        oldPrice: '24.99',
    },
    {
        id: 2,
        image: 'link_to_image_2',
        title: 'Graphic Design',
        department: 'English Department',
        price: '16.99',
        oldPrice: '25.99',
    },
    // Add more products as needed
];

const ProductList = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Featured Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map(product => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;