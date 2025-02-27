import React, { useState, useEffect } from "react";
import { Link, useParams, useLocation, useHistory } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import ShopCategories from "./ShopCategories";
import ProductList from "./ProductList";
import Logo from "./Logo";
import Layout from "../../layout/Layout";

const sortOptions = [
    { value: "", label: "Select Sort Option" },
    { value: "price:asc", label: "Price: Low to High" },
    { value: "price:desc", label: "Price: High to Low" },
    { value: "rating:asc", label: "Rating: Low to High" },
    { value: "rating:desc", label: "Rating: High to Low" }
];

export default function ShopPage() {
    const { gender, categoryName, categoryId } = useParams();
    const location = useLocation();
    const history = useHistory();
    const [filter, setFilter] = useState("");
    const [sort, setSort] = useState("");

    // Get query params from URL
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        setFilter(searchParams.get('filter') || "");
        setSort(searchParams.get('sort') || "");
    }, [location.search]);

    // Update URL and query params when filters change
    const updateQueryParams = (newParams) => {
        const searchParams = new URLSearchParams(location.search);
        
        // Update search params
        Object.entries(newParams).forEach(([key, value]) => {
            if (value) {
                searchParams.set(key, value);
            } else {
                searchParams.delete(key);
            }
        });

        // Build the new URL
        const newSearch = searchParams.toString();
        history.push({
            pathname: location.pathname,
            search: newSearch ? `?${newSearch}` : ""
        });
    };

    const handleFilterChange = (e) => {
        const newFilter = e.target.value;
        setFilter(newFilter);
        updateQueryParams({ filter: newFilter });
    };

    const handleSortChange = (e) => {
        const newSort = e.target.value;
        setSort(newSort);
        updateQueryParams({ sort: newSort });
    };

    return (
        <Layout>
            <div className="bg-gray-50">
                {/* Shop Header Section */}
                <div className="bg-gray-100">
                    <div className="container mx-auto px-4 py-8">
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                            {/* Page Title */}
                            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                                Shop {categoryName && `- ${categoryName}`}
                            </h1>
                            <nav className="flex items-center space-x-2 text-sm md:text-base">
                                <Link 
                                    to="/" 
                                    className="text-gray-900 hover:text-blue-600 transition-colors"
                                >
                                    Home
                                </Link>
                                <ChevronRight className="w-4 h-4 text-gray-400" />
                                <span className="text-gray-500">Shop</span>
                            </nav>
                        </div>
                    </div>
                </div>

                {/* Filter Section */}
                <div className="container mx-auto px-4 py-4">
                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-end">
                        <input
                            type="text"
                            value={filter}
                            onChange={handleFilterChange}
                            placeholder="Search products..."
                            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <select
                            value={sort}
                            onChange={handleSortChange}
                            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            {sortOptions.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Categories Section */}
                <section className="py-8">
                    <ShopCategories />
                </section>

                {/* Products Section */}
                <section className="py-8">
                    <ProductList
                        categoryId={categoryId}
                        filter={filter}
                        sort={sort}
                    />
                </section>

                {/* Logo Section */}
                <Logo />
            </div>
        </Layout>
    );
}