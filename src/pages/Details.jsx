import React from 'react';
import { useParams } from 'react-router-dom';

function Details() {
  const { idPost } = useParams();

  return (
    <div className="details">
      <p>{`Id do post é ${idPost}`}</p>
    </div>
  );
}

Details.propTypes = {};

export default Details;
