import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ChevronRight } from "lucide-react";
import Layout from "../layout/Layout";
import ProductDetailCard from "./ProductDetailCard";
import ProductDescription from "./ProductDescription";
import ProductBestseller from "./ProductBestseller";
import Logo from "../pages/shop/Logo";
import { fetchProductById } from "../../store/actions/productActions";

export default function ProductDetailPage() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { product, loading, error } = useSelector((state) => state.product.currentProduct || {});

    useEffect(() => {
        if (id) {
            dispatch(fetchProductById(id));
        }
    }, [dispatch, id]);

    if (loading) {
        return (
            <Layout>
                <div className="flex justify-center items-center min-h-screen">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
                </div>
            </Layout>
        );
    }

    if (error) {
        return (
            <Layout>
                <div className="flex justify-center items-center min-h-screen">
                    <div className="text-red-600">Error loading product: {error}</div>
                </div>
            </Layout>
        );
    }

    if (!product) {
        return (
            <Layout>
                <div className="flex justify-center items-center min-h-screen">
                    <div className="text-gray-600">Product not found</div>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="bg-gray-50">
                {/* ProductDetailPage Header Section */}
                <div className="bg-gray-100">
                    <div className="container mx-auto px-4 py-8">
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                            <nav className="flex items-center space-x-2 text-sm md:text-base">
                                <Link 
                                    to="/" 
                                    className="text-gray-900 hover:text-blue-600 transition-colors"
                                >
                                    Home
                                </Link>
                                <ChevronRight className="w-4 h-4 text-gray-400" />
                                <Link
                                    to="/shop"
                                    className="text-gray-900 hover:text-blue-600 transition-colors"
                                >
                                    Shop
                                </Link>
                                <ChevronRight className="w-4 h-4 text-gray-400" />
                                <span className="text-gray-500">{product.name}</span>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <ProductDetailCard product={product} />
            <ProductDescription product={product} />
            <ProductBestseller />
            <Logo />
        </Layout>
    );
}