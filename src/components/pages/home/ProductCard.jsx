import React from 'react';

const ProductCard = ({ image, title, department, price, oldPrice }) => {
    return (
        <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <img className="w-full h-64 object-cover object-center" src={image} alt={title} />
            <div className="p-4">
                <h2 className="text-lg font-semibold">{title}</h2>
                <p className="text-gray-600">{department}</p>
                <div className="flex justify-between items-center mt-2">
                    <span className="text-xl font-bold text-gray-800">${price}</span>
                    <span className="text-sm text-gray-500 line-through">${oldPrice}</span>
                </div>
                <div className="mt-2">
                    <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;