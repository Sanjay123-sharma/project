import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../Components/Header';
import Footer from '../Components/Footer';
import { cancelOrder } from '../Store/Slice';
import Swal from 'sweetalert2';

export default function Orders() {
  const Order = useSelector((state) => state.product.Order);
  const dispatch=useDispatch()
  const handleCancel = (OrderId) => {
  Swal.fire({
    title: "Are you Want to Cancel the Order?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes",
    cancelButtonText: "No",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Cancelled!",
        text: "Order Cancelled Successfully.",
        icon: "success",
      });
      dispatch(cancelOrder(OrderId));
    }
  });
};


  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span role="img" aria-label="box">
            📦
          </span>
          My Orders
        </h1>

        {!Order || Order.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">No Order Yet</p>
        ) : (
          <div className="space-y-4">
            {Order.map((item) => (
              <div
                key={item.OrderId}
                className="flex items-center justify-between bg-white p-4 rounded-lg shadow border border-gray-200"
              >
               
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{item.title}</div>
                    <div className="text-sm text-gray-600">Quantity: {item.count}</div>
                    <div className="text-sm text-gray-500 mt-1">Order ID: {item.OrderId}</div>
                  </div>
                </div>

               
                <div className="text-right">
                  <div className="text-lg font-semibold text-gray-900 mb-2">
                    ${(item.price * item.count).toFixed(2)}
                  </div>
                  <button className="text-sm text-red-600 border border-red-500 px-3 py-1 rounded hover:bg-red-50 transition"
                  onClick={()=>handleCancel(item.OrderId)}
                  >
                    Cancel Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
