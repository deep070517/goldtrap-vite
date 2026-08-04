import { useState } from 'react'
import BankDetails from './BankDetails'

export default function Checkout({ product, onClose }) {
  const [email, setEmail] = useState('')
  const [showBank, setShowBank] = useState(false)
  const [key, setKey] = useState('')

  const handleClick = () => {
    if (!email) {
      alert('Email enter karo!')
      return
    }
    
    const licenseKey = `GT-${Math.random().toString(36).substr(2, 9).toUpperCase()}`
    setKey(licenseKey)
    setShowBank(true)
  }

  if (showBank) {
    return <BankDetails product={product} email={email} licenseKey={key} onClose={onClose} />
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full shadow-2xl">
        <h2 className="text-2xl font-bold mb-2 text-gray-900">{product.name}</h2>
        <p className="text-gray-600 text-sm mb-6">Bank Transfer Payment</p>

        <div className="bg-purple-100 p-4 rounded-lg mb-6">
          <p className="text-gray-700">Amount</p>
          <p className="text-4xl font-bold text-purple-600">₹{product.price}</p>
        </div>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg mb-4 focus:border-purple-500 focus:outline-none"
        />

        <button
          onClick={handleClick}
          className="w-full bg-purple-600 text-white py-3 rounded-lg font-bold hover:bg-purple-700 mb-3"
        >
          Proceed to Payment
        </button>

        <button
          onClick={onClose}
          className="w-full bg-gray-200 text-gray-900 py-2 rounded-lg font-medium"
        >
          Cancel
        </button>
      </div>
    </div>
  )
}