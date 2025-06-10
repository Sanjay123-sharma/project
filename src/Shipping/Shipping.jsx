import React, { useState } from "react";
import { Header } from "../Components/Header";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { Orders, removeAllCart } from "../Store/Slice";

export default function Shipping() {
  const [fname, setFName] = useState("");
  const [Lname, setLName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");

  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");

  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      fname,
      Lname,
      street,
      city,
      state,
      zipcode,
      paymentMethod,
      cardNumber,
      expiryDate,
      cvv,
      nameOnCard,
    });
    dispatch(Orders());
    dispatch(removeAllCart());
    Navigate("/OrderConfirmation");
  };

  const handleZipChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // remove non-digits
    if (value.length <= 6) {
      setZipcode(value);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-gray-100 py-10">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded shadow space-y-8">
          {/* Shipping Address */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
              <span className="text-black">📍</span> Shipping Address
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-gray-700 font-medium mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    value={fname}
                    onChange={(e) => setFName(e.target.value)}
                    required
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-gray-700 font-medium mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={Lname}
                    onChange={(e) => setLName(e.target.value)}
                    required
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Street Address
                </label>
                <input
                  type="text"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  required
                  className="w-full border rounded px-3 py-2"
                />
              </div>

              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-gray-700 font-medium mb-1">
                    State
                  </label>
                  <input
                    type="text"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    required
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-gray-700 font-medium mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  ZIP Code
                </label>
                <input
                  type="text"
                  value={zipcode}
                  onChange={handleZipChange}
                  maxLength={6}
                  required
                  className="w-full border rounded px-3 py-2"
                  placeholder="Enter 6-digit ZIP Code"
                  onPaste={(e) => {
                    const paste = e.clipboardData.getData("Text");
                    if (!/^\d+$/.test(paste)) {
                      e.preventDefault();
                    }
                  }}
                />
              </div>

              {/* Payment Method */}
              <div className="pt-8 border-t mt-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
                  <span className="text-black">💳</span> Payment Method
                </h2>

                <div className="space-y-2 mb-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={paymentMethod === "card"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    Credit/Debit Card
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="paypal"
                      checked={paymentMethod === "paypal"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    PayPal
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cash on delivery"
                      checked={paymentMethod === "cash on delivery"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    Cash on Delivery
                  </label>
                </div>

                {paymentMethod === "card" && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-700 font-medium mb-1">
                        Card Number
                      </label>
                      <input
                        type="Number"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        required
                        className="w-full border rounded px-3 py-2"
                        placeholder="1234 5678 9012 3456"
                      />
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-1">
                        <label className="block text-gray-700 font-medium mb-1">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          value={expiryDate}
                          onChange={(e) => setExpiryDate(e.target.value)}
                          required
                          className="w-full border rounded px-3 py-2"
                          placeholder="MM/YY"
                        />
                      </div>
                      <div className="flex-1">
                        <label className="block text-gray-700 font-medium mb-1">
                          CVV
                        </label>
                        <input
                          type="text"
                          value={cvv}
                          onChange={(e) => setCvv(e.target.value)}
                          required
                          className="w-full border rounded px-3 py-2"
                          placeholder="123"
                          maxLength={3}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-1">
                        Name on Card
                      </label>
                      <input
                        type="text"
                        value={nameOnCard}
                        onChange={(e) => setNameOnCard(e.target.value)}
                        required
                        className="w-full border rounded px-3 py-2"
                      />
                    </div>
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded mt-4 hover:bg-gray-700 transition"
              >
                Place Order
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
