import React, { useState } from 'react';
import { Header } from '../Components/Header';
import Footer from '../Components/Footer';

export default function FAQ() {
  const faqData = [
    {
      question: 'How can I track my order?',
      answer:
        'You can track your order from the "My Orders" section . You will also receive an email with tracking information once your order is shipped.',
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept Credit/Debit Cards, PayPal, Cash on Delivery, and other major online payment methods.',
    },
    {
      question: 'Can I cancel or modify my order?',
      answer:
        'You can cancel or modify your order within 2 hours of placing it. Please contact our support team as soon as possible.',
    },
    {
      question: 'How long does shipping take?',
      answer:
        'Shipping typically takes 3-7 business days depending on your location and the shipping option selected at checkout.',
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h1>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border rounded-lg bg-white shadow-sm">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-4 text-lg font-medium text-gray-800 flex justify-between items-center focus:outline-none"
              >
                {item.question}
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
