import { useState } from "react"
import {Link} from "react-router-dom"
import {
  Menu,
  X,
  Phone,
  Mail,
  Search,
  ShoppingCart,
  Heart,
  ChevronDown,
  Instagram,
  Youtube,
  Facebook,
  Twitter,
} from "lucide-react"


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(true)


  return (
    <header className="w-full">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-xl font-bold">
              BrandName
            </Link>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/" className="hover:text-blue-600">
                Home
              </Link>
              <div className="relative group">
                <button className="flex items-center gap-1 hover:text-blue-600">
                  Shop
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              <Link to="/about" className="hover:text-blue-600">
                About
              </Link>
              <Link to="/blog" className="hover:text-blue-600">
                Blog
              </Link>
              <Link to="/contact" className="hover:text-blue-600">
                Contact
              </Link>
              <Link to="/pages" className="hover:text-blue-600">
                Pages
              </Link>
            </nav>

            <div className="hidden md:flex items-center gap-4">
            <Link to="/login" className="text-blue-600 hover:text-blue-700" >
              Login
              </Link>
              <Link to="/signup" className="text-blue-600 hover:text-blue-700" >
               Register
              </Link>
              <button>
                <Search className="w-5 h-5" />
              </button>
              <button className="relative">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  1
                </span>
              </button>
              <button className="relative">
                <Heart className="w-5 h-5" />
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  1
                </span>
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <div className="md:hidden py-4">
              <nav className="flex flex-col gap-4">
                <Link to="/" className="text-gray-300 hover:text-blue-600">
                  Home
                </Link>
                <Link to="/shop" className="hover:text-blue-600">
                  Shop
                </Link>
                <Link to="/about" className="hover:text-blue-600">
                  About
                </Link>
                <Link to="/blog" className="hover:text-blue-600">
                  Blog
                </Link>
                <Link to="/contact" className="hover:text-blue-600">
                  Contact
                </Link>
                <Link to="/pages" className="hover:text-blue-600">
                  Pages
                </Link>
              </nav>
              <div className="flex items-center gap-4 mt-4 pt-4 border-t">
                <Link to="/signup" className="text-blue-600 hover:text-blue-700">
                  Login / Register
                </Link>
                <button>
                  <Search className="w-5 h-5" />
                </button>
                <button className="relative">
                  <ShoppingCart className="w-5 h-5" />
                  <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    
                  </span>
                </button>
                <button className="relative">
                  <Heart className="w-5 h-5" />
                  <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  </span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

