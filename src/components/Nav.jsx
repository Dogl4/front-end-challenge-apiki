import React from 'react';
import PropTypes from 'prop-types';
import logoApiki from '../image/logo-icon.png';

function Nav({ infoPage = {} }) {
  const { currentPage, totalPages } = infoPage;
  return (
    <div className="nav">
      <div className="nav__container">
        <a href="/" alt="home" className="nav__container__link">
          <img src={logoApiki} alt="logo" className="nav__container__link-logo" />
          apiki
        </a>
      </div>
      {currentPage && (
      <div className="nav__container">
        {currentPage}
        {' '}
        de
        {' '}
        {totalPages}
      </div>
      )}
    </div>
  );
}

Nav.propTypes = ({
  infoPage: PropTypes.object,
}).isRequired;

export default Nav;
