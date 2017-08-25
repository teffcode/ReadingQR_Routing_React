import React from 'react';
import PropTypes from 'prop-types';

import '../styles/Counter.css';

const Counter = ({ count, size }) => (
  <div className={`counter counter-${size}`}>
    {count}
  </div>
);

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  size: PropTypes.string
};

Counter.defaultProps = {
  size: 'small'
}

export default Counter;
