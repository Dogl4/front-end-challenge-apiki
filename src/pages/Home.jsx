import React, { useState } from 'react';
import Fetch from '../components/Fetch';
import url from '../util';
import CardList from '../components/CardList';
import LanePage from '../components/LanePage';

function Home() {
  const [data, setData] = useState(null);

  const infoPage = {
    currentPage: data?.headers?.link?.split('page=', -1)[1].split('>')[0],
    totalPages: data?.headers?.['x-wp-totalpages'],
  };

  return (
    <main>
      <div>Home</div>
      <Fetch url={url()} setData={setData} data={data?.data}>
        { data && <CardList data={data.data} />}
      </Fetch>
      { console.log('data HOME', data) }
      <LanePage infoPage={{ infoPage, data, setData }} />
    </main>
  );
}

Home.propTypes = {};

export default Home;
