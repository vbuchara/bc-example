import React from 'react';
import { Link } from 'react-router-dom';

import Icon from '../../assets/favicon.png';

import { HeaderStyle } from './styles';

export function Header() {
  return (
    <HeaderStyle>
      <h1>
        <Link to="/">
          <img src={Icon} alt="Icon.png" /> KuppiDevTest
        </Link>
      </h1>
      <div>
        <Link to="/products">Listar Produtos</Link>
      </div>
    </HeaderStyle>
  );
}
