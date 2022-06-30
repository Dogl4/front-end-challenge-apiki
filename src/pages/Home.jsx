import React, { useState, useEffect } from 'react';
import { Card, Loading } from '../components';
import Nav from '../components/Nav';
import dataFormatted from '../services/api';

function Home() {
  const [post, setPost] = useState([]);
  const [pageInfo, setPageInfo] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dataFormatted().then(({ data, infoPage }) => {
      setPost(data);
      setPageInfo(infoPage);
    });
  }, []);

  const getMorePost = async () => {
    const { currentPage } = pageInfo;
    setLoading(true);
    await dataFormatted(`&page=${currentPage}`).then(({ data }) => {
      setPost([...post, ...data]);
      setPageInfo({ ...pageInfo, currentPage: +currentPage + 1 });
    });
    setLoading(false);
  };

  const { currentPage, totalPages } = pageInfo;
  return (
    <>
      <Nav infoPage={pageInfo} />
      <main>
        <section>
          { post.length > 0
            ? post.map((item, index) => <Card data={{ ...item, index }} key={item.id} />)
            : <Loading /> }
        </section>
        { loading && <Loading /> }
        { !(+currentPage === +totalPages) && (
        <button type="button" onClick={getMorePost}>Next</button>
        )}
      </main>
    </>
  );
}

export default Home;
