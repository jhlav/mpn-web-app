import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import emoji from 'react-easy-emoji';
// import twEmoji from 'twemoji';
// import { Card, Col, Row } from 'react-materialize';
import s from './BoardRow.css';
import avatar from '../_SharedAssets/discord-avatar-default.png';

@withStyles(s)
class BoardRow extends React.Component {
  static propTypes = {
    player: PropTypes.shape({
      id: PropTypes.string.isRequired,
      avatarURL: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
    }).isRequired,
  };

  render() {
    const { avatarURL, tag } = this.props.player;
    return (
      <div className={s.root}>
        <div className={s.avatarCap}>
          <img
            alt={`Player ${tag}`}
            className={s.avatar}
            src={avatarURL || avatar}
          />
        </div>
        <div className={s.infoGrid}>
          <div className={s.tag}>
            {emoji(tag.replace(/(\r\n|\n|\r)/gm, ''))}
          </div>
          <div className={s.stats}>
            <div>
              <span>1</span>
              <br />
              <span>Wins</span>
            </div>
            <div>
              <span>2</span>
              <br />
              <span>Games</span>
            </div>
            <div>
              <span>3</span>
              <br />
              <span>Points</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BoardRow;
