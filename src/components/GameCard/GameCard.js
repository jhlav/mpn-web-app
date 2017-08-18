/* eslint-disable global-require, import/no-dynamic-require */

import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
// import { Card } from 'react-materialize';

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
      <div style={{ margin: '10px' }}>
        <div className={s.header}>
          <div className={s.number_id}>
            <span>32</span>
          </div>
          <div
            style={{
              flex: 1,
              textAlign: 'center',
              height: '48px',
              lineHeight: '48px',
              backgroundColor: '#aaa',
            }}
          >
            Board
          </div>
          <div
            style={{
              flex: 1,
              textAlign: 'center',
              height: '48px',
              lineHeight: '48px',
              backgroundColor: '#aaa',
            }}
          >
            Date
          </div>
          <div
            style={{
              flex: 1,
              textAlign: 'center',
              height: '48px',
              lineHeight: '48px',
              backgroundColor: '#aaa',
            }}
          >
            Time (UTC)
          </div>
        </div>
        <div className={s.grid}>
          <div className={s.playerGrid}>
            <div className={s.first}>
              <img
                alt={players[0].character}
                src={require(`./p_${players[0].character}.png`)}
              />
            </div>
            <div className={s.second}>
              <span
                className={s.firstPlace}
                style={{
                  backgroundImage: `url(${require('./place-sheet.png')})`,
                }}
              />
            </div>
            <div className={s.third}>
              {players[0].name}
            </div>
            <div className={s.fourth}>
              <div>
                <div>
                  <img alt="Star" src={require('./star.png')} />
                </div>
                <div>
                  {players[0].stars}
                </div>
              </div>
              <div>
                <div>
                  <img alt="Coin" src={require('./coin.png')} />
                </div>
                <div>
                  {players[0].coins}
                </div>
              </div>
            </div>
          </div>
          <div className={s.playerGrid}>
            <div className={s.first}>
              <img
                alt={players[1].character}
                src={require(`./p_${players[1].character}.png`)}
              />
            </div>
            <div className={s.second}>
              <span
                className={s.secondPlace}
                style={{
                  backgroundImage: `url(${require('./place-sheet.png')})`,
                }}
              />
            </div>
            <div className={s.third}>
              {players[1].name}
            </div>
            <div className={s.fourth}>
              <div>
                <div>
                  <img alt="Star" src={require('./star.png')} />
                </div>
                <div>
                  {players[1].stars}
                </div>
              </div>
              <div>
                <div>
                  <img alt="Coin" src={require('./coin.png')} />
                </div>
                <div>
                  {players[1].coins}
                </div>
              </div>
            </div>
          </div>
          <div className={s.playerGrid}>
            <div className={s.first}>
              <img
                alt={players[2].character}
                src={require(`./p_${players[2].character}.png`)}
              />
            </div>
            <div className={s.second}>
              <span
                className={s.thirdPlace}
                style={{
                  backgroundImage: `url(${require('./place-sheet.png')})`,
                }}
              />
            </div>
            <div className={s.third}>
              {players[2].name}
            </div>
            <div className={s.fourth}>
              <div>
                <div>
                  <img alt="Star" src={require('./star.png')} />
                </div>
                <div>
                  {players[2].stars}
                </div>
              </div>
              <div>
                <div>
                  <img alt="Coin" src={require('./coin.png')} />
                </div>
                <div>
                  {players[2].coins}
                </div>
              </div>
            </div>
          </div>
          <div className={s.playerGrid}>
            <div className={s.first}>
              <img
                alt={players[3].character}
                src={require(`./p_${players[3].character}.png`)}
              />
            </div>
            <div className={s.second}>
              <span
                className={s.fourthPlace}
                style={{
                  backgroundImage: `url(${require('./place-sheet.png')})`,
                }}
              />
            </div>
            <div className={s.third}>
              {players[3].name}
            </div>
            <div className={s.fourth}>
              <div>
                <div>
                  <img alt="Star" src={require('./star.png')} />
                </div>
                <div>
                  {players[3].stars}
                </div>
              </div>
              <div>
                <div>
                  <img alt="Coin" src={require('./coin.png')} />
                </div>
                <div>
                  {players[3].coins}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(GameCard);
