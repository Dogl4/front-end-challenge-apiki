import React, { useState } from 'react';
import Fetch from '../components/Fetch';
import url from '../util';
import CardList from '../components/CardList';

function Home() {
  const [data, setData] = useState(null);
  return (
    <main>
      <div>Home</div>
      <Fetch url={url()} setData={setData}>
        <CardList data={data} />
      </Fetch>
    </main>
  );
}

Home.propTypes = {};

export default Home;
