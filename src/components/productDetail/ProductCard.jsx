import { Link } from 'react-router-dom';

const ProductCard = ({ id, image, title, department, price, oldPrice, colors }) => {
    return (
      <Link to={`/product/${id}`} className="group block">
        {/* Image Container */}
        <div className="aspect-square overflow-hidden bg-gray-100 mb-4">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
  
        {/* Product Info */}
        <div className="space-y-1">
          <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{title}</h3>
          <p className="text-gray-500 text-sm">{department}</p>
          <div className="flex items-center space-x-2">
            {oldPrice && (
              <span className="text-gray-400 line-through">${oldPrice.toFixed(2)}</span>
            )}
            <span className="text-green-600 font-semibold">${price.toFixed(2)}</span>
          </div>
          {colors && colors.length > 0 && (
            <div className="flex gap-2 mt-2">
              {colors.map((color, index) => (
                <div
                  key={index}
                  className="w-4 h-4 rounded-full border border-gray-300"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          )}
        </div>
      </Link>
    );
};
  
export default ProductCard;