import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../../store/actions/productActions';
import ProductCard from '../../productDetail/ProductCard';

const ProductList = ({ categoryId, filter, sort }) => {
    const dispatch = useDispatch();
    const { products, loading, error, total } = useSelector(state => state.product);
    const [limit, setLimit] = useState(25);
    const [offset, setOffset] = useState(0);
    console.log('Products:', products, 'Loading:', loading, 'Error:', error);

    useEffect(() => {
        const params = {
            category: categoryId,
            filter: filter,
            sort: sort,
            limit: limit,
            offset: offset
        };
        if (categoryId) params.category = categoryId;
        if (filter) params.filter = filter;
        if (sort) params.sort = sort;
        
        dispatch(fetchProducts(params));
    }, [dispatch, categoryId, filter, sort, limit, offset]);

    const handleNextPage = () => {
        setOffset(prevOffset => prevOffset + limit);
    };

    const handlePreviousPage = () => {
        setOffset(prevOffset => Math.max(prevOffset - limit, 0));
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[400px]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center text-red-600 py-8">
                Error loading products: {error}
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Products</h2>
                <span className="text-gray-600">Total Products: {total}</span>
            </div>
            
            {products.length === 0 ? (
                <div className="text-center text-gray-600 py-8" key={total}>
                    <button onClick={handlePreviousPage} disabled={offset === 0}>Previous</button>
                    <button onClick={handleNextPage} disabled={offset + limit >= total}>Next</button>
                    No products found matching your criteria.
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            image={product.imageUrl}
                            title={product.name}
                            department={product.category.name}
                            price={product.price}
                            oldPrice={product.oldPrice}
                            colors={[]}  // Add colors if available in your data
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProductList;
