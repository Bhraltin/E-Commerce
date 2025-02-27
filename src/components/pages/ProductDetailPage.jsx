import Layout from "../layout/Layout";
import {Link} from "react-router-dom"
import { ChevronRight } from "lucide-react";

export default function ProductDetailPage () {
    return (
        <Layout>
            <div className=" bg-gray-50">
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
              <span className="text-gray-500">Shop</span>
            </nav>
          </div>
        </div>
      </div>
      </div>
        </Layout>
    )
}