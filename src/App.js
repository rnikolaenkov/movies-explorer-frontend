import React, {useState} from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import './vendor/fonts.css';
import './App.css';

import Main from '../src/components/Main/Main'
import Profile from "./components/Profile/Profile";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import ModalMenu from "./components/ModalMenu/ModalMenu";
import Movies from "./components/Movies/Movies";
import SavedMovies from "./components/SavedMovies/SavedMovies";
import {CurrentUserContext} from './contexts/CurrentUserContext';
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [isOpenModalMenu, setIsOpenModalMenu] = useState(false);
  const [currentUser, setCurrentUser] = React.useState({});

  const handlerShowMenu = () => {
    setIsOpenModalMenu(true);
  }

  const handlerCloseMenu = () => {
    setIsOpenModalMenu(false);
  }

  React.useEffect(() => {
    setIsOpenModalMenu(false);
  }, [])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Switch>
        <Route
          path="/"
          exact
        >
          <Main
            isLogin={ isLogin }
            showModalMenu = { handlerShowMenu }
          />
        </Route>
        <Route
          path="/signup"
        >
          <Register />
        </Route>

        <Route
          path="/signin"
        >
          <Login />
        </Route>

        <ProtectedRoute
          path="/profile"
          exact={true}
          isLogin={isLogin}
          showModalMenu = { handlerShowMenu }
          component={Profile}
        />

        <ProtectedRoute
          path="/movies"
          exact={true}
          isLogin={isLogin}
          showModalMenu = { handlerShowMenu }
          component={Movies}
        />

        <ProtectedRoute
          path="/movies-save"
          exact={true}
          isLogin={isLogin}
          showModalMenu = { handlerShowMenu }
          component={SavedMovies}
        />

        <Route
          path="/*"
        >
          <NotFound />
        </Route>
      </Switch>

      <ModalMenu
        isOpenModalMenu = { isOpenModalMenu }
        closeModalMenu = { handlerCloseMenu }
      />
    </CurrentUserContext.Provider>
  );
}

export default App;
