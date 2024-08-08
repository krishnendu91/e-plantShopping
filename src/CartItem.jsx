// import React from 'react';
import PropTypes from 'prop-types';

const CartItem = ({ onContinueShopping }) => (
  <div>
    <button onClick={onContinueShopping}>Continue Shopping</button>
  </div>
);

CartItem.propTypes = {
  onContinueShopping: PropTypes.func.isRequired,
};

export default CartItem;
