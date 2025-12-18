import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Validation schema using Yup
const validationSchema = Yup.object({
  username: Yup.string()
    .min(3, 'Username must be at least 3 characters')
    .max(20, 'Username must be 20 characters or less')
    .required('Username is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Please confirm your password'),
  terms: Yup.boolean()
    .oneOf([true], 'You must accept the terms and conditions')
    .required('You must accept the terms and conditions'),
});

function FormikForm() {
  // Initial form values
  const initialValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: false,
  };

  // Handle form submission
  const handleSubmit = async (
    values,
    { setSubmitting, resetForm, setStatus }
  ) => {
    try {
      // Mock API endpoint (as per assignment)
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: values.username,
            email: values.email,
            password: values.password,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setStatus({
          type: 'success',
          message: `Registration successful! User ID: ${data.id}`,
        });
        resetForm();
      } else {
        setStatus({
          type: 'error',
          message: 'Registration failed. Please try again.',
        });
      }
    } catch (error) {
      console.error('API Error:', error);
      setStatus({
        type: 'error',
        message: 'Network error. Please check your connection.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            User Registration
          </h1>
          <p className="text-gray-600 mt-2">Using Formik with Yup validation</p>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors, touched, status }) => (
            <Form className="space-y-6">
              {/* Username Field */}
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Username
                </label>
                <Field
                  type="text"
                  id="username"
                  name="username"
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.username && touched.username
                      ? 'border-red-500'
                      : 'border-gray-300'
                  } focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all`}
                  placeholder="Enter your username"
                />
                <ErrorMessage name="username">
                  {(msg) => <p className="text-red-500 text-sm mt-1">{msg}</p>}
                </ErrorMessage>
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.email && touched.email
                      ? 'border-red-500'
                      : 'border-gray-300'
                  } focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all`}
                  placeholder="Enter your email"
                />
                <ErrorMessage name="email">
                  {(msg) => <p className="text-red-500 text-sm mt-1">{msg}</p>}
                </ErrorMessage>
              </div>

              {/* Password Field */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Password
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.password && touched.password
                      ? 'border-red-500'
                      : 'border-gray-300'
                  } focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all`}
                  placeholder="Enter your password"
                />
                <ErrorMessage name="password">
                  {(msg) => <p className="text-red-500 text-sm mt-1">{msg}</p>}
                </ErrorMessage>
              </div>

              {/* Confirm Password Field */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Confirm Password
                </label>
                <Field
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.confirmPassword && touched.confirmPassword
                      ? 'border-red-500'
                      : 'border-gray-300'
                  } focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all`}
                  placeholder="Confirm your password"
                />
                <ErrorMessage name="confirmPassword">
                  {(msg) => <p className="text-red-500 text-sm mt-1">{msg}</p>}
                </ErrorMessage>
              </div>

              {/* Terms and Conditions Checkbox */}
              <div className="flex items-start">
                <Field
                  type="checkbox"
                  id="terms"
                  name="terms"
                  className="h-4 w-4 text-purple-600 rounded mt-1"
                />
                <label
                  htmlFor="terms"
                  className="ml-2 block text-sm text-gray-700"
                >
                  I agree to the{' '}
                  <a
                    href="#"
                    className="text-purple-600 hover:text-purple-800 font-medium"
                  >
                    Terms and Conditions
                  </a>
                </label>
              </div>
              <ErrorMessage name="terms">
                {(msg) => <p className="text-red-500 text-sm mt-1">{msg}</p>}
              </ErrorMessage>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition-all ${
                  isSubmitting
                    ? 'bg-purple-400 cursor-not-allowed'
                    : 'bg-purple-600 hover:bg-purple-700 active:transform active:scale-95'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin h-5 w-5 mr-3 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Registering...
                  </span>
                ) : (
                  'Register with Formik'
                )}
              </button>

              {/* Status Messages */}
              {status && (
                <div
                  className={`p-4 rounded-lg ${
                    status.type === 'success'
                      ? 'bg-green-50 text-green-700 border border-green-200'
                      : 'bg-red-50 text-red-700 border border-red-200'
                  }`}
                >
                  <p className="text-center">{status.message}</p>
                </div>
              )}

              {/* Formik Values Preview */}
              <Formik>
                {({ values }) => (
                  <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <h3 className="text-sm font-semibold text-gray-700 mb-2">
                      Current Formik Values:
                    </h3>
                    <pre className="text-xs text-gray-600 overflow-auto">
                      {JSON.stringify(values, null, 2)}
                    </pre>
                  </div>
                )}
              </Formik>
            </Form>
          )}
        </Formik>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500">
            This form uses Formik for state management and Yup for validation
          </p>
        </div>
      </div>
    </div>
  );
}

export default FormikForm;
