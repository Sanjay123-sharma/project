import React, { useState } from "react";
import { Header } from "../Components/Header";
import Footer from "../Components/Footer";
import Swal from "sweetalert2";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailPattern =
      /^[a-z0-9._%+!$&*=^|~#%'`?{}/-]+@[a-z0-9-]+(\.[a-z]{2,16})+$/i;
    if (!emailPattern.test(email.trim())) {
      setError("Enter a Valid Email Address");
    } else {
      Swal.fire({
        icon: "success",
        title: "Thank you for contacting us!",
        text: "We will get back to you soon.",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "OK",
      });

      setName("");
      setEmail("");
      setMessage("");
      setError("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Contact Us
        </h1>

        <p className="text-center text-gray-600 mb-8">
          Have questions, feedback, or need assistance? Fill out the form below
          and we'll get back to you as soon as possible.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white p-8 rounded-lg shadow"
        >
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Your Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border rounded px-3 py-2"
            />
            <span className="text-sm text-red-600 mt-1 block">{error}</span>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows="5"
              className="w-full border rounded px-3 py-2"
              placeholder="Type your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-700 transition"
          >
            Send Message
          </button>
        </form>
      </main>

      <Footer />
    </div>
  );
}
