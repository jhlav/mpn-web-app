/* eslint-disable no-shadow */

import React from 'react';
// import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import reactMDCSS from 'react-md/dist/react-md.red-light_blue.min.css';

// import GameCard from '../../components/GameCard';
import GameInputForm from '../../components/GameInputForm';

// const games = [
//   {
//     name: 'Gi-a Fosu',
//     discordID: 'Gi-a Fosu#9108',
//     wins: 1,
//     games: 2,
//     points: 5,
//   },
//   {
//     name: 'Jeffery',
//     discordID: 'Jeffery 🦉🍃#4336',
//     wins: 99,
//     games: 210,
//     points: 1309,
//   },
//   {
//     name: 'jef',
//     discordID: 'jef#9862',
//     wins: 15,
//     games: 23,
//     points: 98,
//   },
//   {
//     name: 'Sly',
//     discordID: 'Sly 🔥🍕#4741',
//     wins: 100,
//     games: 238,
//     points: 1290,
//   },
//   {
//     name: 'Player',
//     discordID: 'Player#5555',
//     wins: 0,
//     games: 0,
//     points: 0,
//   },
// ];

class Games extends React.Component {
  componentDidMount() {
    require('webfontloader').load({ // eslint-disable-line
      google: {
        families: ['Roboto', 'Roboto Condensed', 'Material Icons'],
      },
    });
  }

  render() {
    return (
      <div style={{ backgroundColor: '#fbfbfb' }}>
        {/* games.map(game => <GameCard key={game.id} game={game} />) */}
        <GameInputForm />
      </div>
    );
  }
}

export default withStyles(reactMDCSS)(Games);
