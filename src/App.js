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

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [isOpenModalMenu, setIsOpenModalMenu] = useState(false);

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
    <>
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

      <Route
        path="/profile"
      >
        <Profile
          isLogin={ isLogin }
          showModalMenu = { handlerShowMenu }
        />
      </Route>
      <Route
        path="/movies"
      >
        <Movies
          isLogin={ isLogin }
          showModalMenu = { handlerShowMenu }
        />
      </Route>
      <Route
        path="/movies-save"
      >
        <SavedMovies
          isLogin={ isLogin }
          showModalMenu = { handlerShowMenu }
        />
      </Route>
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
    </>
  );
}

export default App;
