/* eslint-disable global-require, import/no-dynamic-require */

import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
// import { Card } from 'react-materialize';
import { ExpansionPanel } from 'react-md/lib/ExpansionPanels';

import s from './GameCard.css';

const players = [
  {
    name: 'NintendoFan',
    character: 'luigi',
    stars: '4',
    coins: '71',
  },
  {
    name: 'Jeffery',
    character: 'yoshi',
    stars: '3',
    coins: '120',
  },
  {
    name: 'Celery',
    character: 'donkeykong',
    stars: '3',
    coins: '22',
  },
  {
    name: 'Sly',
    character: 'wario',
    stars: '1',
    coins: '121',
  },
];

class GameCard extends Component {
  render() {
    return (
      <ExpansionPanel label={'Nice meme'}>
        <div>
          Memememe
        </div>
      </ExpansionPanel>
    );
  }
}

export default withStyles(s)(GameCard);
