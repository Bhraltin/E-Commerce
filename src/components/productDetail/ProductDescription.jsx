
import { useState } from "react"

const ProductDescription = ({ productData }) => {
  const [activeTab, setActiveTab] = useState("description")

  const tabs = [
    { id: "description", label: "Description", count: null },
    { id: "additional", label: "Additional Information", count: null },
    { id: "reviews", label: "Reviews", count: "0" },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Tabs Navigation */}
      <div className="border-b border-gray-200">
        <nav className="flex -mb-px space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                py-4 px-1 border-b-2 font-medium text-sm sm:text-base
                ${
                  activeTab === tab.id
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }
              `}
            >
              {tab.label}
              {tab.count !== null && <span className="ml-2 text-green-600">({tab.count})</span>}
            </button>
          ))}
        </nav>
      </div>

      {/* Content Area */}
      <div className="mt-8">
        {activeTab === "description" && (
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Image */}
            <div className="relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/desktop-product-description-1-KQUQX4t9ddlJEmRyJhgmAz43BNAvbe.png"
                alt="Product lifestyle"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Right Column - Description Sections */}
            <div className="space-y-8">
              {/* First Section */}
              <section>
                <h3 className="text-xl font-bold mb-4">the quick fox jumps over</h3>
                <p className="text-gray-600 mb-4">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door
                  ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <span className="mr-2">→</span>
                    the quick fox jumps over the lazy dog
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="mr-2">→</span>
                    the quick fox jumps over the lazy dog
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="mr-2">→</span>
                    the quick fox jumps over the lazy dog
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="mr-2">→</span>
                    the quick fox jumps over the lazy dog
                  </li>
                </ul>
              </section>

              {/* Second Section */}
              <section>
                <h3 className="text-xl font-bold mb-4">the quick fox jumps over</h3>
                <p className="text-gray-600 mb-4">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door
                  ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                </p>
              </section>

              {/* Third Section */}
              <section>
                <h3 className="text-xl font-bold mb-4">the quick fox jumps over</h3>
                <p className="text-gray-600 mb-4">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door
                  ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <span className="mr-2">→</span>
                    the quick fox jumps over the lazy dog
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="mr-2">→</span>
                    the quick fox jumps over the lazy dog
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="mr-2">→</span>
                    the quick fox jumps over the lazy dog
                  </li>
                </ul>
              </section>
            </div>
          </div>
        )}

        {activeTab === "additional" && (
          <div className="py-4">
            <p className="text-gray-600">Additional product information will be displayed here.</p>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="py-4">
            <p className="text-gray-600">No reviews yet.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductDescription

