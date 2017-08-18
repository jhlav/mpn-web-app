import React from 'react';
import Layout from '../../components/Layout';
import Boards from './Boards';

const title = 'Leaderboards';

function action() {
  return {
    chunks: ['boards'],
    title,
    component: (
      <Layout schema="boards">
        <Boards />
      </Layout>
    ),
  };
}

export default action;

// action: () => ({ title, component: <Layout><Boards /></Layout> }),
