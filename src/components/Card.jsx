import React from 'react';
import PropTypes from 'prop-types';

function Card({ data }) {
  const {
    title, img, link, textLink, textImg,
  } = data;

  return (
    <div className="card">
      <h2>{title}</h2>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt={textImg} />
      </a>
      <a href={link} target="_blank" rel="noreferrer">{textLink}</a>
    </div>
  );
}

Card.propTypes = ({
  data: PropTypes.object,
  title: PropTypes.string,
  img: PropTypes.string,
  link: PropTypes.string,
  textImg: PropTypes.string,
  textLink: PropTypes.string,
}).isRequired;

export default Card;
