import React from 'react';
import PropTypes from 'prop-types';
import Head from './Head';

const Layout = ({ title, children, ...props }) => (
  <>
    <Head title={title} />
    { children }
  </>
);

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any.isRequired
};

export default Layout;
