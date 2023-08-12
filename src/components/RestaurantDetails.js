import React from "react";
import { useParams } from "react-router-dom";
import useFetchRestaurantDetails from "../utils/useFetchRestaurantDetails";
import ItemList from "./ItemList";
import Accordion from "./Accordion";

const RestaurantDetails = () => {
  const { id } = useParams();
  const { loading, restaurantMenu, restaurantDetails } =
    useFetchRestaurantDetails(id);
  const { name, cuisines, areaName, avgRating, totalRatingsString } =
    restaurantDetails;
  return (
    <div className="mt-10 p-8">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="flex justify-around items-center">
            <div className="title-container">
              <h3 className="font-extrabold">{name}</h3>
              <p className="mt-2">{cuisines}</p>
              <p className="mt-2">{areaName}</p>
            </div>
            <div className="border p-1 rounded flex flex-col items-center">
              <p className="text-green-500 font-extrabold">{avgRating}</p>
              <p className="mt-2">{totalRatingsString}</p>
            </div>
          </div>
          <hr className="mt-3" />
          <div>
            {restaurantMenu.map((restaurantItems) => {
              return (
                <Accordion restaurantItems={restaurantItems.card.card}/>
              )
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default RestaurantDetails;
