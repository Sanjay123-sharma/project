import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Header } from '../Components/Header';
import Swal from 'sweetalert2';
import { addOrder } from '../Store/Slice';
import Footer from '../Components/Footer';

export default function PDP() {
  const { id } = useParams();
  const Product = useSelector((state) => state.product.Product);
  const Cart = useSelector((state) => state.product.Cart);
  const product = Product.find((item) => item.id.toString() === id);
  const dispatch=useDispatch()

 const handleAdd=(id)=>{
    let list=Cart;
    let res=list.find((item)=>item.id===id)
    if(res){
      Swal.fire({
  position: "top-end",
  title: "Item Already Added to Cart",
  showConfirmButton: false,
  timer: 1500
});
    }else{
      Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Item has been Added to Cart",
  showConfirmButton: false,
  timer: 1500,
 
});
dispatch(addOrder(id))
    }

  }
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <div className="p-4 max-w-4xl mx-auto w-full">
        {!product ? (
          <h1 className="text-center text-xl font-bold text-red-500">
            Product Not Found
          </h1>
        ) : (
          <div className="bg-white shadow-xl rounded-2xl p-6 md:flex gap-8">
            <div className="md:w-1/2 flex justify-center">
              <img
                src={product.image}
                alt={product.title}
                className="rounded-xl object-contain max-h-[400px] w-full"
              />
            </div>
            <div className="md:w-1/2 space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">{product.title}</h2>
              <p className="text-gray-600">{product.des || product.desp}</p>
              <p className="text-lg font-semibold text-green-600">₹ {product.price}</p>
              <p className="text-sm text-yellow-600">⭐ Rating: {product.rating}</p>
              <p className="text-sm text-gray-500">Category: {product.category}</p>
              <p className="text-sm text-gray-500">Brand: {product.brand}</p>

              <button
                className="bg-purple-600 text-white px-5 py-2 rounded hover:bg-purple-700 transition duration-200"
                onClick={()=>handleAdd(product.id)}
                
              >
                Add to Cart
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
