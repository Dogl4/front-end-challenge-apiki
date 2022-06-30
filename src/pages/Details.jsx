import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Nav from '../components/Nav';
import { conection } from '../services/api';
import getPage from '../services/getPage';

function Details() {
  const [post, setPost] = useState([]);
  const { indexInPost, idPost } = useParams();

  useEffect(() => {
    const pageIs = getPage(+indexInPost);
    const page = +indexInPost > 9 ? `&page=${pageIs}` : '';

    conection(page).then(({ data }) => {
      const findPost = data.find((e) => e.id === +idPost);
      setPost(findPost);
    });
  }, []);

  return (
    <>
      <Nav />
      <main>
        <div className="details">
          <p>{`indexInPost do post é ${indexInPost}`}</p>
          { console.log('post', post) }
        </div>
      </main>
    </>
  );
}

Details.propTypes = {};

export default Details;
