import React from "react";
import { RESTAURANT_CATEGORY_IMAGE } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const ItemList = ({ restaurantItems }) => {
  const dispatch = useDispatch();
  const handleAddItems = (item) => {
    dispatch(addToCart(item));
  }
  return (
    <div className="restaurant-container">
      {restaurantItems.map((item) => {
        return (
          <div
            key={item.card.info.id}
            className="flex items-center p-4 border mb-4"
          >
            <div className="flex-grow">
              <h3 className="text-xl font-semibold">{item.card.info.name}</h3>
              <p className="text-gray-600">{item.card.info.description}</p>
              <p className="text-green-500 font-semibold">
                {(item.card.info.price / 100).toFixed(2)}
              </p>
            </div>
            <div className="ml-4">
              <img
                src={RESTAURANT_CATEGORY_IMAGE + item.card.info.imageId}
                alt={item.card.info.name}
                className="w-24 h-24 object-cover"
              />
              <button onClick={() => handleAddItems(item.card.info)} className="background-red">
                  Add
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
