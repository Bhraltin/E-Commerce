import React from 'react';
import { useSelector } from 'react-redux';

const BasketDetails = ({ isVisible, onClose }) => {
    const cartItems = useSelector((state) => state.product.cart);

    if (!isVisible) return null;

    return (
        <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-lg font-bold">Basket</h2>
            {cartItems.length === 0 ? (
                <p>Your basket is empty.</p>
            ) : (
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.id} className="flex justify-between">
                            <span>{item.name}</span>
                            <span>{item.quantity}</span>
                        </li>
                    ))}
                </ul>
            )}
            <button onClick={onClose} className="mt-2 text-blue-600">Close</button>
        </div>
    );
};

export default BasketDetails;
