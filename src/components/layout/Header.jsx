
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
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex items-center gap-4 mb-2 md:mb-0">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(225) 555-0118</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>michelle.rivera@example.com</span>
              </div>
            </div>
            <p className="hidden md:block">Follow Us and get a chance to win 80% off</p>
            <div className="flex items-center gap-4">
              <span className="hidden md:inline">Follow Us :</span>
              <div className="flex gap-3">
                <Link to="#" className="hover:text-gray-300">
                  <Instagram className="w-4 h-4" />
                </Link>
                <Link to="#" className="hover:text-gray-300">
                  <Youtube className="w-4 h-4" />
                </Link>
                <Link to="#" className="hover:text-gray-300">
                  <Facebook className="w-4 h-4" />
                </Link>
                <Link to="#" className="hover:text-gray-300">
                  <Twitter className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
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
              <Link href="/contact" className="hover:text-blue-600">
                Contact
              </Link>
              <Link to="/pages" className="hover:text-blue-600">
                Pages
              </Link>
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <Link to="/login" className="text-blue-600 hover:text-blue-700">
                Login / Register
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

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4">
              <nav className="flex flex-col gap-4">
                <Link to="/" className="hover:text-blue-600">
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
                <Link to="/login" className="text-blue-600 hover:text-blue-700">
                  Login / Register
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
          )}
        </div>
      </div>
    </header>
  )
}

