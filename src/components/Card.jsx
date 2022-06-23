import React from 'react';
import PropTypes from 'prop-types';

function Card({ data }) {
  const {
    id, index, img, imgAlt, slug, title,
  } = data;
  const url = `/details/${index}/${id}`;

  return (
    <div className="card" data-testid="card" key={id}>
      <h2>{title}</h2>
      <a href={url}>
        <img src={img} alt={imgAlt} />
      </a>
      <a href={url}>{slug}</a>
    </div>
  );
}

Card.propTypes = ({
  data: PropTypes.object,
  id: PropTypes.number,
  img: PropTypes.string,
  imgAlt: PropTypes.string,
  title: PropTypes.string,
  slug: PropTypes.string,
  link: PropTypes.string,
}).isRequired;

export default Card;
