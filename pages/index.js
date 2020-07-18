import React from 'react';
import HomePage from '../components/Home';
import Layout from '../components/common/Layout';

const Home = () => {
  return(
    <>
      <Layout title='Comments'>
        <HomePage />
      </Layout>
      <style global jsx>{`
        body {
              font-family: "Roboto", "Helvetica", "Arial", sans-serif;
        }
      `}</style>
    </>
  );
};

export default Home;
