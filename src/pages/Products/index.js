import React from 'react';
import { Link } from 'react-router-dom';

import { Main } from './styles';

export function Products() {
  return (
    <Main>
      <div>
        <Link to="/products/1">
          <h2>Produto #1</h2>
        </Link>
        <Link to="/products/1">
          <p>
            <b>Nome: Name</b>
            <b>R$: Price</b>
          </p>
        </Link>
        <hr />
      </div>
    </Main>
  );
}
