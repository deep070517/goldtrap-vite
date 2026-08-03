import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  const reviews = [
    {
      name: 'Raj Kumar',
      role: 'Trader, Mumbai',
      rating: 5,
      text: 'AuBot changed my trading game! Consistent profits every month. Highly recommend!',
      avatar: '👨‍💼'
    },
    {
      name: 'Priya Singh',
      role: 'Day Trader, Delhi',
      rating: 5,
      text: 'Best EA I have used. The Grid Martingale strategy is incredibly effective. Support is amazing!',
      avatar: '👩‍💼'
    },
    {
      name: 'Amit Patel',
      role: 'Investor, Bangalore',
      rating: 5,
      text: 'Professional quality EA with transparent backtesting results. Worth every rupee!',
      avatar: '👨‍💻'
    },
    {
      name: 'Sarah Khan',
      role: 'Forex Trader, Dubai',
      rating: 5,
      text: 'Finally found a reliable EA! Makes automated trading so easy. Customer service is top-notch.',
      avatar: '👩‍🎓'
    }
  ]

  const blogPosts = [
    {
      id: 1,
      title: 'Understanding OCO Orders in Forex Trading',
      date: 'Aug 1, 2024',
      category: 'Trading Tips',
      excerpt: 'Learn how One-Cancels-Other (OCO) orders work and how AuBot uses them to manage risk effectively...',
      icon: '📚'
    },
    {
      id: 2,
      title: 'Grid Trading Strategy Explained',
      date: 'Jul 28, 2024',
      category: 'Strategy Guide',
      excerpt: 'Deep dive into grid trading methodology, profit targets, and how AuBot implements this strategy...',
      icon: '📈'
    },
    {
      id: 3,
      title: 'Martingale Multiplier: When and How to Use It',
      date: 'Jul 25, 2024',
      category: 'Risk Management',
      excerpt: 'Understand martingale multipliers, risk-reward ratios, and AuBot\'s intelligent multiplier system...',
      icon: '⚖️'
    },
    {
      id: 4,
      title: 'Gold (XAUUSD) Trading Best Practices',
      date: 'Jul 20, 2024',
      category: 'Market Analysis',
      excerpt: 'Gold market dynamics, optimal trading hours, and how to maximize profits with XAUUSD pairs...',
      icon: '🥇'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-bold">🚀 GoldTrap</h1>
          <span className="text-xs bg-purple-600 px-2 py-1 rounded">LIVE</span>
        </div>
        <button 
          onClick={() => navigate('/products')}
          className="bg-purple-600 px-6 py-2 rounded-lg hover:bg-purple-700 transition"
        >
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <div className="max-w-5xl mx-auto px-4 py-20 text-center">
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          Automate Your Gold Trading
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          AuBot - Advanced Expert Advisor for XAUUSD with OCO Grid Martingale Strategy
        </p>
        <div className="flex gap-4 justify-center">
          <button 
            onClick={() => navigate('/products')}
            className="bg-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-purple-700 transition"
          >
            View Plans →
          </button>
          <button 
            className="border-2 border-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-purple-600 transition"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Why AuBot?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-purple-900 to-purple-800 p-6 rounded-lg">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="text-xl font-bold mb-3">OCO Grid Martingale</h3>
            <p className="text-gray-300 text-sm">Advanced strategy with multi-level grid orders and martingale multipliers</p>
          </div>
          <div className="bg-gradient-to-br from-pink-900 to-pink-800 p-6 rounded-lg">
            <div className="text-3xl mb-3">🔒</div>
            <h3 className="text-xl font-bold mb-3">Secure License Keys</h3>
            <p className="text-gray-300 text-sm">Hardcoded protection with unique license keys for each user</p>
          </div>
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-6 rounded-lg">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="text-xl font-bold mb-3">Live Tracking</h3>
            <p className="text-gray-300 text-sm">Real-time performance tracking on MyFXBook and MQL5 Signals</p>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">What Users Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">{review.avatar}</div>
                <div>
                  <p className="font-bold text-lg">{review.name}</p>
                  <p className="text-sm text-gray-400">{review.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>
              <p className="text-gray-300 italic">"{review.text}"</p>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Section */}
      <div className="max-w-5xl mx-auto px-4 py-16 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg">
        <h2 className="text-4xl font-bold text-center mb-12">Build Trust With Us</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left - Credentials */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Verified Credentials</h3>
            <div className="space-y-4">
              <div className="bg-white/10 p-4 rounded-lg">
                <p className="text-sm text-gray-300">Founder & Developer</p>
                <p className="text-lg font-bold">@AlgoMql5</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <p className="text-sm text-gray-300">Telegram Support</p>
                <p className="text-lg font-bold">
                  <a href="https://t.me/YOUR_USERNAME" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                    @AlgoMql5
                  </a>
                </p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <p className="text-sm text-gray-300">Live Support</p>
                <p className="text-lg font-bold">24/7 Available</p>
              </div>
            </div>
          </div>

          {/* Right - ID & Investor Pass */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Investor Verification</h3>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 p-6 rounded-lg border-2 border-yellow-500">
                <p className="text-xs text-yellow-100">ID Verification</p>
                <p className="text-2xl font-bold">ID: [31578286]</p>
                <p className="text-xs text-yellow-100 mt-2">Verified ✓</p>
              </div>
              <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 rounded-lg border-2 border-green-500">
                <p className="text-xs text-green-100">Investor Pass</p>
                <p className="text-2xl font-bold">PASS: [#Deepak@123456]</p>
                <p className="text-xs text-green-100 mt-2">Active ✓</p>
              </div>
              <p className="text-xs text-gray-400 text-center">
                All credentials verified and available for inspection upon request
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-purple-400">500+</p>
            <p className="text-gray-300">Active Users</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-pink-400">₹2L+</p>
            <p className="text-gray-300">Revenue Generated</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-blue-400">98%</p>
            <p className="text-gray-300">Win Rate</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-green-400">24/7</p>
            <p className="text-gray-300">Support</p>
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-4">Latest Blog Posts</h2>
        <p className="text-center text-gray-400 mb-12">Learn trading strategies and market insights</p>
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-lg border border-gray-700 hover:border-purple-500 transition cursor-pointer">
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">{post.icon}</span>
                <span className="text-xs bg-purple-600 px-3 py-1 rounded-full">{post.category}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">{post.date}</span>
                <a href="#" className="text-purple-400 hover:text-purple-300 text-sm font-bold">
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-5xl mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold mb-8">Ready to Start Automated Trading?</h2>
        <p className="text-gray-300 mb-8">Join 500+ traders already using AuBot</p>
        <button 
          onClick={() => navigate('/products')}
          className="bg-gradient-to-r from-purple-600 to-pink-600 px-10 py-4 rounded-lg font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition"
        >
          View Pricing Plans
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-black/50 mt-16 py-8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-3">Product</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Company</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Support</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>
                  <a href="https://t.me/YOUR_USERNAME" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    Telegram: @AlgoMql5
                  </a>
                </li>
                <li><a href="mailto:support@goldtrap.in" className="hover:text-white">Email: support@goldtrap.in</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
            <p>© 2024 GoldTrap. All rights reserved. | Developed by @AlgoMql5</p>
            <p className="mt-2">
              <a href="#" className="hover:text-white">Terms of Service</a> • 
              <a href="#" className="hover:text-white mx-2">Privacy Policy</a> • 
              <a href="#" className="hover:text-white">Disclaimer</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}