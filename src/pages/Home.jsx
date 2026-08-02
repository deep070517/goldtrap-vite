import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold">🚀 GoldTrap</h1>
        <button 
          onClick={() => navigate('/products')}
          className="bg-purple-600 px-6 py-2 rounded-lg hover:bg-purple-700 transition"
        >
          Shop Now
        </button>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold mb-6">Automate Your Gold Trading</h1>
        <p className="text-xl text-gray-300 mb-8">
          AuBot - Advanced EA for XAUUSD
        </p>
        <button 
          onClick={() => navigate('/products')}
          className="bg-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-purple-700 transition"
        >
          View Plans →
        </button>
      </div>
    </div>
  )
}