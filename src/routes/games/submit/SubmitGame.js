/* eslint-disable no-shadow */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import { graphql } from 'react-apollo';
import reactMDCSS from 'react-md/dist/react-md.red-light_blue.min.css';

import GameInputForm from '../../../components/GameInputForm';
import players from '../players.graphql';
import s from '../Games.css';

@graphql(players)
@withStyles(s, reactMDCSS)
class SubmitGame extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
      players: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          avatarURL: PropTypes.string.isRequired,
          tag: PropTypes.string.isRequired,
        }),
      ),
    }).isRequired,
  };

  componentDidMount() {
    require('webfontloader').load({ // eslint-disable-line
      google: {
        families: ['Roboto', 'Roboto Condensed', 'Material Icons'],
      },
    });
  }

  render() {
    const { players } = this.props.data;
    return (
      <div className={s.root}>
        <div className={s.container}>
          <GameInputForm players={players} />
        </div>
      </div>
    );
  }
}

export default SubmitGame;
