import {Link} from "react-router-dom"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white">

      <div className="container mx-auto px-4 py-6 border-b">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link to="/" className="text-2xl font-bold text-gray-800">
            Bandage
          </Link>
          <div className="flex items-center gap-4">
            <Link to="#" className="text-[#23A6F0] hover:opacity-80">
              <Facebook className="w-6 h-6" />
            </Link>
            <Link to="#" className="text-[#23A6F0] hover:opacity-80">
              <Instagram className="w-6 h-6" />
            </Link>
            <Link to="#" className="text-[#23A6F0] hover:opacity-80">
              <Twitter className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>


      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-gray-800">Company Info</h3>
            <ul className="space-y-3">
              <li>
                <Link to="#" className="text-gray-600 hover:text-gray-800">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-gray-800">
                  Carrier
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-gray-800">
                  We are hiring
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-gray-800">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-gray-800">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="#" className="text-gray-600 hover:text-gray-800">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-gray-800">
                  Carrier
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-gray-800">
                  We are hiring
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-gray-800">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-gray-800">Features</h3>
            <ul className="space-y-3">
              <li>
                <Link to="#" className="text-gray-600 hover:text-gray-800">
                  Business Marketing
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-gray-800">
                  User Analytic
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-gray-800">
                  Live Chat
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-gray-800">
                  Unlimited Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-gray-800">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link to="#" className="text-gray-600 hover:text-gray-800">
                  IOS & Android
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-gray-800">
                  Watch a Demo
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-gray-800">
                  Customers
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-gray-800">
                  API
                </Link>
              </li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-gray-800">Get In Touch</h3>
            <form className="space-y-3">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="flex-1 px-4 py-2 border border-r-0 rounded-l focus:outline-none focus:border-blue-500"
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#23A6F0] text-white rounded-r hover:bg-blue-600 transition-colors"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-600">Lore imp sum dolor Amit</p>
            </form>
          </div>
        </div>
      </div>

   
      <div className="border-t">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-gray-600 text-sm">Made With Love By Finland All Right Reserved</p>
        </div>
      </div>
    </footer>
  )
}

