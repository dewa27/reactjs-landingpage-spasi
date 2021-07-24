import React from "react";
const ServiceItem = ({ image_name }) => {
  return (
    <div>
      <img src={`./../images/${image_name}`} alt="" />
      <p>Asdfgk</p>
    </div>
  );
};

export default ServiceItem;
