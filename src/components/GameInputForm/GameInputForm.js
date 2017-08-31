/* eslint-disable global-require */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import Button from 'react-md/lib/Buttons';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import Divider from 'react-md/lib/Dividers';
import SelectField from 'react-md/lib/SelectFields/SelectField';

import { connect } from 'react-redux';
import EntryCard from './EntryCard';
import s from './GameInputForm.css';

import {
  selectGame,
  selectBoard,
  selectDate,
  entryToggleCpuPlayer as toggleCPU,
  entrySelectCharacter as selectCharacter,
  entrySetStars as setStars,
  entrySetCoins as setCoins,
  entrySetMinigameCoins as setMGCoins,
} from '../../actions/gameInputForm';

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
    toggleCPU: (entryId, isCPU) => dispatch(toggleCPU(entryId, isCPU)),
    selectCharacter: (entryId, character) =>
      dispatch(selectCharacter(entryId, character)),
    setStars: (entryId, stars) => dispatch(setStars(entryId, stars)),
    setCoins: (entryId, coins) => dispatch(setCoins(entryId, coins)),
    setMGCoins: (entryId, mgCoins) => dispatch(setMGCoins(entryId, mgCoins)),
  }),
)
@withStyles(s)
class GameInputForm extends React.Component {
  static propTypes = {
    // board: PropTypes.string.isRequired,
    boardsAvailable: PropTypes.arrayOf(PropTypes.String).isRequired,
    date: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string])
      .isRequired,
    // game: PropTypes.string.isRequired,
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

  render() {
    const { players } = this.props;
    return (
      <Card className={s.root}>
        <CardTitle title="Record a Game" />
        <div className={s.upperPortion}>
          <div className={s.gameButtons}>
            <Button icon onClick={() => this.props.selectGame('Mario Party 1')}>
              <img alt="" src={require('../_SharedAssets/integerMP1.png')} />
            </Button>
            <Button icon onClick={() => this.props.selectGame('Mario Party 2')}>
              <img alt="" src={require('../_SharedAssets/integerMP2.png')} />
            </Button>
            <Button icon onClick={() => this.props.selectGame('Mario Party 3')}>
              <img alt="" src={require('../_SharedAssets/integerMP3.png')} />
            </Button>
            <Button icon onClick={() => this.props.selectGame('Mario Party 4')}>
              <img alt="" src={require('../_SharedAssets/integerMP4.png')} />
            </Button>
            <Button icon onClick={() => this.props.selectGame('Mario Party 5')}>
              <img alt="" src={require('../_SharedAssets/integerMP5.png')} />
            </Button>
            <Button icon onClick={() => this.props.selectGame('Mario Party 6')}>
              <img alt="" src={require('../_SharedAssets/integerMP6.png')} />
            </Button>
            <Button icon onClick={() => this.props.selectGame('Mario Party 7')}>
              <img alt="" src={require('../_SharedAssets/integerMP7.png')} />
            </Button>
            <Button icon onClick={() => this.props.selectGame('Mario Party 8')}>
              <img alt="" src={require('../_SharedAssets/integerMP8.png')} />
            </Button>
            <Button icon onClick={() => this.props.selectGame('Mario Party 9')}>
              <img alt="" src={require('../_SharedAssets/integerMP9.png')} />
            </Button>
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
          <EntryCard place="1" players={players} />
          <EntryCard place="2" players={players} />
          <EntryCard place="3" players={players} />
          <EntryCard place="4" players={players} />
        </div>
      </Card>
    );
  }
}

export default GameInputForm;
