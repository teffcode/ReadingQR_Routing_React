import React from 'react';
import PropTypes from 'prop-types';

import '../styles/Page.css';

const Page = ({ children, color }) => (
  <div className="page" style={{ backgroundColor: color }}>
    {children}
  </div>
);

export default Page;
