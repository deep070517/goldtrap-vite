import { useState } from 'react'

export default function Checkout({ product, onClose }) {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const handleCheckout = () => {
    if (!email) {
      alert('Email enter karo!')
      return
    }

    setLoading(true)

    // Load Razorpay Script
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.async = true
    script.onload = () => {
      const options = {
        key: 'rzp_test_TKo7HieXyucwOu', // Test Key (example)
        amount: product.price * 100, // Convert to paise
        currency: 'INR',
        name: 'GoldTrap',
        description: product.name,
        prefill: {
          email: email
        },
        handler: function (response) {
          alert(`✅ Payment Successful!\nOrder ID: ${response.razorpay_payment_id}`)
          console.log('Payment Response:', response)
          
          // TODO: Send email with EA file
          // TODO: Save order to database
          
          setLoading(false)
          onClose()
        },
        theme: {
          color: '#9333ea'
        },
        modal: {
          ondismiss: function () {
            setLoading(false)
          }
        }
      }

      if (window.Razorpay) {
        const rzp = new window.Razorpay(options)
        rzp.open()
      }
    }
    document.body.appendChild(script)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6">{product.name}</h2>

        <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-lg mb-6">
          <p className="text-gray-600 text-sm">Price</p>
          <p className="text-4xl font-bold text-purple-600">₹{product.price.toLocaleString('en-IN')}</p>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          <p className="text-xs text-gray-500 mt-1">📧 EA file bhejungi isi email pe</p>
        </div>

        <button
          onClick={handleCheckout}
          disabled={loading}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-bold hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 mb-3 transition"
        >
          {loading ? '⏳ Loading...' : `Pay ₹${product.price} (Test Mode)`}
        </button>

        <button
          onClick={onClose}
          className="w-full bg-gray-200 text-gray-900 py-3 rounded-lg font-bold hover:bg-gray-300"
        >
          Cancel
        </button>

        <div className="mt-4 p-3 bg-blue-50 rounded-lg text-xs text-blue-900">
          <p>🧪 <strong>Test Mode:</strong> Use test card details from Razorpay dashboard</p>
        </div>
      </div>
    </div>
  )
}