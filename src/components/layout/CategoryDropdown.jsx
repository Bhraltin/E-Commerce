import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const CategoryDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { categories, loading } = useSelector(state => state.category || { categories: [], loading: false });
    const history = useHistory();

    const handleCategoryClick = (gender, category) => {
        history.push(`/shop/${gender}/${category.name.toLowerCase()}/${category.id}`);
        setIsOpen(false);
    };

    const genderCategories = {
        kadin: categories?.filter(cat => cat?.gender === 'kadin') || [],
        erkek: categories?.filter(cat => cat?.gender === 'erkek') || []
    };

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-gray-900"
            >
                <span>Categories</span>
                <svg
                    className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute z-50 w-screen max-w-md mt-2 bg-white rounded-md shadow-lg">
                    {loading ? (
                        <div className="p-4 text-center text-gray-600">Loading categories...</div>
                    ) : (
                        <div className="grid grid-cols-2 gap-4 p-4">
                            {/* Women's Categories */}
                            <div>
                                <h3 className="text-lg font-semibold mb-2 text-gray-900">Women</h3>
                                <ul className="space-y-2">
                                    {genderCategories.kadin.map(category => (
                                        <li key={category.id}>
                                            <button
                                                onClick={() => handleCategoryClick('kadin', category)}
                                                className="text-gray-600 hover:text-gray-900 w-full text-left"
                                            >
                                                {category.name}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Men's Categories */}
                            <div>
                                <h3 className="text-lg font-semibold mb-2 text-gray-900">Men</h3>
                                <ul className="space-y-2">
                                    {genderCategories.erkek.map(category => (
                                        <li key={category.id}>
                                            <button
                                                onClick={() => handleCategoryClick('erkek', category)}
                                                className="text-gray-600 hover:text-gray-900 w-full text-left"
                                            >
                                                {category.name}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default CategoryDropdown;
