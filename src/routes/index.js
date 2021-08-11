import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Route from './Route';

import { Header } from '../components/Header';
import { Product } from '../pages/Product';
import { Products } from '../pages/Products';
import { Home } from '../pages/Home';

export default function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path={['/', '/index', '/home']} component={Home} />
        <Route exact path="/products" component={Products} />
        <Route patch="/products/:id" component={Product} />
      </Switch>
    </BrowserRouter>
  );
}
