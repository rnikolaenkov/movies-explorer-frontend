import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, exact, ...props }) => {
  return (
    <Route exact={exact}>
      {() => {
        return (props.isLogin) ? <Component {...props} /> : <Redirect to='/signin'/>
      }
      }
    </Route>
  );
};

export default ProtectedRoute;
