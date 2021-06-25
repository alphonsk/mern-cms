import React from 'react'
import { Route, Redirect } from "react-router-dom";


const isAuth = true;
//
// export const PrivateRoute = ({ children, ...rest }) => {
//     return (<Route {...rest} render={() => isAuth ? children : <Redirect to="/" />} />);
// }

//
export const PrivateRoute = ({ component: Component, ...rest }) => {
    return <Route {...rest} render={props => (isAuth ? <Component {...props} /> : <Redirect to="/" />)} />
}