import React from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch';
import Header from '../components/presentations/header'
import { background } from '../styles'

const Index = props => (
  <div>
    <Header />
    <style jsx global>{`
      body {
        margin: 0 auto;
        background: ${background} 
      }
    `}</style>
  </div>
)

/* Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map(entry => entry.show)
  };
}; */

export default Index
