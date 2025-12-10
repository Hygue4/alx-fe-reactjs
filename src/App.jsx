import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import RecipeDetail from './components/RecipeDetail';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center">
                <Link to="/" className="flex items-center">
                  <div className="bg-blue-600 text-white p-2 rounded-lg mr-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                    </svg>
                  </div>
                  <h1 className="text-2xl font-bold text-gray-900">RecipeShare</h1>
                </Link>
              </div>
              <nav>
                <ul className="flex space-x-6">
                  <li>
                    <Link 
                      to="/" 
                      className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <a 
                      href="#" 
                      className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                    >
                      Browse
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#" 
                      className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                    >
                      Share
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#" 
                      className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                    >
                      About
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
          </Routes>
        </main>

        <footer className="bg-gray-800 text-white py-8 mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">RecipeShare</h3>
                <p className="text-gray-300">
                  Share and discover amazing recipes from around the world. 
                  Join our community of food lovers!
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">All Recipes</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Popular Recipes</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Submit Recipe</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Community</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact</h4>
                <p className="text-gray-300 mb-2">Have questions or suggestions?</p>
                <p className="text-gray-300">contact@recipeshare.com</p>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
              <p>&copy; 2024 Recipe Sharing Platform. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
