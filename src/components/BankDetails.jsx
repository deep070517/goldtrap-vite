export default function BankDetails({ product, email, licenseKey, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full shadow-2xl overflow-y-auto max-h-screen">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Bank Transfer</h2>

        <div className="bg-green-100 p-4 rounded-lg mb-6">
          <p className="text-gray-700 text-sm">Amount</p>
          <p className="text-3xl font-bold text-green-600">₹{product.price}</p>
        </div>

        <div className="bg-purple-100 p-4 rounded-lg mb-6">
          <p className="text-sm text-gray-700">Your License Key</p>
          <p className="text-xl font-bold text-purple-600 break-all">{licenseKey}</p>
        </div>

        <div className="space-y-3 mb-6">
          <div className="bg-gray-100 p-3 rounded">
            <p className="text-xs text-gray-600">UPI</p>
            <p className="font-bold text-gray-900">YOUR_UPI_ID@bank</p>
          </div>
          <div className="bg-gray-100 p-3 rounded">
            <p className="text-xs text-gray-600">Account</p>
            <p className="font-bold text-gray-900">40726220093</p>
          </div>
          <div className="bg-gray-100 p-3 rounded">
            <p className="text-xs text-gray-600">IFSC</p>
            <p className="font-bold text-gray-900"><SBIN0003225></SBIN0003225>E</p>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <p className="text-xs font-bold text-blue-900 mb-2">Steps:</p>
          <ol className="text-xs text-blue-800 space-y-1">
            <li>1. Pay ₹{product.price} via UPI/Bank</li>
            <li>2. Screenshot payment</li>
            <li>3. Send to Telegram @AlgoMql5</li>
            <li>4. Get EA file</li>
          </ol>
        </div>

        <button
          onClick={onClose}
          className="w-full bg-gray-900 text-white py-3 rounded-lg font-bold"
        >
          Done
        </button>
      </div>
    </div>
  )
}