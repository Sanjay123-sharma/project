import React from 'react';
import { Header } from '../Components/Header';
import Footer from '../Components/Footer';

export default function OrderConfirmation() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 py-12">
        <div className="flex items-center justify-center mb-6">
          <div className="bg-green-100 rounded-full p-4">
            <svg
              className="w-12 h-12 text-green-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">Thank you for your order!</h1>
        <p className="text-gray-600 mb-6">
          Your order has been confirmed and will be shipped soon.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium text-gray-700">
            Order #ORD-{new Date().toDateString()}
          </span>
          <span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium text-green-700">
            Confirmed
          </span>
        </div>
      </main>

      <Footer />
    </div>
  );
}
