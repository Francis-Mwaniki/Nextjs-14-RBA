'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Unauthorized() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleGoHome = () => {
    setLoading(true); // Show loader when button is clicked
    // Delay navigation for 2 seconds
    setTimeout(() => {
      router.push('/');
    }, 2000);
  };

  return (
    <div className="flex h-screen justify-center items-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Unauthorized</h1>
        <p className="text-gray-600 mb-8">Sorry, you don&apos;t have access to this page.</p>
        {loading ? (
          <div className="flex justify-center">
            <svg
              className="animate-spin h-8 w-8 text-orange-500"
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
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.965 7.965 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        ) : (
          <button
            onClick={handleGoHome}
            className="px-6 py-2 text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 rounded-md transition-all"
          >
            Go Home
          </button>
        )}
      </div>
    </div>
  );
}
