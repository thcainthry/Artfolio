import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Nav from '../components/environments/Nav.js';
import Dashboard from '../components/Pages/Dashboard.jsx';
import Sales from '../components/Pages/Sales.jsx';
import Messages from '../components/Pages/Messages.jsx';
import Products from '../components/Pages/Products.jsx';
import Users from '../components/Pages/Users.jsx';
import Deliveries from '../components/Pages/Deliveries.jsx';
import Settings from '../components/Pages/Settings.jsx';
import SingleProduct from '../components/Pages/SingleProduct.jsx';
const DashboardLayout = ({children}) => {
  return (
   <>
   <Nav children={children}>
   <Switch>
      <Route exact path={['/dashboard', '/dashboard/sales', '/dashboard/messages', '/dashboard/products', '/dashboard/users', '/dashboard/deliveries', '/dashboard/settings', '/dashboard/products/:id']}>
  
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
        
      </Route>
    </Switch>
   </Nav>
   </>
  )
}

export default DashboardLayout