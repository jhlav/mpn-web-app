/* eslint-disable no-shadow */

import React from 'react';
import PropTypes from 'prop-types';

import GameCard from '../../components/GameCard';

const games = [
  {
    name: 'Gi-a Fosu',
    discordID: 'Gi-a Fosu#9108',
    wins: 1,
    games: 2,
    points: 5,
  },
  {
    name: 'Jeffery',
    discordID: 'Jeffery 🦉🍃#4336',
    wins: 99,
    games: 210,
    points: 1309,
  },
  {
    name: 'jef',
    discordID: 'jef#9862',
    wins: 15,
    games: 23,
    points: 98,
  },
  {
    name: 'Sly',
    discordID: 'Sly 🔥🍕#4741',
    wins: 100,
    games: 238,
    points: 1290,
  },
  {
    name: 'Player',
    discordID: 'Player#5555',
    wins: 0,
    games: 0,
    points: 0,
  },
];

function Games() {
  return (
    <div style={{ backgroundColor: '#fbfbfb' }}>
      {games.map(game => <GameCard key={game.id} game={game} />)}
    </div>
  );
}

export default Games;
