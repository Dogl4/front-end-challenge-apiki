import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

function CardList({ data }) {
  return (
    <section>
      { data ? data.map((item) => {
        const {
          title, link, slug, _embedded, id,
        } = item;
        const { rendered } = title;
        const [imgObj] = _embedded['wp:featuredmedia'];
        const { alt_text: imgAlt, media_details: imgDetails } = imgObj;
        const img = imgDetails.sizes['jnews-360x180'].source_url;
        return (
          <Card
            data={{
              title: rendered, img, link, textLink: slug, textImg: imgAlt,
            }}
            key={id}
          />
        );
      }) : <p>Loading...</p> }
    </section>
  );
}

CardList.propTypes = ({
  data: PropTypes.arrayOf(PropTypes.object),
}).isRequired;

export default CardList;
