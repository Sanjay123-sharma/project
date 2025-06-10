import React from "react";
import { Header } from "./Header";
import Footer from "./Footer";

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            About ShopHub
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Welcome to ShopHub, your one-stop destination for the latest
            products, unbeatable deals, and a seamless online shopping
            experience.
          </p>
          <div className="text-left space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Our Mission
              </h2>
              <p className="text-gray-600">
                At ShopHub, our mission is simple — to bring quality products to
                your doorstep with ease and trust. We aim to make online
                shopping fun, affordable, and accessible to everyone.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Who We Are
              </h2>
              <p className="text-gray-600">
                Founded by passionate entrepreneurs and tech enthusiasts,
                ShopHub is a growing ecommerce platform dedicated to providing
                an exceptional customer experience. From electronics and fashion
                to home essentials, we carefully curate our product offerings to
                meet your needs.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Why Choose Us
              </h2>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Wide range of high-quality products</li>
                <li>Fast and secure delivery</li>
                <li>Customer-first return policies</li>
                <li>24/7 support team ready to help</li>
                <li>Constant innovation and new deals</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Contact Us
              </h2>
              <p className="text-gray-600">
                Have questions? We’d love to hear from you! Email us at{" "}
                <a
                  href="mailto:support@shophub.com"
                  className="text-blue-600 hover:underline"
                >
                  support@shophub.com
                </a>{" "}
                or follow us on social media.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
