import React, { useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
// import {ReactComponent as PokemonLogo} from '../../assets/logo.svg';

// import './Header.scss';
import { GlobalStyle } from '../GlobalStyle/GlobalStyle.jsx';
import { HeaderStyle } from './Header.style';
import AppLink from '../AppLink/AppLink';
import { AuthenticationContext } from '../../App';
import { setAuthenticatedUser } from '../../utils/authentication';

const Header = () => {

  const authenticationContext = useContext(AuthenticationContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    authenticationContext.setIsAuthenticated(false);
    authenticationContext.setUser(null);
    setAuthenticatedUser(null);
    navigate('/');
  }

  return <HeaderStyle>
    <div className="header__top">
      <h1 className="header__title">
        {/* <PokemonLogo className="header__logo" /> */}
        {/* Create a img to load svg file */}
        <img className="header__logo" src="logo.svg" alt="logo" />
        <br/>
        <span className="header__subtitle">Deck Builder</span>
      </h1>      
    </div>
    <GlobalStyle />
    <div className="header__bottom">
      <nav className='header__menu'>
        <AppLink activeClass='header__link--selected' className="header__link" to="/">HOME</AppLink>
        {/* <AppLink activeClass='header__link--selected' className="header__link" to="/cardlist">CARD LIST</AppLink> */}
        <AppLink activeClass='header__link--selected' className="header__link" to="/mydecks">MY DECKS</AppLink>
      </nav>
      <nav className="header__login">
        {authenticationContext.isAuthenticated ? (
          <>
            <button onClick={() => handleLogout()}>{authenticationContext.user} LOGOUT</button>
          </>
        ) : (
          <>
            <Link className="header__login--button" to="/login">LOG IN</Link>
            {"//"}
            <Link className="header__login--button" to="/signup">SIGN UP</Link>
          </>
        )}

      </nav>    
    </div>
  </HeaderStyle>
}
export default Header;