import { NavLink } from "react-router";

export default function Summary({ total, tax, cartCount }) {
  const grandTotal = total + tax;

  return (
    <div className="bg-white p-4 rounded-lg shadow sticky top-24 w-full md:w-80">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

      <div className="flex justify-between mb-2">
        <span>Subtotal ({cartCount} items)</span>
        <span>${Number(total).toFixed(2)}</span>
      </div>

      <div className="flex justify-between mb-2">
        <span>Shipping</span>
        <span className="text-green-600">Free</span>
      </div>

      <div className="flex justify-between mb-2">
        <span>Tax</span>
        <span>${Number(tax).toFixed(2)}</span>
      </div>

      <hr className="my-2" />

      <div className="flex justify-between text-lg font-bold mb-4">
        <span>Overall Total</span>
        <span>${Number(grandTotal).toFixed(2)}</span>
      </div>

    <NavLink to={'/shipping'}>
       <button className="w-full px-4 py-3 bg-black text-white text-lg rounded hover:bg-gray-800 transition">
        Proceed to Checkout
      </button>
    </NavLink>
    </div>
  );
}