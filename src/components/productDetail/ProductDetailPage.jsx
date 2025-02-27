import Layout from "../layout/Layout";
import {Link} from "react-router-dom"
import { ChevronRight } from "lucide-react";
import ProductDetailCard from "./ProductDetailCard";


export default function ProductDetailPage () {


    const product = {
        id: 1,
        name: "Floating Phone",
        price: 1139.33,
        rating: 4,
        reviewCount: 10,
        description:
          "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
        availability: "In Stock",
        colors: ["blue", "green", "orange", "navy"],
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/desktop-product-cards-42-OzRo0nlzRCw8Tebp0kjm0HT5QVAEL2.png",
          "/placeholder.svg?height=400&width=400",
          "/placeholder.svg?height=400&width=400",
        ],
      }

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
      <ProductDetailCard product={product}/>
        </Layout>
    )
}