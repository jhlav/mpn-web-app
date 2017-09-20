/* eslint-disable no-shadow */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import { graphql } from 'react-apollo';
import reactMDCSS from 'react-md/dist/react-md.red-light_blue.min.css';

import games from './games.graphql';
import GameCard from '../../components/GameCard';
// import players from './players.graphql';
import s from './Games.css';

@graphql(games)
@withStyles(s, reactMDCSS)
class Games extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
      games: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          game: PropTypes.string.isRequired,
          platform: PropTypes.string.isRequired,
          gamemode: PropTypes.string.isRequired,
          board: PropTypes.string.isRequired,
          date: PropTypes.oneOfType([
            PropTypes.instanceOf(Date),
            PropTypes.string,
          ]).isRequired,
          entries: PropTypes.arrayOf(
            PropTypes.shape({
              place: PropTypes.number.isRequired,
              player: PropTypes.shape({
                id: PropTypes.string.isRequired,
                tag: PropTypes.string.isRequired,
                avatarURL: PropTypes.string.isRequired,
              }).isRequired,
              character: PropTypes.string.isRequired,
              coins: PropTypes.number.isRequired,
              minigameCoins: PropTypes.number.isRequired,
              stars: PropTypes.number.isRequired,
            }),
          ).isRequired,
        }),
      ).isRequired,
      // players: PropTypes.arrayOf(
      //   PropTypes.shape({
      //     id: PropTypes.string.isRequired,
      //     avatarURL: PropTypes.string.isRequired,
      //     tag: PropTypes.string.isRequired,
      //   }),
      // ),
    }).isRequired,
  };

  componentDidMount() {
    import('webfontloader').then(wfl =>
      wfl.load({
        google: {
          families: ['Roboto', 'Roboto Condensed', 'Material Icons'],
        },
      }),
    );
  }

  render() {
    const { games } = this.props.data;
    return (
      <div className={s.root}>
        <div className={s.container}>
          {games.map(game => <GameCard key={game.id} game={game} />)}
        </div>
      </div>
    );
  }
}

export default Games;
