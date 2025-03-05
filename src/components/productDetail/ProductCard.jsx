import React from 'react';
import { useHistory } from 'react-router-dom';

const ProductCard = ({ id, image, title, department, price, oldPrice, colors = [] }) => {
    const history = useHistory();

    const handleClick = () => {
        history.push(`/product/${id}`); // Update to navigate to ProductDetailPage

    };

    return (
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{department}</p>
            <p>${price}</p>
            {oldPrice && <p className="line-through">${oldPrice}</p>}
        </div>
    );
};

export default ProductCard;
