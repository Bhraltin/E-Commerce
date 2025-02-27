import React from 'react';
import { bestsellerData } from '../../data/bestsellerData';
import ProductCard from './ProductCard';

const ProductBestseller = () => {
    return (
        <div className="py-8 px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Bestsellers</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {bestsellerData.map((product) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        image={product.image}
                        title={product.title}
                        department={product.department}
                        price={product.price}
                        oldPrice={product.oldPrice}
                        colors={product.colors}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductBestseller;
