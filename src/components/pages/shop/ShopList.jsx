import React, { useState } from 'react';
import ProductCard from '../home/ProductCard';

const ShopList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // Number of items to show per page
  
  // Sample product data to match your image
  const products = [
    {
      id: 1,
      image: "/images/product1.jpg",
      title: "Graphic Design",
      department: "English Department",
      price: "6.48",
      oldPrice: "16.48",
      colors: ['#23A6F0', '#2DC071', '#E77C40', '#252B42']
    },
    {
      id: 2,
      image: "/images/product2.jpg",
      title: "Graphic Design",
      department: "English Department",
      price: "6.48",
      oldPrice: "16.48",
      colors: ['#23A6F0', '#2DC071', '#E77C40', '#252B42']
    },
    {
      id: 3,
      image: "/images/product3.jpg",
      title: "Graphic Design",
      department: "English Department",
      price: "6.48",
      oldPrice: "16.48",
      colors: ['#23A6F0', '#2DC071', '#E77C40', '#252B42']
    },
    {
      id: 4,
      image: "/images/product4.jpg",
      title: "Graphic Design",
      department: "English Department",
      price: "6.48",
      oldPrice: "16.48",
      colors: ['#23A6F0', '#2DC071', '#E77C40', '#252B42']
    },
    {
      id: 5,
      image: "/images/product5.jpg",
      title: "Graphic Design",
      department: "English Department",
      price: "6.48",
      oldPrice: "16.48",
      colors: ['#23A6F0', '#2DC071', '#E77C40', '#252B42']
    },
    {
      id: 6,
      image: "/images/product6.jpg",
      title: "Graphic Design",
      department: "English Department",
      price: "6.48",
      oldPrice: "16.48",
      colors: ['#23A6F0', '#2DC071', '#E77C40', '#252B42']
    },
    {
      id: 7,
      image: "/images/product7.jpg",
      title: "Graphic Design",
      department: "English Department",
      price: "6.48",
      oldPrice: "16.48",
      colors: ['#23A6F0', '#2DC071', '#E77C40', '#252B42']
    },
    {
      id: 8,
      image: "/images/product8.jpg",
      title: "Graphic Design",
      department: "English Department",
      price: "6.48",
      oldPrice: "16.48",
      colors: ['#23A6F0', '#2DC071', '#E77C40', '#252B42']
    },
    {
      id: 9,
      image: "/images/product9.jpg",
      title: "Graphic Design",
      department: "English Department",
      price: "6.48",
      oldPrice: "16.48",
      colors: ['#23A6F0', '#2DC071', '#E77C40', '#252B42']
    },
    {
      id: 10,
      image: "/images/product10.jpg",
      title: "Graphic Design",
      department: "English Department",
      price: "6.48",
      oldPrice: "16.48",
      colors: ['#23A6F0', '#2DC071', '#E77C40', '#252B42']
    },
    {
      id: 11,
      image: "/images/product11.jpg",
      title: "Graphic Design",
      department: "English Department",
      price: "6.48",
      oldPrice: "16.48",
      colors: ['#23A6F0', '#2DC071', '#E77C40', '#252B42']
    },
    {
      id: 12,
      image: "/images/product12.jpg",
      title: "Graphic Design",
      department: "English Department",
      price: "6.48",
      oldPrice: "16.48",
      colors: ['#23A6F0', '#2DC071', '#E77C40', '#252B42']
    }
  ];

  // Calculate pagination
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentProducts.map((product) => (
          <ProductCard 
            key={product.id}
            image={product.image}
            title={product.title}
            department={product.department}
            price={product.price}
            oldPrice={product.oldPrice}
            colors={product.colors}
          />
        ))}
      </div>
      
      {/* Pagination */}
      <div className="flex justify-center mt-12">
        <nav className="inline-flex rounded-lg overflow-hidden">
          <button
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
            className={`px-6 py-3 border border-gray-300 ${
              currentPage === 1 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'text-gray-600 bg-gray-100 hover:bg-gray-200'
            }`}
          >
            First
          </button>
          
          {[1, 2, 3].map((pageNum) => (
            <button
              key={pageNum}
              onClick={() => handlePageChange(pageNum)}
              className={`px-6 py-3 border-t border-b border-gray-300 ${
                currentPage === pageNum
                  ? 'text-white bg-blue-500 font-medium'
                  : 'text-gray-600 bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {pageNum}
            </button>
          ))}
          
          <button
            onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`px-6 py-3 border border-gray-300 ${
              currentPage === totalPages
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'text-gray-600 bg-gray-100 hover:bg-gray-200'
            }`}
          >
            Next
          </button>
        </nav>
      </div>
    </div>
  );
};

export default ShopList;