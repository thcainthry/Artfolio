import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DashboardLayout from '../src/Layouts/DashboardLayout.js';
import PublicRoutesLayout from '../src/Layouts/PublicRoutesLayout.js';
import Dashboard from './components/Pages/Dashboard.jsx';
import Sales from './components/Pages/Sales.jsx';
import Messages from './components/Pages/Messages.jsx';
import Products from './components/Pages/Products.jsx';
import Users from './components/Pages/Users.jsx';
import Deliveries from './components/Pages/Deliveries.jsx';
import Settings from './components/Pages/Settings.jsx';
import SingleProduct from './components/Pages/SingleProduct.jsx';
import Login from './components/Pages/Login.jsx';
import Page404 from './components/Pages/Page404.jsx';
import Register from './components/Pages/Register.jsx';

const Routes = () => {
  return (
    <Switch>
      <Route exact path={['/dashboard', '/dashboard/sales', '/dashboard/messages', '/dashboard/products', '/dashboard/users', '/dashboard/deliveries', '/dashboard/settings', '/dashboard/products/:id']}>
        <DashboardLayout>
          <Switch>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/dashboard/sales" component={Sales} />
            <Route exact path="/dashboard/messages" component={Messages} />
            <Route exact path="/dashboard/products" component={Products} />
            <Route exact path="/dashboard/users" component={Users} />
            <Route exact path="/dashboard/deliveries" component={Deliveries} />
            <Route exact path="/dashboard/settings" component={Settings} />
            <Route exact path="/dashboard/products/:id" component={SingleProduct} />
          </Switch>
        </DashboardLayout>
      </Route>
      <Route exact path={['/login', '/register']}>
        <PublicRoutesLayout>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </PublicRoutesLayout>
      </Route>
      <Route path="*" component={Page404} />
    </Switch>
  );
};

export default Routes;
