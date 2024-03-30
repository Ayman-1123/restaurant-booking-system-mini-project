import React from 'react';
import styles from './css/MenuItem.module.css'

const MenuItem = ({ name, description, price, image }) => {
  return (
    <div className="col-lg-9 item-width">
      <div className="d-flex align-items-center">
        <img className="flex-shrink-0 img-fluid rounded" src={image} alt={name} style={{ width: '80px' }} />
        <div className="w-100 d-flex flex-column text-start ps-4">
          <h5 className="d-flex justify-content-between border-bottom pb-2">
            <span>{name}</span>
            <span className="text-primary">₹{price}</span>
          </h5>
          <small className="fst-italic">{description}</small>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
