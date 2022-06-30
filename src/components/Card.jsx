import React from 'react';
import PropTypes from 'prop-types';

function Card({ data }) {
  const {
    id, index, img, imgAlt, slug, title,
  } = data;
  const url = `/details/${index}/${id}`;

  return (
    <div className="card" data-testid="card" key={id}>
      <div className="card__header">
        <a href={url} className="card__header__link">
          <img src={img} alt={imgAlt} className="card__header__link-image" />
        </a>
      </div>
      <div className="card__content">
        <h2 className="card__content-title">{title}</h2>
        <a className="card__content-link" href={url}>{slug}</a>
      </div>
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
