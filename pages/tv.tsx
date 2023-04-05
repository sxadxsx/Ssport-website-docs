import Tvhero from './components/Tvhero';
import Feature from './components/feature';
import React from 'react';
import { NextSeo } from 'next-seo';
import Cost from './components/cost';
const Home = () => {
  return (
    <>
      <NextSeo
        title="雙龍體育TV"
        description="雙龍體育TV直播比賽，快速，安全立刻購買！ 註冊登入"
      />
      <div>
        <Tvhero />
        <Feature />
        <Cost />
      </div>
    </>
  );
}

export default Home;
