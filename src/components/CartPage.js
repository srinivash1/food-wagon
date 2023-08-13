import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {deleteFromCart} from '../features/cart/cartSlice'

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);

  const removeItemsFromCart = () => {
    dispatch(deleteFromCart())
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
          Your Cart
        </h1>
        {cartItems.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition duration-300"
              >
                <p className="text-xl font-semibold">{item.name}</p>
                <p className="text-gray-600">₨ - {item.price / 100}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <button onClick={removeItemsFromCart} className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 mr-3 font-semibold rounded-full shadow-md transition duration-300">
        Remove
      </button>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-300">
        CheckOut
      </button>
    </div>
  );
};

export default CartPage;
