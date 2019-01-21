import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { clearCurrentProfile } from "./actions/profileActions";

import { Provider } from "react-redux";
import store from "./store";

import { PrivateRoute } from "./components/common/PrivateRouteGroup";
import { CreatorPrivateRoute } from "./components/common/PrivateRouteGroup";
import { AdvertiserPrivateRoute } from "./components/common/PrivateRouteGroup";

import Topbar from "./components/layout/Topbar";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import AdvertiserRegister from "./components/auth/advertiser/AdvertiserRegister";
import AdvertiserEditAccount from "./components/my_page/AdvertiserEditAccount";
import CreatorRegister from "./components/auth/creator/CreatorRegister";
import CreatorEditAccount from "./components/my_page/CreatorEditAccount";
import Login from "./components/auth/Login";
import GetYoutubeChannel from "./components/my_page/GetYoutubeChannel";
import Dashboard from "./components/dashboard/Dashboard";
import CreateProfile from "./components/create-profile/CreateProfile";
import EditProfile from "./components/edit-profile/EditProfile";
import AddExperience from "./components/add-credentials/AddExperience";
import AddEducation from "./components/add-credentials/AddEducation";
import Profiles from "./components/profiles/Profiles";
import Profile from "./components/profile/Profile";
import Posts from "./components/posts/Posts";
import Post from "./components/post/Post";
import NotFound from "./components/not-found/NotFound";
import CreatorList from "./components/creator_list/CreatorList";
import CampaignList from "./components/campaign_list/CampaignList";

import "./App.css";

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Clear current Profile
    store.dispatch(clearCurrentProfile());
    // Redirect to login
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Topbar />
            <Navbar />
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route exact path="/register" component={Register} />
              <Route
                exact
                path="/register_advertiser"
                component={AdvertiserRegister}
              />
              <Route
                exact
                path="/register_creator"
                component={CreatorRegister}
              />
              <Switch>
                <AdvertiserPrivateRoute
                  exact
                  path="/edit_account_advertiser"
                  component={AdvertiserEditAccount}
                />
              </Switch>
              <Switch>
                <CreatorPrivateRoute
                  exact
                  path="/edit_account_creator"
                  component={CreatorEditAccount}
                />
              </Switch>
              <Route exact path="/creator_list" component={CreatorList} />
              <Route exact path="/campaign_list" component={CampaignList} />
              <Route exact path="/login" component={Login} />
              <Route
                exact
                path="/get_youtube_channel"
                component={GetYoutubeChannel}
              />
              {/*
              <Switch>
                <CreatorPrivateRoute
                  exact
                  path="/get_youtube_channel"
                  component={GetYoutubeChannel}
                />
</Switch> */}
              <Route exact path="/not-found" component={NotFound} />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
