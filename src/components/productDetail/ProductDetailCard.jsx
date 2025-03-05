
import { useState } from "react"
import { Heart, ShoppingCart, Eye, ChevronLeft, ChevronRight, Plus, Minus } from "lucide-react"


const defaultProduct = {
  name: "Product Name",
  images: ["/placeholder.svg"],
  rating: 0,
  reviewCount: 0,
  price: 0,
  description: "No description available",
}

export default function ProductDetailCard({ product = defaultProduct }) {
  const [selectedColor, setSelectedColor] = useState("blue")
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [quantity, setQuantity] = useState(1)
  // Add this near the top of the component function
  const [totalPrice, setTotalPrice] = useState(product?.price || 0)

  const handlePrevImage = () => {
    const imagesLength = product?.images?.length || 1
    setCurrentImageIndex((prev) => (prev === 0 ? imagesLength - 1 : prev - 1))
  }

  const handleNextImage = () => {
    const imagesLength = product?.images?.length || 1
    setCurrentImageIndex((prev) => (prev === imagesLength - 1 ? 0 : prev + 1))
  }

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index)
  }

  // Add this function after the decreaseQuantity function
  const updateTotalPrice = (newQuantity) => {
    setTotalPrice(productPrice * newQuantity)
  }

  // Update the increaseQuantity and decreaseQuantity functions
  const increaseQuantity = () => {
    const newQuantity = quantity + 1
    setQuantity(newQuantity)
    updateTotalPrice(newQuantity)
  }

  const decreaseQuantity = () => {
    const newQuantity = quantity > 1 ? quantity - 1 : 1
    setQuantity(newQuantity)
    updateTotalPrice(newQuantity)
  }

  // Add this function to handle adding to basket
  const addToBasket = () => {
    console.log(`Added ${quantity} ${productName}(s) to basket`)
    // Here you would typically update your global state or send a request to your backend
  }

  // Safely access product properties with optional chaining and fallbacks
  const images = product?.images || ["/placeholder.svg"]
  const currentImage = images[currentImageIndex] || "/placeholder.svg"
  const productName = product?.name || "Product Name"
  const productRating = product?.rating || 0
  const productReviewCount = product?.reviewCount || 0
  const productPrice = product?.price || 0
  const productDescription = product?.description || "No description available"

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Images Section */}
        <div className="md:w-1/2 relative">
          <div className="relative aspect-square overflow-hidden bg-gray-100">
            <img src={currentImage || "/placeholder.svg"} alt={productName} className="w-full h-full object-cover" />
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
            {images.map((image, index) => (
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
          <h1 className="text-2xl font-bold text-gray-900">{productName}</h1>

          {/* Reviews */}
          <div className="flex items-center mt-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className={`w-5 h-5 ${star <= productRating ? "text-yellow-400" : "text-gray-300"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="ml-2 text-gray-500">{productReviewCount} Reviews</span>
          </div>

          {/* Price */}
          <div className="mt-6">
            {/* In the JSX, update the price display */}
            <h2 className="text-3xl font-bold text-gray-900">
              ${totalPrice.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </h2>
          </div>

          {/* Availability */}
          <div className="mt-2 flex items-center">
            <span className="text-gray-700">Availability : </span>
            <span className="ml-1 text-blue-500 font-medium">In Stock</span>
          </div>

          {/* Description */}
          <div className="mt-6">
            <p className="text-gray-600 leading-relaxed">{productDescription}</p>
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

          {/* Quantity Selector */}
          <div className="mt-6">
            <p className="text-gray-700 mb-2">Quantity:</p>
            <div className="flex items-center">
              <button
                onClick={decreaseQuantity}
                className="p-2 border border-gray-300 rounded-l-md hover:bg-gray-50 transition-colors"
                aria-label="Decrease quantity"
              >
                <Minus className="w-4 h-4" />
              </button>
              <div className="px-4 py-2 border-t border-b border-gray-300 min-w-[40px] text-center">{quantity}</div>
              <button
                onClick={increaseQuantity}
                className="p-2 border border-gray-300 rounded-r-md hover:bg-gray-50 transition-colors"
                aria-label="Increase quantity"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            {/* Replace the "Select Options" button with "Add to Basket" */}
            <button
              onClick={addToBasket}
              className="bg-blue-500 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-600 transition-colors flex-grow md:flex-grow-0"
            >
              Add to Basket
            </button>
            <button className="p-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
              <Heart className="w-6 h-6" />
            </button>
            <button className="p-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors relative">
              <ShoppingCart className="w-6 h-6" />
              {quantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {quantity}
                </span>
              )}
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

