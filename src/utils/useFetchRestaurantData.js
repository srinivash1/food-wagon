import React, { useState, useEffect } from "react";
import axios from "axios";
import { SWIGGY_URI } from "./constants";

const useFetchRestaurantData = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [restaurantImages, setRestaurantImages] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchRestaurantData();
  }, []);
  const fetchRestaurantData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(SWIGGY_URI);
      setRestaurantData(
        response.data.data.cards[5].card.card.gridElements.infoWithStyle
          .restaurants
      );
      setRestaurantImages(response.data.data.cards[1].card.card);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  return { loading, restaurantData, restaurantImages };
};

export default useFetchRestaurantData;
