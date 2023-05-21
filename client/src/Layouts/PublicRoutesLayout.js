import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../components/Pages/Login.jsx';
import Page404 from '../components/Pages/Page404.jsx';
import Register from '../components/Pages/Register.jsx';



const Routes = () => {
  return (
    <>
    <Switch>
    <Route exact path={['/login', '/register', '/Page404']}>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route path="/Page404" component={Page404} />
      </Switch>
    
</Route>
  
</Switch>
   </>
  );
};

export default Routes;
