import React from 'react';
import ProductCard from './ProductCard';

const products = [
    {
        id: 1,
        image: '/images/product1.jpg',
        title: 'Graphic Design',
        department: 'English Department',
        price: '6.48',
        oldPrice: '16.48',
        colors: ['#23A6F0', '#2DC071', '#E77C40', '#252B42']
    },
    {
        id: 2,
        image: '/images/product2.jpg',
        title: 'Graphic Design',
        department: 'English Department',
        price: '6.48',
        oldPrice: '16.48',
        colors: ['#23A6F0', '#2DC071', '#E77C40', '#252B42']
    },
    {
        id: 3,
        image: '/images/product3.jpg',
        title: 'Graphic Design',
        department: 'English Department',
        price: '6.48',
        oldPrice: '16.48',
        colors: ['#23A6F0', '#2DC071', '#E77C40', '#252B42']
    },
    {
        id: 4,
        image: '/images/product4.jpg',
        title: 'Graphic Design',
        department: 'English Department',
        price: '6.48',
        oldPrice: '16.48',
        colors: ['#23A6F0', '#2DC071', '#E77C40', '#252B42']
    },
    {
        id: 5,
        image: '/images/product5.jpg',
        title: 'Graphic Design',
        department: 'English Department',
        price: '6.48',
        oldPrice: '16.48',
        colors: ['#23A6F0', '#2DC071', '#E77C40', '#252B42']
    },
    {
        id: 6,
        image: '/images/product6.jpg',
        title: 'Graphic Design',
        department: 'English Department',
        price: '6.48',
        oldPrice: '16.48',
        colors: ['#23A6F0', '#2DC071', '#E77C40', '#252B42']
    },
    {
        id: 7,
        image: '/images/product7.jpg',
        title: 'Graphic Design',
        department: 'English Department',
        price: '6.48',
        oldPrice: '16.48',
        colors: ['#23A6F0', '#2DC071', '#E77C40', '#252B42']
    },
    {
        id: 8,
        image: '/images/product8.jpg',
        title: 'Graphic Design',
        department: 'English Department',
        price: '6.48',
        oldPrice: '16.48',
        colors: ['#23A6F0', '#2DC071', '#E77C40', '#252B42']
    }
];

const ProductList = () => {
    return (
        <section className="py-16 px-4">
            <div className="container mx-auto max-w-7xl">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        BESTSELLER PRODUCTS
                    </h2>
                    <p className="text-gray-600">
                        Problems trying to resolve the conflict between
                    </p>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map(product => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductList;