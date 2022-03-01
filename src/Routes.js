import React from 'react';
import { Route } from 'react-router-dom';
import EditProfile from './pages/EditProfile';
import Login from './pages/Login';
import Products from './pages/Products';
import Register from './pages/Register';
import ShoppingCart from './pages/ShoppingCart';

function Routes() {
  return (
    <div>
      <Route exact path="/" component={Login} />
      <Route exact path="/editarPerfil" component={EditProfile} />
      <Route exact path="/produtos" component={Products} />
      <Route exact path="/cadastro" component={Register} />
      <Route exact path="/carrinho" component={ShoppingCart} />
    </div>
  );
}

export default Routes;
