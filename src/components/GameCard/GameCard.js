/* eslint-disable global-require, import/no-dynamic-require */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import Avatar from 'react-md/lib/Avatars/Avatar';
import Card from 'react-md/lib/Cards/Card';
import CardActions from 'react-md/lib/Cards/CardActions';
import CardText from 'react-md/lib/Cards/CardText';
// import { ExpansionPanel } from 'react-md/lib/ExpansionPanels';

import * as moment from 'moment';

import { getCharacterImage } from '../../constants/marioParty';
import s from './GameCard.css';

const intMP1 = require('../_SharedAssets/integerMP1.png');
const intMP2 = require('../_SharedAssets/integerMP2.png');
const intMP3 = require('../_SharedAssets/integerMP3.png');
const intMP4 = require('../_SharedAssets/integerMP4.png');
const intMP5 = require('../_SharedAssets/integerMP5.png');
const intMP6 = require('../_SharedAssets/integerMP6.png');
const intMP7 = require('../_SharedAssets/integerMP7.png');
const intMP8 = require('../_SharedAssets/integerMP8.png');
const intMP9 = require('../_SharedAssets/integerMP9.png');

@withStyles(s)
class GameCard extends React.Component {
  static propTypes = {
    game: PropTypes.shape({
      id: PropTypes.string.isRequired,
      game: PropTypes.string.isRequired,
      platform: PropTypes.string.isRequired,
      gamemode: PropTypes.string.isRequired,
      board: PropTypes.string.isRequired,
      date: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string])
        .isRequired,
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
    }).isRequired,
  };

  render() {
    const { game } = this.props;
    let gameImage;
    switch (game.game) {
      case 'Mario Party 1':
        gameImage = intMP1;
        break;
      case 'Mario Party 2':
        gameImage = intMP2;
        break;
      case 'Mario Party 3':
        gameImage = intMP3;
        break;
      case 'Mario Party 4':
        gameImage = intMP4;
        break;
      case 'Mario Party 5':
        gameImage = intMP5;
        break;
      case 'Mario Party 6':
        gameImage = intMP6;
        break;
      case 'Mario Party 7':
        gameImage = intMP7;
        break;
      case 'Mario Party 8':
        gameImage = intMP8;
        break;
      case 'Mario Party 9':
        gameImage = intMP9;
        break;
      default:
        gameImage = intMP1;
    }
    return (
      <Card className={s.root}>
        <CardActions className={s.expander} expander>
          <img alt={game.game} src={gameImage} title={game.game} />
          {game.entries.map(entry =>
            <img
              alt={entry.character || 'CPU'}
              src={getCharacterImage(entry.character)}
              title={entry.character || 'CPU'}
            />,
          )}
        </CardActions>
        <CardText className={s.expandable} expandable>
          <div className={s.coins}>
            <img alt="" src={require('../_SharedAssets/coin.png')} />
          </div>
          <div className={s.c1}>
            {game.entries[0].coins}
          </div>
          <div className={s.c2}>
            {game.entries[1].coins}
          </div>
          <div className={s.c3}>
            {game.entries[2].coins}
          </div>
          <div className={s.c4}>
            {game.entries[3].coins}
          </div>
          <div className={s.mgCoins}>
            <img alt="" src={require('../_SharedAssets/coin.png')} />
          </div>
          <div className={s.m1}>
            {game.entries[0].minigameCoins}
          </div>
          <div className={s.m2}>
            {game.entries[1].minigameCoins}
          </div>
          <div className={s.m3}>
            {game.entries[2].minigameCoins}
          </div>
          <div className={s.m4}>
            {game.entries[3].minigameCoins}
          </div>
          <div className={s.stars}>
            <img alt="" src={require('../_SharedAssets/star.png')} />
          </div>
          <div className={s.s1}>
            {game.entries[0].stars}
          </div>
          <div className={s.s2}>
            {game.entries[1].stars}
          </div>
          <div className={s.s3}>
            {game.entries[2].stars}
          </div>
          <div className={s.s4}>
            {game.entries[3].stars}
          </div>
          <div className={s.p1}>
            <Avatar
              alt={game.entries[0].player.tag}
              src={game.entries[0].player.avatarURL}
            />
          </div>
          <div className={s.player1}>
            {game.entries[0].player.tag}
          </div>
          <div className={s.p2}>
            <Avatar
              alt={game.entries[1].player.tag}
              src={game.entries[1].player.avatarURL}
            />
          </div>
          <div className={s.player2}>
            {game.entries[1].player.tag}
          </div>
          <div className={s.p3}>
            <Avatar
              alt={game.entries[2].player.tag}
              src={game.entries[2].player.avatarURL}
            />
          </div>
          <div className={s.player3}>
            {game.entries[2].player.tag}
          </div>
          <div className={s.p4}>
            <Avatar
              alt={game.entries[3].player.tag}
              src={game.entries[3].player.avatarURL}
            />
          </div>
          <div className={s.player4}>
            {game.entries[3].player.tag}
          </div>
          <div className={s.boardTitle}>Board:</div>
          <div className={s.board}>
            {game.board}
          </div>
          <div className={s.gamemodeTitle}>Gamemode:</div>
          <div className={s.gamemode}>
            {game.gamemode}
          </div>
        </CardText>
        <div className={s.time}>
          <span className="md-paper--2">
            {moment(game.date).fromNow()}
          </span>
        </div>
      </Card>
    );
  }
}

export default GameCard;
