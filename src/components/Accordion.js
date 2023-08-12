import React, { useState } from "react";
import ItemList from "./ItemList";

const Accordion = ({ restaurantItems }) => {
  const [isActive, setIsActive] = useState(false);
  const handleAccordionClick = () => {
    setIsActive(!isActive);
  };
  return (
    <div className="accordion">
      <div
        className={`border p-3 rounded ${
          isActive ? "bg-gray-100" : "bg-white"
        }`}
      >
        <div className="accordion-title flex justify-between items-center cursor-pointer" onClick={handleAccordionClick}>
          <div className="text-lg font-semibold">{restaurantItems.title}</div>
          <div className="text-xl">{isActive ? "-" : "+"}</div>
        </div>
        {isActive && (
          <div className='mt-3'>
            <ItemList restaurantItems={restaurantItems.itemCards} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
