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
import ModalErrorMsg from "./components/ModalErrorMsg/ModalErrorMsg";
import ModalSuccessMsg from "./components/ModalSuccessMsg/ModalSuccessMsg";
import {login, checkToken as apiCheckToken, editProfile} from './utils/MainApi';

function App() {
  const history = useHistory();
  const [isLogin, setIsLogin] = useState(false);
  const [isOpenModalMenu, setIsOpenModalMenu] = useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [isOpenError, setIsOpenError] = React.useState(false);
  const [isOpenSuccess, setIsOpenSuccess] = React.useState(false);
  const [message, setMessage] = React.useState(false);

  React.useEffect(() => {
    checkToken();
  }, []);

  const handleShowMenu = () => {
    setIsOpenModalMenu(true);
  }
  const handleCloseMenu = () => {
    setIsOpenModalMenu(false);
  }

  function showModalErrorMsg() {
    setIsOpenError(true);
  }
  function showModalSuccessMsg(message) {
    setMessage(message);
    setIsOpenSuccess(true);
  }
  function closeModal() {
    setIsOpenError(false);
    setIsOpenSuccess(false);
  }

  function handleLoginSubmit (email, password) {
    login(email, password)
      .then(data => {
        if (data.token) {
          localStorage.setItem('jwt', data.token);
          setIsLogin(true);
          setIsOpenSuccess(false);
          checkToken();
          history.push('/movies');
        } else {
          localStorage.removeItem('jwt');
        }
      })
      .catch(err => {
        setIsOpenError(true);
      });
  }

  function checkToken() {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      apiCheckToken(jwt)
        .then(data => {
          if (data.user) {
            setCurrentUser(data);
            setIsLogin(true);
          } else {
            localStorage.removeItem('jwt');
            setIsLogin(false);
          }
        })
        .catch(err => {
          localStorage.removeItem('jwt');
          setIsLogin(false);
        });
    }
  }

  function handleLogout() {
    localStorage.removeItem('jwt');
    setIsLogin(false);
    history.push('/');
  }

  function handleEditProfile(email, name) {
    const token = localStorage.getItem('jwt');
    if (token) {
      editProfile(email, name, token)
        .then(data => {
          setCurrentUser(data);
          setMessage('Данные сохранены');
          setIsOpenSuccess(true);
        })
        .catch(err => {
          setIsOpenError(true);
        });
    } else {
      setIsLogin(false);
    }
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Switch>
        <Route
          path="/"
          exact
        >
          <Main
            isLogin={ isLogin }
            showModalMenu = { handleShowMenu }
          />
        </Route>
        <Route
          path="/signup"
        >
          <Register showModalErrorMsg={showModalErrorMsg} showModalSuccessMsg={showModalSuccessMsg} isLogin={ isLogin } handleLoginSubmit={handleLoginSubmit}/>
        </Route>

        <Route
          path="/signin"
        >
          <Login onSubmit = {handleLoginSubmit} isLogin={ isLogin }/>
        </Route>

        <ProtectedRoute
          path="/profile"
          exact={true}
          isLogin={ isLogin }
          showModalMenu = { handleShowMenu }
          component={Profile}
          logout = {handleLogout}
          onSubmit = {handleEditProfile}
        />

        <ProtectedRoute
          path="/movies"
          exact={true}
          isLogin={ isLogin }
          showModalMenu = { handleShowMenu }
          showModalSuccessMsg = {showModalSuccessMsg}
          showModalErrorMsg = {showModalErrorMsg}
          component={ Movies }
        />

        <ProtectedRoute
          path="/movies-save"
          exact={true}
          isLogin={ isLogin }
          showModalMenu = { handleShowMenu }
          showModalSuccessMsg = {showModalSuccessMsg}
          showModalErrorMsg = {showModalErrorMsg}
          component={SavedMovies}
        />

        <Route
          path="/*"
        >
          <NotFound />
        </Route>
      </Switch>

      <ModalMenu isOpenModalMenu = { isOpenModalMenu } closeModalMenu = { handleCloseMenu } />

      <ModalErrorMsg isOpenError={isOpenError} close={ closeModal } />
      <ModalSuccessMsg isOpenSuccess={isOpenSuccess} close={ closeModal } message={message}/>

    </CurrentUserContext.Provider>
  );
}

export default App;
