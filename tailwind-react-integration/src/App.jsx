function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Tailwind CSS Integration ✅
        </h1>
        <p className="text-lg text-gray-600 text-center mb-8">
          Tailwind CSS is successfully integrated with React!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-blue-800 mb-2">
              Utility-First
            </h2>
            <p className="text-blue-700">
              Rapid UI development with utility classes
            </p>
          </div>
          <div className="bg-purple-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-purple-800 mb-2">
              Responsive
            </h2>
            <p className="text-purple-700">
              Built-in responsive design utilities
            </p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-green-800 mb-2">
              Customizable
            </h2>
            <p className="text-green-700">Easy to customize with config file</p>
          </div>
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 mx-auto block">
          Get Started with Tailwind
        </button>
      </div>
    </div>
  );
}

export default App;
