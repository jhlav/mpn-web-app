/* eslint-disable no-shadow */

import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import reactMDCSS from 'react-md/dist/react-md.red-light_blue.min.css';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import { changeCategory, changeView, navigate } from '../../actions/boards';
import NavRibbon from '../../components/NavRibbon';
// Wimport BoardHeader from '../../components/BoardHeader';
import BoardRow from '../../components/BoardRow';
import players from './players.graphql';

// const rows = [
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

@connect(
  state => ({
    category: state.boards.category,
    view: state.boards.view,
    isNavigating: state.boards.isNavigating,
  }),
  {
    changeCategory,
    changeView,
    navigate,
  },
)
@graphql(players)
@withStyles(reactMDCSS)
class Boards extends React.Component {
  static propTypes = {
    changeCategory: PropTypes.func.isRequired,
    changeView: PropTypes.func.isRequired,
    data: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
      players: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          avatarURL: PropTypes.string.isRequired,
          nickname: PropTypes.string,
          tag: PropTypes.string.isRequired,
        }),
      ),
    }).isRequired,
    isNavigating: PropTypes.bool.isRequired,
    navigate: PropTypes.func.isRequired,
    // category: PropTypes.string.isRequired,
    view: PropTypes.string.isRequired,
  };

  componentDidMount() {
    require('webfontloader').load({ // eslint-disable-line
      google: {
        families: ['Roboto', 'Roboto Condensed', 'Material Icons'],
      },
    });
  }

  render() {
    const {
      // category,
      view,
      changeCategory,
      changeView,
      isNavigating,
      navigate,
    } = this.props;

    if (isNavigating) {
      return (
        <div>
          {view === 'root' &&
            <div>
              <NavRibbon
                title="Platform"
                onClick={() => {
                  changeView('platform');
                }}
                to="/boards/platform"
              />
              <NavRibbon
                title="Game"
                onClick={() => {
                  changeView('game');
                }}
                to="/boards/game"
              />
              <NavRibbon
                title="Gamemode"
                onClick={() => {
                  changeView('gamemode');
                }}
                to="/boards/gamemode"
              />
            </div>}
          {view === 'platform' &&
            <div>
              <NavRibbon
                goesBack
                onClick={() => {
                  changeView('root');
                }}
                to="/boards"
              />
              <NavRibbon
                title="N64"
                onClick={() => {
                  navigate(false);
                  changeCategory('N64');
                }}
                to="/boards/platform/n64"
              />
              <NavRibbon
                title="Gamecube"
                onClick={() => {
                  navigate(false);
                  changeCategory('Gamecube');
                }}
                to="/boards/platform/gc"
              />
              <NavRibbon
                title="Wii"
                onClick={() => {
                  navigate(false);
                  changeCategory('Wii');
                }}
                to="/boards/platform/wii"
              />
            </div>}
          {view === 'gamemode' &&
            <div>
              <NavRibbon
                goesBack
                onClick={() => {
                  changeView('root');
                }}
                to="/boards"
              />
              <NavRibbon
                title="Battle Royale"
                onClick={() => {
                  navigate(false);
                  changeCategory('Battle Royale');
                }}
                to="/boards/gamemode/br"
              />
              <NavRibbon
                title="Mini-Games"
                onClick={() => {
                  navigate(false);
                  changeCategory('Mini-Games');
                }}
                to="/boards/gamemode/mini"
              />
              <NavRibbon
                title="Duel"
                onClick={() => {
                  navigate(false);
                  changeCategory('Duel');
                }}
                to="/boards/gamemode/duel"
              />
              <NavRibbon
                title="Team Battle"
                onClick={() => {
                  navigate(false);
                  changeCategory('Team Battle');
                }}
                to="/boards/gamemode/tb"
              />
            </div>}
          {view === 'game' &&
            <div>
              <NavRibbon
                goesBack
                onClick={() => {
                  changeView('root');
                }}
                to="/boards"
              />
              <NavRibbon
                title="Mario Party 1"
                onClick={() => {
                  navigate(false);
                  changeCategory('Mario Party 1');
                }}
                to="/boards/game/mp1"
              />
              <NavRibbon
                title="Mario Party 2"
                onClick={() => {
                  navigate(false);
                  changeCategory('Mario Party 2');
                }}
                to="/boards/game/mp2"
              />
              <NavRibbon
                title="Mario Party 3"
                onClick={() => {
                  navigate(false);
                  changeCategory('Mario Party 3');
                }}
                to="/boards/game/mp3"
              />
              <NavRibbon
                title="Mario Party 4"
                onClick={() => {
                  navigate(false);
                  changeCategory('Mario Party 4');
                }}
                to="/boards/game/mp4"
              />
              <NavRibbon
                title="Mario Party 5"
                onClick={() => {
                  navigate(false);
                  changeCategory('Mario Party 5');
                }}
                to="/boards/game/mp5"
              />
              <NavRibbon
                title="Mario Party 6"
                onClick={() => {
                  navigate(false);
                  changeCategory('Mario Party 6');
                }}
                to="/boards/game/mp6"
              />
              <NavRibbon
                title="Mario Party 7"
                onClick={() => {
                  navigate(false);
                  changeCategory('Mario Party 7');
                }}
                to="/boards/game/mp7"
              />
              <NavRibbon
                title="Mario Party 8"
                onClick={() => {
                  navigate(false);
                  changeCategory('Mario Party 8');
                }}
                to="/boards/game/mp8"
              />
              <NavRibbon
                title="Mario Party 9"
                onClick={() => {
                  navigate(false);
                  changeCategory('Mario Party 9');
                }}
                to="/boards/game/mp9"
              />
            </div>}
        </div>
      );
    }
    return (
      <div style={{ backgroundColor: '#fbfbfb' }}>
        {this.props.data.players.map(player =>
          <BoardRow key={player.id} player={player} />,
        )}
        {/* rows.map(row => <BoardRow key={row.id} row={row} />) */}
      </div>
    );
  }
}

export default Boards;
