import React from "react";
import { Header } from "./Header";
import Footer from "./Footer";
import { NavLink } from "react-router";


export default function ErrorPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-12">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md text-center">
          <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
          <p className="text-gray-600 mb-6">
            Sorry, the page you are looking for does not exist.
          </p>
          <NavLink
            href="/"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Go Back Home
          </NavLink>
        </div>
      </main>
      <Footer />
    </div>
  );
}
