import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Checkout({ product, onClose }) {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  // Initialize EmailJS (do this once)
  if (!window.emailjsInitialized) {
    emailjs.init('vTgQI6P-SBGPfzNop') // Your EmailJS User ID
    window.emailjsInitialized = true
  }

  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script')
      script.src = 'https://checkout.razorpay.com/v1/checkout.js'
      script.onload = () => resolve(true)
      script.onerror = () => resolve(false)
      document.body.appendChild(script)
    })
  }

  const sendEmail = async (licenseKey) => {
    try {
      await emailjs.send(
        'service_2bd442h', // Your Service ID
         'template_aeo8btm',  // Your Template ID (REPLACE THIS)
        {
          to_email: email,
          product_name: product.name,
          license_key: licenseKey
        }
      )
      return true
    } catch (error) {
      console.error('Email error:', error)
      return false
    }
  }

  const handlePayment = async () => {
    if (!email) {
      alert('Email enter karo!')
      return
    }

    setLoading(true)

    const res = await loadRazorpay()

    if (!res) {
      alert('Razorpay failed to load. Try again.')
      setLoading(false)
      return
    }

    const options = {
      key: 'rzp_test_TKwDpLivaEudAQ', // REPLACE WITH LIVE KEY LATER
      amount: product.price * 100,
      currency: 'INR',
      name: 'GoldTrap',
      description: product.name,
      prefill: {
        email: email,
      },
      theme: {
        color: '#9333ea',
      },
      handler: async function (response) {
        console.log('✅ Payment Success:', response)
        
        // Generate License Key
        const licenseKey = `GT-${Math.random().toString(36).substr(2, 9).toUpperCase()}`
        
        // Send Email
        const emailSent = await sendEmail(licenseKey)

        if (emailSent) {
          alert(`✅ Payment Successful!\n📧 License key sent to ${email}\n\nLicense Key: ${licenseKey}`)
        } else {
          alert(`✅ Payment successful!\nLicense Key: ${licenseKey}\n\n📧 Email failed but check later.`)
        }
        
        setLoading(false)
        onClose()
      },
      onerror: function (error) {
        console.log('❌ Payment Error:', error)
        alert(`Payment Failed: ${error.description}`)
        setLoading(false)
      },
    }

    try {
      const rzp = new window.Razorpay(options)
      rzp.open()
    } catch (error) {
      console.error('Razorpay error:', error)
      alert('Payment window failed. Try again.')
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full shadow-2xl">
        <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
        <p className="text-gray-600 text-sm mb-6">Complete your purchase</p>

        <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-lg mb-6">
          <p className="text-gray-600 text-sm">Total Amount</p>
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
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
            disabled={loading}
          />
          <p className="text-xs text-gray-500 mt-1">📧 License key yahan bhejungi</p>
        </div>

        <button
          onClick={handlePayment}
          disabled={loading || !email}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-bold hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition mb-3"
        >
          {loading ? '⏳ Loading...' : `Pay ₹${product.price.toLocaleString('en-IN')}`}
        </button>

        <button
          onClick={onClose}
          disabled={loading}
          className="w-full bg-gray-200 text-gray-900 py-2 rounded-lg font-medium hover:bg-gray-300 disabled:opacity-50"
        >
          Cancel
        </button>
      </div>
    </div>
  )
}