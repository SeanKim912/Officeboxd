import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import SplashPage from "./components/SplashPage";
import ProfilePage from "./components/ProfilePage";
import CreateProfilePage from "./components/CreateProfilePage";
import EditProfilePage from "./components/EditProfilePage";
import FilmPage from "./components/FilmPage";
import CollectionPage from "./components/CollectionPage";
import CreateCollectionPage from "./components/CreateCollectionPage";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/film/:filmId">
            <FilmPage />
          </Route>
          <Route exact path="/review/:reviewId">
          </Route>
          <Route exact path="/collection/create">
            <CreateCollectionPage />
          </Route>
          <Route exact path="/collection/:collectionId">
            <CollectionPage />
          </Route>
          <Route path="/login" >
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/my-profile">
            <ProfilePage />
          </Route>
          <Route path="/create-profile">
            <CreateProfilePage />
          </Route>
          <Route path="/edit-profile">
            <EditProfilePage />
          </Route>
          <Route exact path='/'>
            <SplashPage />
          </Route>
          {/* 404 route here */}
        </Switch>
      )}
    </>
  )
}

export default App;
