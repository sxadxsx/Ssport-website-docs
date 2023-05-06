import Hero from './components/Hero';
import Table from './components/table';
import Tabl from './components/tabl';
import React from 'react';
import { NextSeo } from 'next-seo';

const Home = () => {
  return (
    <>
      <NextSeo
        title="雙龍體育"
        description="籃球，為一種由兩隊參與，在一個長方形籃球場進行的球類運動。每隊出場5名隊員，可將球向任何方向傳、投、拍、滾或運...."
      />
      <div>
        <Hero />
        <div id="anchor_one" />
        <Table />
        <Tabl />
      </div>
    </>
  );
}

export default Home;
