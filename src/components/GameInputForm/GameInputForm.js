/* eslint-disable global-require */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import { connect } from 'react-redux';
import { withApollo } from 'react-apollo';

import Button from 'react-md/lib/Buttons';
import Card from 'react-md/lib/Cards/Card';
import CardActions from 'react-md/lib/Cards/CardActions';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import Divider from 'react-md/lib/Dividers';
import FontIcon from 'react-md/lib/FontIcons';
import SelectField from 'react-md/lib/SelectFields/SelectField';

import submitGame from './submitGame.graphql';
import EntryCard from './EntryCard';
import s from './GameInputForm.css';

import {
  selectGame,
  selectBoard,
  selectDate,
} from '../../actions/gameInputForm';

const intMP1 = require('../_SharedAssets/integerMP1.png');
const intMP2 = require('../_SharedAssets/integerMP2.png');
const intMP3 = require('../_SharedAssets/integerMP3.png');
const intMP4 = require('../_SharedAssets/integerMP4.png');
const intMP5 = require('../_SharedAssets/integerMP5.png');
const intMP6 = require('../_SharedAssets/integerMP6.png');
const intMP7 = require('../_SharedAssets/integerMP7.png');
const intMP8 = require('../_SharedAssets/integerMP8.png');
const intMP9 = require('../_SharedAssets/integerMP9.png');

