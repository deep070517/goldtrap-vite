export default function BankDetails({ product, email, licenseKey, onClose }) {
  const bankDetails = {
    accountHolder: 'Deepak Narad Singh',
    accountNumber: '40726220093',
    ifscCode: 'SBIN0003225',
    bankName: 'STATE BANK OF INDIA',
    upi: 'YOUR_UPI_ID@bank',
    amount: product.price
  }

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
    alert('✅ Copied to clipboard!')
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full shadow-2xl max-h-96 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-2 text-gray-900">Bank Transfer Details</h2>
        <p className="text-gray-600 text-sm mb-6">Complete payment to receive your license key</p>

        {/* Amount */}
        <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-4 rounded-lg mb-6">
          <p className="text-gray-600 text-sm">Amount to Pay</p>
          <p className="text-3xl font-bold text-green-600">₹{bankDetails.amount}</p>
        </div>

        {/* Bank Details */}
        <div className="space-y-4 mb-6">
          {/* UPI */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-xs text-gray-500 font-semibold">UPI ID (FASTEST)</p>
            <div className="flex justify-between items-center gap-2 mt-2">
              <p className="text-lg font-bold text-gray-900">{bankDetails.upi}</p>
              <button
                onClick={() => handleCopy(bankDetails.upi)}
                className="bg-blue-500 text-white px-3 py-1 rounded text-xs font-bold hover:bg-blue-600"
              >
                Copy
              </button>
            </div>
          </div>

          {/* Account Holder */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-xs text-gray-500 font-semibold">Account Holder</p>
            <p className="text-gray-900 font-bold mt-1">{bankDetails.accountHolder}</p>
          </div>

          {/* Account Number */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-xs text-gray-500 font-semibold">Account Number</p>
            <div className="flex justify-between items-center gap-2 mt-2">
              <p className="text-gray-900 font-bold">{bankDetails.accountNumber}</p>
              <button
                onClick={() => handleCopy(bankDetails.accountNumber)}
                className="bg-blue-500 text-white px-3 py-1 rounded text-xs font-bold hover:bg-blue-600"
              >
                Copy
              </button>
            </div>
          </div>

          {/* IFSC Code */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-xs text-gray-500 font-semibold">IFSC Code</p>
            <div className="flex justify-between items-center gap-2 mt-2">
              <p className="text-gray-900 font-bold">{bankDetails.ifscCode}</p>
              <button
                onClick={() => handleCopy(bankDetails.ifscCode)}
                className="bg-blue-500 text-white px-3 py-1 rounded text-xs font-bold hover:bg-blue-600"
              >
                Copy
              </button>
            </div>
          </div>

          {/* Bank Name */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-xs text-gray-500 font-semibold">Bank Name</p>
            <p className="text-gray-900 font-bold mt-1">{bankDetails.bankName}</p>
          </div>
        </div>

        {/* License Key Display */}
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-lg mb-6">
          <p className="text-xs text-gray-600 font-semibold">Your License Key</p>
          <div className="flex justify-between items-center gap-2 mt-2">
            <p className="text-lg font-bold text-purple-900">{licenseKey}</p>
            <button
              onClick={() => handleCopy(licenseKey)}
              className="bg-purple-600 text-white px-3 py-1 rounded text-xs font-bold hover:bg-purple-700"
            >
              Copy
            </button>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <p className="text-xs font-semibold text-blue-900 mb-2">📋 Steps:</p>
          <ol className="text-xs text-blue-800 space-y-1">
            <li>1️⃣ Pay ₹{bankDetails.amount} via UPI or Bank Transfer</li>
            <li>2️⃣ Screenshot payment proof</li>
            <li>3️⃣ Send proof to Telegram: @AlgoMql5</li>
            <li>4️⃣ Receive EA file + setup guide</li>
          </ol>
        </div>

        {/* Support */}
        <div className="bg-gray-50 p-4 rounded-lg mb-6 text-center">
          <p className="text-sm font-bold text-gray-900">Need Help?</p>
          <p className="text-xs text-gray-600 mt-1">
            Contact on Telegram: 
            <a href="https://t.me/@AlgoMql5" target="_blank" rel="noopener noreferrer" className="text-blue-600 ml-1 hover:underline">
              @AlgoMql5
            </a>
          </p>
        </div>

        <button
          onClick={onClose}
          className="w-full bg-gray-900 text-white py-3 rounded-lg font-bold hover:bg-gray-800"
        >
          Done
        </button>
      </div>
    </div>
  )
}