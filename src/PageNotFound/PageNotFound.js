import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.scss';

export const PageNotFound = () => {
  return (
    <section className="page-not-found">
      <img src={process.env.PUBLIC_URL + '/baseball-logo.png'} />
      <h3>Error on the play!</h3>
      <h1>404 Page Not Found</h1>
      <Link className="back-btn" to='/games'>Back to Baseball</Link>
    </section>
  )
}

export default PageNotFound;
