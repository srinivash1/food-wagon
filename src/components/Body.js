import React, { useState } from "react";
import useFetchRestaurantData from "../utils/useFetchRestaurantData";
import RestaurantCard from "./RestaurantCard";
import SearchInput from "./SearchInput";
import RestaurantDishesImages from "./RestaurantDishesImages";

const Body = () => {
  const [searchValue, setSearchValue] = useState("");
  const { loading, restaurantData } = useFetchRestaurantData();

  //FilteredRestaurants logic
  const filteredRestaurants = restaurantData.filter((restaurantData) => {
    return restaurantData.info.name
      .toLowerCase()
      .includes(searchValue.toLowerCase());
  });

  return (
    <div className="mt-10 p-8">
      <RestaurantDishesImages />
      <div className="flex justify-center">
        {/* Search Input component */}
        <SearchInput
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <div className="mt-10 p-8">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <RestaurantCard restaurantData={filteredRestaurants} />
        )}
      </div>
    </div>
  );
};

export default Body;
