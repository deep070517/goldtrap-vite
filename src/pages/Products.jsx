import { useNavigate } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

const products = [
  {
    id: 1,
    name: 'Monthly Subscription',
    tier: 'subscription',
    price: 499,
    features: ['Daily signals', 'Email support', 'Monthly updates', 'Backtesting']
  },
  {
    id: 2,
    name: 'Lifetime License',
    tier: 'permanent',
    price: 2999,
    features: ['Lifetime access', 'All updates', 'Priority support', 'Multi-account']
  },
  {
    id: 3,
    name: 'Source Code',
    tier: 'source_code',
    price: 9999,
    features: ['Full source', 'Commercial use', 'White-label', 'Support']
  }
]

export default function Products() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow p-6">
        <div className="max-w-6xl mx-auto flex justify-between">
          <button onClick={() => navigate('/')} className="text-2xl font-bold text-purple-600">
            🚀 GoldTrap
          </button>
          <button onClick={() => navigate('/')} className="text-gray-600 hover:text-gray-900">
            ← Back
          </button>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Choose Your Plan</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </div>
  )
}