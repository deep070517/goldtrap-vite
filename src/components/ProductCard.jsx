import { useState } from 'react'
import Checkout from './Checkout'

export default function ProductCard({ product }) {
  const [showCheckout, setShowCheckout] = useState(false)

  return (
    <>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:scale-105">
        <div className={`h-1 bg-gradient-to-r ${
          product.tier === 'subscription' ? 'from-blue-400 to-blue-600' :
          product.tier === 'permanent' ? 'from-purple-400 to-pink-600' :
          'from-amber-400 to-orange-600'
        }`} />

        <div className="p-6">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
            product.tier === 'subscription' ? 'bg-blue-100 text-blue-800' :
            product.tier === 'permanent' ? 'bg-purple-100 text-purple-800' :
            'bg-amber-100 text-amber-800'
          }`}>
            {product.tier === 'subscription' ? '📅 Monthly' :
             product.tier === 'permanent' ? '⭐ Lifetime' :
             '🔓 Premium'}
          </span>

          <h3 className="text-2xl font-bold mt-4 text-gray-900">{product.name}</h3>

          <div className="mt-4 mb-6">
            <div className="text-4xl font-bold text-gray-900">
              ₹{product.price.toLocaleString('en-IN')}
            </div>
            <p className="text-sm text-gray-600 mt-1">
              {product.tier === 'subscription' ? 'Per Month' :
               product.tier === 'permanent' ? 'One-time' :
               'Includes everything'}
            </p>
          </div>

          <p className="text-gray-600 text-sm mb-6">{product.description}</p>

          <ul className="space-y-2 mb-6">
            {product.features.map((feature, idx) => (
              <li key={idx} className="flex items-start text-sm text-gray-700">
                <span className="text-green-500 mr-2 mt-0.5">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <button 
            onClick={() => setShowCheckout(true)}
            className={`w-full py-3 px-4 rounded-lg font-bold transition text-white ${
              product.tier === 'subscription' ? 'bg-blue-500 hover:bg-blue-600' :
              product.tier === 'permanent' ? 'bg-purple-500 hover:bg-purple-600' :
              'bg-amber-500 hover:bg-amber-600'
            }`}
          >
            Get Started Now
          </button>

          <p className="text-xs text-gray-500 text-center mt-4">
            🔒 Secure payment • 📧 Instant delivery • 💬 24/7 Support
          </p>
        </div>
      </div>

      {showCheckout && (
        <Checkout product={product} onClose={() => setShowCheckout(false)} />
      )}
    </>
  )
}