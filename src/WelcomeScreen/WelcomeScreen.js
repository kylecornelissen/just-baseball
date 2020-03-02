import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomeScreen.scss';

export const WelcomeScreen = () => {
  console.log('welcome');
  return (
    <section className="welcome-screen">
      <h3>Welcome to</h3>
      <h1>Just Baseball.</h1>
      <Link className="enter-btn" to='/games'>ENTER</Link>
    </section>
  )
}

export default WelcomeScreen;
