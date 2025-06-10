import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../Components/Header";
import Footer from "../Components/Footer";
import { decrement, increment, removeOrder } from "../Store/Slice";
import { NavLink } from "react-router-dom";
import Summary from "../Components/Summary";

export default function Cart() {
  const Cart = useSelector((state) => state.product.Cart);
  const dispatch = useDispatch();

  const total = Cart.reduce((x, item) => {
    return x + item.price * item.count;
  }, 0);

  const tax = Math.round(total * 0.08); 
  
  const handleRemove = (id) => {
    dispatch(removeOrder(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrement(id));
  };

  const handleIncrement = (id) => {
    dispatch(increment(id));
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

        {Cart.length === 0 ? (
          <h1 className="text-2xl text-center mt-10">🛒 Cart is empty</h1>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="md:col-span-2 space-y-6">
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex justify-between font-semibold text-gray-700 border-b pb-2 mb-4">
                  <span className="w-2/5">Product</span>
                  <span className="w-1/5 text-center">Quantity</span>
                  <span className="w-1/5 text-center">Price</span>
                  <span className="w-1/5 text-center">Total</span>
                </div>

                {Cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between py-4 border-b last:border-b-0"
                  >
                    <div className="flex items-center space-x-4 w-2/5">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-20 h-20 object-cover rounded"
                      />
                      <div>
                        <h2 className="font-semibold">{item.title}</h2>
                        <p className="text-sm text-green-600">In Stock</p>
                        <button
                          onClick={() => handleRemove(item.id)}
                          className="text-red-600 text-sm mt-1 flex items-center"
                        >
                          <span className="mr-1">🗑️</span> Remove
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-center w-1/5">
                      <button
                        onClick={() => handleDecrement(item.id)}
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        -
                      </button>
                      <span className="px-3">{item.count}</span>
                      <button
                        onClick={() => handleIncrement(item.id)}
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>

                    <div className="text-center w-1/5 font-semibold">
                      ${Number(item.price).toFixed(2)}
                    </div>
                    <div className="text-center w-1/5 font-bold text-gray-900">
                      ${Number(item.price * item.count).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

            
              <NavLink
                to="/"
                className="inline-block mt-4 px-4 py-2 border border-gray-400 rounded hover:bg-gray-200 transition"
              >
                ← Continue Shopping
              </NavLink>
            </div >

           
           <div className="w-full md:w-1/3 ml-6">
             <Summary total={total} tax={tax} cartCount={Cart.length} />
           </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}




