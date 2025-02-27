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
       <div></div>
    )
}