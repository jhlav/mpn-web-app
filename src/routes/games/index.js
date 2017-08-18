import React from 'react';
import Layout from '../../components/Layout';
import Games from './Games';

const title = 'Games';

function action() {
  return {
    chunks: ['games'],
    title,
    component: (
      <Layout>
        <Games />
      </Layout>
    ),
  };
}

export default action;
