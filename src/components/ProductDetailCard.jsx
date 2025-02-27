import { useState } from "react"
import { Heart, ShoppingCart, Eye, ChevronLeft, ChevronRight } from "lucide-react"

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

export default function ProductDetailCard ({product}) {
    const [selectedColor, setSelectedColor] = useState("blue")
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
    const handlePrevImage = () => {
        setCurrentImageIndex((prev) => (prev === 0 ? product.images.length - 1 : prev - 1))
      }
    
      const handleNextImage = () => {
        setCurrentImageIndex((prev) => (prev === product.images.length - 1 ? 0 : prev + 1))
      }
    
      const handleThumbnailClick = (index) => {
        setCurrentImageIndex(index)
      }


    return (
        <div className="max-w-7xl mx-auto p-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Product Images Section */}
          <div className="md:w-1/2 relative">
            <div className="relative aspect-square overflow-hidden bg-gray-100">
              <img
                src={product.images[currentImageIndex] || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={handlePrevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/80 rounded-full shadow-md"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/80 rounded-full shadow-md"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
  
            {/* Thumbnails */}
            <div className="flex gap-2 mt-4 overflow-x-auto">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => handleThumbnailClick(index)}
                  className={`w-20 h-20 flex-shrink-0 border-2 ${currentImageIndex === index ? "border-primary" : "border-transparent"}`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
  
          {/* Product Details Section */}
          <div className="md:w-1/2">
            <h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>
  
            {/* Reviews */}
            <div className="flex items-center mt-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className={`w-5 h-5 ${star <= product.rating ? "text-yellow-400" : "text-gray-300"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-gray-500">{product.reviewCount} Reviews</span>
            </div>
  
            {/* Price */}
            <div className="mt-6">
              <h2 className="text-3xl font-bold text-gray-900">
                ${product.price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </h2>
            </div>
  
            {/* Availability */}
            <div className="mt-2 flex items-center">
              <span className="text-gray-700">Availability : </span>
              <span className="ml-1 text-blue-500 font-medium">In Stock</span>
            </div>
  
            {/* Description */}
            <div className="mt-6">
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>
  
            {/* Divider */}
            <div className="my-6 border-t border-gray-200"></div>
  
            {/* Color Options */}
            <div className="mt-6">
              <div className="flex gap-2">
                {["blue", "green", "orange", "navy"].map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 rounded-full ${
                      selectedColor === color ? "ring-2 ring-offset-2 ring-gray-800" : ""
                    }`}
                    style={{
                      backgroundColor:
                        color === "blue"
                          ? "#3B82F6"
                          : color === "green"
                            ? "#10B981"
                            : color === "orange"
                              ? "#F97316"
                              : color === "navy"
                                ? "#1E3A8A"
                                : "",
                    }}
                    aria-label={`Select ${color} color`}
                  />
                ))}
              </div>
            </div>
  
            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="bg-blue-500 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-600 transition-colors flex-grow md:flex-grow-0">
                Select Options
              </button>
              <button className="p-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                <Heart className="w-6 h-6" />
              </button>
              <button className="p-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                <ShoppingCart className="w-6 h-6" />
              </button>
              <button className="p-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                <Eye className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    )
}