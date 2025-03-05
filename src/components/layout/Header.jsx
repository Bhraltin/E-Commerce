import { useState } from "react";
import BasketDetails from "../BasketDetails"; // Import the BasketDetails component

import { Link, useHistory } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { logoutUser } from "../../store/actions/clientAction"
import { Phone, Mail, Search, ShoppingCart, Heart, Instagram, Youtube, Facebook, Twitter } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isBasketVisible, setIsBasketVisible] = useState(false); // State for basket visibility

  const dispatch = useDispatch()
  const history = useHistory()
  const user = useSelector((state) => state.client.user)

  const handleLogout = async () => {
    const result = await dispatch(logoutUser())
    if (result.success) {
      history.push("/")
    }
  }

  return (
    <header className="w-full">
      {/* Top Tab */}
      <div className="bg-gray-800 text-white py-2 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 mb-2 md:mb-0">
            <a href="tel:(225) 555-0118" className="flex items-center hover:text-gray-300">
              <Phone className="w-4 h-4 mr-1" />
              (225) 555-0118
            </a>
            <a href="mailto:michelle.rivera@example.com" className="flex items-center hover:text-gray-300">
              <Mail className="w-4 h-4 mr-1" />
              michelle.rivera@example.com
            </a>
          </div>
          <div className="text-center md:text-left mb-2 md:mb-0">
            Follow Us and get a chance to win 80% off
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline">Follow Us :</span>
            <div className="flex gap-3">
              <a href="#" className="hover:text-gray-300">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="text-xl font-bold text-gray-800">
                BrandName
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
              <Link to="/shop" className="text-gray-600 hover:text-gray-900">Shop</Link>
              <Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link>
              <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                {user ? (
                  <button onClick={handleLogout} className="text-blue-600 hover:text-blue-700">
                    Logout
                  </button>
                ) : (
                  <>
                    <Link to="/login" className="text-blue-600 hover:text-blue-700">
                      Login /
                    </Link>
                    <span className="text-gray-400"></span>
                    <Link to="/signup" className="text-blue-600 hover:text-blue-700">
                      Register
                    </Link>
                  </>
                )}
              </div>
              <button>
                <Search className="w-5 h-5" />
              </button>
              <button className="relative" onClick={() => setIsBasketVisible(!isBasketVisible)}> {/* Toggle basket visibility */}
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
        </div>
      </nav>
      {isMenuOpen && ( 
        <>
          <BasketDetails isVisible={isBasketVisible} onClose={() => setIsBasketVisible(false)} /> {/* Render BasketDetails */}
        </>
      )}
    </header>
  );
}
