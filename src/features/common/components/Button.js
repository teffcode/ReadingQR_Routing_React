import React from 'react';
import PropTypes from 'prop-types';

import '../styles/Button.css';

const Button = ({ handleClick, text }) => (
  <button className="button" onClick={handleClick}>{text}</button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func
}

Button.defaultProps = {
  handleClick: () => {}
}

export default Button;
