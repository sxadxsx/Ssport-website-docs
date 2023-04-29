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
        <script>
  window.__ow = window.__ow || {};
  window.__ow.organizationId = "d23241f2-b057-4a36-befa-14b609c25f00";
  ;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[OpenWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.openwidget.com/openwidget.js",t.head.appendChild(n)}};!n.__ow.asyncInit&&e.init(),n.OpenWidget=n.OpenWidget||e}(window,document,[].slice))
</script>
      </div>
    </>
  );
}

export default Home;
