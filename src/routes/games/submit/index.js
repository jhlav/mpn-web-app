import React from 'react';

import Layout from '../../../components/Layout';
import SubmitGame from './SubmitGame';

const title = 'Submit a Game';

function action() {
  return {
    chunks: ['submitGame'],
    title,
    component: (
      <Layout schema="games">
        <SubmitGame />
      </Layout>
    ),
  };
}

export default action;
