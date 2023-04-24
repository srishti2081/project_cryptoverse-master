import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';
import Loader from './Loader';
const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if (isFetching) return <Loader />; 
  return (
     <section className="foto" style= {{ backgroundImage: 'url("https://user-images.githubusercontent.com/62838398/231455853-4766046b-fada-4af8-8cda-b3cc7451e0f7.png")'}}>
    
      <Title level={2}  style={{padding: '10px 0px 0px 10px '}}className="heading" >Global Crypto Stats</Title>
      <Row gutter={[32, 32]}>
        <Col span={12}><Statistic  title="Total Cryptocurrencies" value={globalStats.total} /></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
        <Col span={12}><Statistic title="Total Market Cap:" value={`$${millify(globalStats.totalMarketCap)}`} /></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value={`$${millify(globalStats.total24hVolume)}`} /></Col>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total} /></Col>
        <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} /></Col>
      </Row>
      <div className="home-heading-container" >
        
        <Title level={2} className="home-title" ><div style={{padding: '10px 0px 0px 10px '}}>Top 10 Cryptos In The World</div></Title>
        <Title level={3} className="show-more"><Link to="/cryptocurrencies"><div style={{padding: '0px 10px 10px 0px '}}>Show more</div></Link></Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title"><div style={{padding: '10px 0px 0px 10px '}}>Latest Crypto News</div></Title>
        <Title level={3}><Link to="/news"><div style={{padding: '0px 10px 10px 0px '}}>Show more</div></Link></Title>
      </div>
      <News simplified />
    </section>
  );
};

export default Homepage;

