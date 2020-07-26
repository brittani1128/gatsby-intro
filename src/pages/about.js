import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <h1>About Me</h1>
    <p>
      Welcome to my practice website. This is my first gatsby site I've build
      for a front end masters course.
    </p>
    <Link to="/">Home</Link>
  </Layout>
);
