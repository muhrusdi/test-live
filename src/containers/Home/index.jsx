import React from 'react'
import styled from '@emotion/styled'
import SEO from 'Components/Seo'
import Layout from 'Containers/Layout'
import Banner from './Banner'
import Feature from './Feature'
import WhyUs from './WhyUs'
import Service from './Service'
import Quote from './Quote'

const Home = (props) => {
  const HomeWrapper = styled.div`
    background: #fbfcff;
  `
  return (
    <HomeWrapper>
      <SEO 
        title="Home" 
        description={["Empowering people and businesses to do their best at work and life with the help of technology" ]}
        keywords={[`businesses`, `productive`, `hrd`]} />
      <Layout>
        <Banner/>
        <Feature/>
        <WhyUs/>
        <Service/>
        <Quote/>
      </Layout>
    </HomeWrapper>
  )
  
}
export default Home
