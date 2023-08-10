import React from 'react';
import {RESTAURANT_HOME_IMAGES} from '../utils/constants';
import { useNavigate } from 'react-router-dom';

const RestaurantCard = ({restaurantData}) => {
  const navigate = useNavigate();
  const goToRestaurantMenu = (id) => {
    navigate("/restaurantdetails/"+id)
  }
  return (
    <div className='flex flex-wrap justify-between'>
        {restaurantData.map((restaurant) => {
            return (
                <div onClick={() => goToRestaurantMenu(restaurant.info.id)} className='w-72 mt-6 p-3 cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-xl' key={restaurant.info.id}>
                  <div>
                    <img className='w-96 h-52 shadow-lg rounded-lg' src={RESTAURANT_HOME_IMAGES + restaurant.info.cloudinaryImageId}/>
                  </div>
                  <div className='mt-5'>
                    <p className='font-semibold'>{restaurant.info.name}</p>
                    <p>{restaurant.info.avgRating}</p>
                    <p>{restaurant.info.cuisines.join(", ")}</p>
                    <p>{restaurant.info.areaName}</p>
                    <p>{restaurant.info.costForTwo}</p>
                  </div>
                </div>
            )
        })}
    </div>
  )
}

export default RestaurantCard