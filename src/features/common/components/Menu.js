import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Menu.css';

const Menu = () =>
  <nav className="menu">
    <ul>
      <li>
        <Link to="/reglas">Jugar</Link>
      </li>
      <li>
        <Link to="/organizadores">Organizadores</Link>
      </li>
    </ul>
  </nav>;

export default Menu;
