import React from 'react';
import useFetchRestaurantData from '../utils/useFetchRestaurantData';
import {MENU_IMAGE_URL} from '../utils/constants';

const RestaurantDishesImages = () => {
    const {loading, restaurantImages} = useFetchRestaurantData();
    const {header,imageGridCards} = restaurantImages;
    if(loading) {
        return <p>Loading...</p>
    }
    if(!restaurantImages || !restaurantImages.header || !restaurantImages.imageGridCards) { 
        return <p>Cant able to fetch the data...</p>
    }
  return (
    <div className=' p-4'>
      <div className='title'>
        <h1>{header.title}</h1>
      </div>
      <div className='flex mt-5'>
        {imageGridCards.info.map((image) => {
            return (
                <div key={image.id}>
                    <img className='w-28 cursor-pointer' src={MENU_IMAGE_URL + image.imageId} alt='Restaurant Menu Image'/>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default RestaurantDishesImages