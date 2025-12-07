function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Recipe Sharing Platform
          </h1>
          <p className="mt-1 text-sm text-gray-600">
            Browse, share, and discover amazing recipes
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg p-8">
              <div className="text-center">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                  Welcome to Recipe Sharing Platform
                </h2>
                <p className="text-gray-600 mb-6">
                  This platform allows users to browse, add, and share recipes.
                  It features multiple pages including a home page with recipe
                  listings, detailed recipe views, and a form to submit new
                  recipes.
                </p>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="text-blue-500 text-2xl mb-2">📖</div>
                    <h3 className="font-bold text-blue-700 mb-2">
                      Browse Recipes
                    </h3>
                    <p className="text-blue-600 text-sm">
                      Discover thousands of recipes from our community
                    </p>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <div className="text-green-500 text-2xl mb-2">📝</div>
                    <h3 className="font-bold text-green-700 mb-2">
                      Share Recipes
                    </h3>
                    <p className="text-green-600 text-sm">
                      Upload and share your favorite recipes with others
                    </p>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg">
                    <div className="text-purple-500 text-2xl mb-2">⭐</div>
                    <h3 className="font-bold text-purple-700 mb-2">
                      Save Favorites
                    </h3>
                    <p className="text-purple-600 text-sm">
                      Bookmark recipes you want to try later
                    </p>
                  </div>
                </div>

                {/* Status Indicator */}
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Tailwind CSS is working correctly
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow mt-8">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            © 2024 Recipe Sharing Platform. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
