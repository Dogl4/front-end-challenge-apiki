import React from 'react';
import PropTypes from 'prop-types';

function Card(props) {
  const {
    title, img, link, textLink, textImg,
  } = props;

  return (
    <div>
      <h2>{title}</h2>
      <a href={link}>
        <img src={img} alt={textImg} />
      </a>
      <a href={link}>{textLink}</a>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  textImg: PropTypes.string.isRequired,
  textLink: PropTypes.string.isRequired,
};

export default Card;
