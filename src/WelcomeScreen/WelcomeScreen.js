import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomeScreen.scss';

export const WelcomeScreen = () => {
  return (
    <section className="welcome-screen">
      <img src={process.env.PUBLIC_URL + '/baseball-logo.png'} />
      <h3>Welcome to</h3>
      <h1>Just Baseball.</h1>
      <Link className="enter-btn" to='/games'>ENTER</Link>
    </section>
  )
}

export default WelcomeScreen;
