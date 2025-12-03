import UserProfile from './components/UserProfile';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 p-4">
      {/* Debug test */}
      <div className="bg-red-500 p-4 rounded mb-4">
        <p className="text-white font-bold">
          Tailwind Test: If red, Tailwind works!
        </p>
      </div>

      {/* Test rounded image separately */}
      <div className="bg-green-500 p-4 rounded-full w-24 h-24 mx-auto mb-4">
        <p className="text-white text-xs text-center">Rounded Test</p>
      </div>

      <UserProfile />
    </div>
  );
}

export default App;
