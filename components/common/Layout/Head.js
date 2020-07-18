import React from 'react';
import NextHead from 'next/head';
import PropTypes from 'prop-types';

const Head = ({ title }) => (
  <NextHead>
    <title>Comments - STEPS</title>
    <link rel="icon" href="/favicon.ico"/>
  </NextHead>
);

Head.propTypes = {
  title: PropTypes.string
};

Head.defaultProps = {
  title: 'STEPS'
};

export default Head;
