import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductById } from '../../../store/actions/productActions';
import { useParams, useHistory } from 'react-router-dom';

const ProductDetail = () => {
    const { productId } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const { currentProduct, loading, error } = useSelector(state => state.product);

    useEffect(() => {
        dispatch(fetchProductById(productId));
    }, [dispatch, productId]);

    const handleBack = () => {
        history.goBack();
    };

    if (loading || !currentProduct.product) {
        return <div>Loading...</div>;
    }


    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <button onClick={handleBack}>Back</button>
            <h1>{currentProduct.product ? currentProduct.product.name : 'Product not found'}</h1>

            <img src={currentProduct.product.images[0].url} alt={currentProduct.product.name} />
            <p>{currentProduct.product.description}</p>
            <p>Price: ${currentProduct.product.price}</p>
            <p>Stock: {currentProduct.product.stock}</p>
        </div>
    );
};

export default ProductDetail;
