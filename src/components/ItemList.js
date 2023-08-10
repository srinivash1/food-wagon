import React from 'react'

const ItemList = ({restaurantMenu}) => {
    console.log(restaurantMenu);
    const mappedItems = restaurantMenu.map(restaurant => {
        console.log(restaurant.card.card.title)
    })
  return (
    <div className='restaurant-container'>
        {restaurantMenu.map(restaurant => { 
            return (
                <div>
                    <h1>{restaurant.card.card.title}</h1>
                </div>
               
            )
            
        })}
    </div>
  )
}

export default ItemList