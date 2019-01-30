import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const _PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

const _CreatorPrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (auth.isAuthenticated === false) {
        return <Redirect to="/login" />;
      } else {
        if (auth.user.user_type === "creator") {
          return <Component {...props} />;
        } else {
          return <Redirect to="/" />;
        }
      }
    }}
  />
);

const _AdvertiserPrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (auth.isAuthenticated === false) {
        return <Redirect to="/login" />;
      } else {
        if (auth.user.user_type === "advertiser") {
          return <Component {...props} />;
        } else {
          return <Redirect to="/" />;
        }
      }
    }}
  />
);

_PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

_CreatorPrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

_AdvertiserPrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export const PrivateRoute = connect(mapStateToProps)(_PrivateRoute);
export const CreatorPrivateRoute = connect(mapStateToProps)(
  _CreatorPrivateRoute
);
export const AdvertiserPrivateRoute = connect(mapStateToProps)(
  _AdvertiserPrivateRoute
);