@connect(
  // map state to props
  state => ({
    game: state.gameInputForm.game,
    board: state.gameInputForm.board,
    boardsAvailable: state.gameInputForm.boardsAvailable,
    date: state.gameInputForm.date,
    // TODO Figure out conundrum or redo entries implementation
    entries: state.gameInputForm.entries,
  }),
  // bind actions to props
  dispatch => ({
    selectGame: game => dispatch(selectGame(game)),
    selectBoard: board => dispatch(selectBoard(board)),
    selectDate: date => dispatch(selectDate(date)),
  }),
)
@withApollo
@withStyles(s)
class GameInputForm extends React.Component {
  static propTypes = {
    board: PropTypes.string.isRequired,
    boardsAvailable: PropTypes.arrayOf(PropTypes.String).isRequired,
    client: PropTypes.shape({
      mutate: PropTypes.func,
    }).isRequired,
    date: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string])
      .isRequired,
    entries: PropTypes.instanceOf(Map).isRequired,
    game: PropTypes.string.isRequired,
    players: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        avatarURL: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
      }),
    ).isRequired,
    selectBoard: PropTypes.func.isRequired,
    selectDate: PropTypes.func.isRequired,
    selectGame: PropTypes.func.isRequired,
  };

  submitForm = () => {
    const { board, client, date, game, entries } = this.props;
    let platform;
    if (/[1-3]$/.test(game)) {
      platform = 'N64';
    } else if (/[4-7]/.test(game)) {
      platform = 'Gamecube';
    } else if (/[8-9]/.test(game)) {
      platform = 'Wii';
    }
    const validatePlayers = () => {
      let isValid = true;
      entries.forEach(valueObj => {
        if (!(valueObj.player && valueObj.player.id.length >= 1)) {
          isValid = false;
        }
        return isValid;
      });
    };
    const validateCharacters = () => {
      let isValid = true;
      entries.forEach(valueObj => {
        if (!(valueObj.isCPU && valueObj.character.length < 1)) {
          isValid = false;
        }
        return isValid;
      });
    };
    const mappedEntries = [];
    entries.forEach((valueObj, key) => {
      mappedEntries[key - 1] = {
        place: parseInt(key, 10),
        character: valueObj.character,
        coins: parseInt(valueObj.coins, 10) || 0,
        minigameCoins: parseInt(valueObj.minigameCoins, 10) || 0,
        stars: parseInt(valueObj.stars, 10) || 0,
        playerId: valueObj.player.id,
      };
    });
    // Do we have all four entries?
    if (entries.size === 4) {
      if (validatePlayers && validateCharacters) {
        client.mutate({
          mutation: submitGame,
          variables: {
            input: {
              game,
              gamemode: 'Battle Royale',
              platform,
              board,
              date,
              entries: mappedEntries,
            },
          },
        });
      }
    }
  };

  render() {
    const { entries, players } = this.props;
    const data = [];
    const defaultEntry = {
      character: '',
      coins: '0',
      imageURI: require('../_SharedAssets/mushroom.svg'),
      isCPU: false,
      minigameCoins: '0',
      stars: '0',
    };
    if (entries instanceof Map) {
      data[0] = entries.has('1') ? entries.get('1') : defaultEntry;
      data[1] = entries.has('2') ? entries.get('2') : defaultEntry;
      data[2] = entries.has('3') ? entries.get('3') : defaultEntry;
      data[3] = entries.has('4') ? entries.get('4') : defaultEntry;
    } else {
      for (let i = 0; i < 4; i += 1) {
        data.push(defaultEntry);
      }
    }
    // TODO add active indication to buttons based on which game is selected
    return (
      <Card className={s.root}>
        <CardTitle title="Record a Game" />
        <div className={s.upperPortion}>
          <div className={s.gameButtons}>
            <Button
              icon
              iconEl={<img alt="" src={intMP1} />}
              onClick={() => this.props.selectGame('Mario Party 1')}
            />
            <Button
              icon
              iconEl={<img alt="" src={intMP2} />}
              onClick={() => this.props.selectGame('Mario Party 2')}
            />
            <Button
              icon
              iconEl={<img alt="" src={intMP3} />}
              onClick={() => this.props.selectGame('Mario Party 3')}
            />
            <Button
              icon
              iconEl={<img alt="" src={intMP4} />}
              onClick={() => this.props.selectGame('Mario Party 4')}
            />
            <Button
              icon
              iconEl={<img alt="" src={intMP5} />}
              onClick={() => this.props.selectGame('Mario Party 5')}
            />
            <Button
              icon
              iconEl={<img alt="" src={intMP6} />}
              onClick={() => this.props.selectGame('Mario Party 6')}
            />
            <Button
              icon
              iconEl={<img alt="" src={intMP7} />}
              onClick={() => this.props.selectGame('Mario Party 7')}
            />
            <Button
              icon
              iconEl={<img alt="" src={intMP8} />}
              onClick={() => this.props.selectGame('Mario Party 8')}
            />
            <Button
              icon
              iconEl={<img alt="" src={intMP9} />}
              onClick={() => this.props.selectGame('Mario Party 9')}
            />
          </div>
          <div className={s.gameInputs}>
            <SelectField
              defaultValue="Battle Royale"
              disabled
              helpOnFocus
              helpText="Select a gamemode"
              id="selectGamemode"
              label="Battle Royale"
              placeholder="Select a gamemode"
              value="Battle Royale"
            />
            <SelectField
              defaultValue={this.props.boardsAvailable[0]}
              helpOnFocus
              helpText="Select a board"
              id="selectBoard"
              itemLabel="name"
              itemValue="name"
              label="Board"
              menuItems={this.props.boardsAvailable}
              onChange={value => this.props.selectBoard(value)}
              placeholder="Select a board"
            />
            <DatePicker
              defaultValue={this.props.date}
              displayMode="portrait"
              id="selectDate"
              label="Select a date"
              onChange={value => this.props.selectDate(value)}
            />
          </div>
        </div>
        <Divider />
        <div className={s.entryCards}>
          <EntryCard place="1" players={players} {...data[0]} />
          <EntryCard place="2" players={players} {...data[1]} />
          <EntryCard place="3" players={players} {...data[2]} />
          <EntryCard place="4" players={players} {...data[3]} />
        </div>
        <CardActions centered className={s.cardActions}>
          <Button
            flat
            iconEl={<FontIcon>send</FontIcon>}
            onClick={this.submitForm}
            secondary
          >
            Submit
          </Button>
          <Button flat iconEl={<FontIcon>restore</FontIcon>} primary>
            Reset
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default GameInputForm;
