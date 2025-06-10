import React, { useState, useEffect, useMemo } from "react";
import { NavLink } from "react-router";
import Footer from "./Footer";
import { Header } from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { addOrder } from "../Store/Slice";
import Swal from "sweetalert2";

export default function ProductList({ loading, Product, error }) {
  const Cart = useSelector((state) => state.product.Cart);
  const dispatch = useDispatch();
  // Infinite scroll state: number of products to show
  const [visibleCount, setVisibleCount] = useState(12);

  // Filter state
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Unique categories from products (memoized)
  const categories = useMemo(() => {
    const cats = Product.map((p) => p.category);
    return ["All", ...new Set(cats)];
  }, [Product]);

  // Filtered products by category
  const filteredProducts =
    selectedCategory === "All"
      ? Product
      : Product.filter((p) => p.category === selectedCategory);

  // Products to show according to infinite scroll
  const visibleProducts = filteredProducts.slice(0, visibleCount);

  // Infinite scroll handler
  useEffect(() => {
    function handleScroll() {
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100
      ) {
        // Near bottom - load more
        setVisibleCount((prev) =>
          prev + 6 > filteredProducts.length
            ? filteredProducts.length
            : prev + 6
        );
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [filteredProducts.length]);

  useEffect(() => {
    setVisibleCount(12);
  }, [selectedCategory]);

  const handleAdd = (id) => {
    let list = Cart;
    let res = list.find((item) => item.id === id);
    if (res) {
      Swal.fire({
        position: "top-end",

        title: "Item Already Added to Cart",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Item has been Added to Cart",
        showConfirmButton: false,
        timer: 1500,
      });
      dispatch(addOrder(id));
    }
  };

  return (
    <div>
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-4">
        <label htmlFor="category" className="font-semibold">
          Filter by Category:
        </label>
        <select
          id="category"
          className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-purple-600"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <main className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {error ? (
          <h1 className="col-span-full text-center text-red-600">
            Error loading products
          </h1>
        ) : loading ? (
          <h1 className="col-span-full text-center">Loading...</h1>
        ) : visibleProducts.length === 0 ? (
          <h1 className="col-span-full text-center">No products found.</h1>
        ) : (
          visibleProducts.map((item) => (
            <div
              className="border rounded-lg p-4 hover:shadow-lg transition-shadow flex flex-col"
              key={item.id}
            >
              <NavLink to={`/product/${item.id}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-contain mb-4"
                />
                <h2 className="font-semibold text-lg">{item.title}</h2>
                <p className="text-purple-600 font-bold text-xl mt-1">
                  ${item.price}
                </p>
                <p className="text-sm text-gray-500">Brand: {item.brand}</p>
                <p className="text-sm text-gray-400">
                  Category: {item.category}
                </p>
                <p className="text-yellow-500 mt-1">Rating: {item.rating} ⭐</p>
              </NavLink>
              <button
                type="button"
                className="mt-auto bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition-colors"
                onClick={() => handleAdd(item.id)}
              >
                ADD TO CART
              </button>
            </div>
          ))
        )}
      </main>
      <br />

      <Footer />
    </div>
  );
}
