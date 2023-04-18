import Tvhero from './components/Tvhero';
import Price from './components/price';
import Feature from './components/feature';
import React from 'react';
import { NextSeo } from 'next-seo';
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
        <Price />
        
      </div>
    </>
  );
}

export default Home;
