import React, { useState, useEffect } from "react";
import axios from "axios";
import { RESTAURANT_MENU_URI } from "./constants";

const useFetchRestaurantDetails = (id) => {
  const [restaurantDetails, setRestaurantDetails] = useState([]);
  const [restaurantMenu, setRestaurantMenu] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchRestaurantDetails();
  }, []);
  const fetchRestaurantDetails = async () => {
    setLoading(true);
    try {
      const response = await axios.get(RESTAURANT_MENU_URI + id);
      setRestaurantMenu(
        response.data.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.slice(1,)
      );
      setRestaurantDetails(response.data.data.cards[0].card.card.info);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return { loading, restaurantMenu, restaurantDetails };
};

export default useFetchRestaurantDetails;
