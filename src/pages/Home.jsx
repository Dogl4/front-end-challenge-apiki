import React, { useState, useEffect } from 'react';
import { Card, Loading } from '../components';
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
    <main>
      <div>Home</div>
      <section>
        { post.length > 0
          ? post.map((item) => <Card data={item} key={item.id} />)
          : <Loading /> }
      </section>
      { loading && <Loading /> }
      { !(+currentPage === +totalPages) && (
      <button type="button" onClick={getMorePost}>Next</button>
      )}
    </main>
  );
}

export default Home;
