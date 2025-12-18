import React, { useState } from 'react';
import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/FormikForm';

function App() {
  const [activeForm, setActiveForm] = useState('controlled');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center py-6">
            <div className="text-center sm:text-left mb-4 sm:mb-0">
              <h1 className="text-3xl font-bold text-gray-900">
                React Form Handling
              </h1>
              <p className="text-gray-600 mt-1">
                Controlled Components vs Formik
              </p>
            </div>

            {/* Form Selector */}
            <div className="flex space-x-4">
              <button
                onClick={() => setActiveForm('controlled')}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeForm === 'controlled'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Controlled Form
              </button>
              <button
                onClick={() => setActiveForm('formik')}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeForm === 'formik'
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Formik Form
              </button>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className={`p-4 rounded-lg border-2 ${
                activeForm === 'controlled'
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200'
              }`}
            >
              <h3 className="font-bold text-lg mb-2">Controlled Components</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Uses React useState for state management</li>
                <li>• Manual validation logic</li>
                <li>• More code, but full control</li>
                <li>• Good for simple forms</li>
              </ul>
            </div>
            <div
              className={`p-4 rounded-lg border-2 ${
                activeForm === 'formik'
                  ? 'border-purple-500 bg-purple-50'
                  : 'border-gray-200'
              }`}
            >
              <h3 className="font-bold text-lg mb-2">Formik</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Built-in form state management</li>
                <li>• Yup integration for validation</li>
                <li>• Less code, more features</li>
                <li>• Better for complex forms</li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeForm === 'controlled' ? <RegistrationForm /> : <FormikForm />}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-300">
            Form Handling Assignment - ALX ReactJS
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Using{' '}
            {activeForm === 'controlled'
              ? 'React Controlled Components'
              : 'Formik'}{' '}
            with mock API integration
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
