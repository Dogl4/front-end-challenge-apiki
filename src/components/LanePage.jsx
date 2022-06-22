import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Fetch from './Fetch';
import CardList from './CardList';
import url from '../util';

function LanePage({ /* infoPage */ data, setData }) {
  const [isNext, setIsNext] = useState(false);
  const [post, setPost] = useState([]);

  useEffect(() => {
    console.log('post', post);

    if (isNext) {
      setPost([...post, ...data.data]);

      setIsNext(false);
    }
  });

  const handleNext = () => {
    // setIsNext(true);

    setTimeout(() => {
      // setIsNext(false);
    }, 1000);
  };

  return (
    <>
      <div>LanePage</div>
      {console.log('data LANE', data)}
      {post.length && (
      <Fetch url={url()} setData={setData} data={data}>
        { data && <CardList data={data?.data} />}
      </Fetch>
      )}
      <button type="button" onClick={handleNext}>Prev</button>
    </>
  );
}

LanePage.propTypes = ({
  infoPage: PropTypes.object,
}).isRequired;

export default LanePage;
