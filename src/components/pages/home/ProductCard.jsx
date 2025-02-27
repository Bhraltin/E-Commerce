import React from 'react';
import { useHistory } from 'react-router-dom';
const ProductCard = ({id, image, title, department, price, oldPrice, colors = [] }) => {
    const history = useHistory();
    const handleClick = () => {
        history.push(`/product/${id}`)
    }
    return (
        <div className="group" onClick={handleClick}>
            {/* Image Container */}
            <div className="relative overflow-hidden mb-4">
                <img 
                    className="w-full h-[400px] object-cover object-center transition-transform duration-300 group-hover:scale-105" 
                    src={image} 
                    alt={title} 
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>

            {/* Product Info */}
            <div className="space-y-2">
                <h3 className="text-lg font-medium text-gray-900">{title}</h3>
                <p className="text-gray-500">{department}</p>
                <div className="flex items-center gap-2">
                    <span className="text-green-600 font-medium">${price}</span>
                    {oldPrice && (
                        <span className="text-gray-500 line-through">${oldPrice}</span>
                    )}
                </div>
                
                {/* Color Options */}
                {colors.length > 0 && (
                    <div className="flex gap-2 mt-2">
                        {colors.map((color, index) => (
                            <button
                                key={index}
                                className={`w-4 h-4 rounded-full border border-gray-300`}
                                style={{ backgroundColor: color }}
                                aria-label={`Select ${color} color`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductCard;