import React from 'react';
import { Link } from "react-router-dom";

// import './Home.scss';
// import bg from '../assets/bg1.jpg';
import { HomeStyle } from './Home.style';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Home = () => {

  return (
    <HomeStyle>
      <Header />
      <div style={{padding: '2rem'}}>
        <h2>Welcome to the Pokemon Cards Game: Deck Builder</h2>
        <br />
        <p>On this web you can create your custom decks for Pokemon Card game.</p>
        <p>To start to create your decks you must to be registered.</p>
        <br />
        <p>If you are not registered you can do it by clicking on the button <Link className='header__login--button' to="/signup">SIGN UP</Link> in the header.</p>
        <p>Otherwise if you registered previously click on the button <Link className='header__login--button' to="/login">LOG IN</Link> to access to your account.</p>
      </div>
      {/* <img className='bottomImage' src={bg} alt='bg' /> */}
      <Footer />
    </HomeStyle>
  );
}

export default Home;
