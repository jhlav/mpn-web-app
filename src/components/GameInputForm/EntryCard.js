/* eslint-disable global-require, import/no-dynamic-require */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import { connect } from 'react-redux';

import Avatar from 'react-md/lib/Avatars';
import Autocomplete from 'react-md/lib/Autocompletes';
import FontIcon from 'react-md/lib/FontIcons';
import SelectField from 'react-md/lib/SelectFields';
import Switch from 'react-md/lib/SelectionControls/Switch';

import { characterList } from '../../constants/marioParty';
import NumberInput from '../NumberInput';
import s from './EntryCard.css';

import {
  entrySelectPlayer as selectPlayer,
  entryToggleCpuPlayer as toggleCPU,
  entrySelectCharacter as selectCharacter,
  entrySetStars as setStars,
  entrySetCoins as setCoins,
  entrySetMinigameCoins as setMGCoins,
} from '../../actions/gameInputForm';

@connect(null, dispatch => ({
  toggleCPU: (entryId, isCPU) => dispatch(toggleCPU(entryId, isCPU)),
  selectCharacter: (entryId, character) =>
    dispatch(selectCharacter(entryId, character)),
  selectPlayer: (entryId, playerTag) =>
    dispatch(selectPlayer(entryId, playerTag)),
  setStars: (entryId, stars) => dispatch(setStars(entryId, stars)),
  setCoins: (entryId, coins) => dispatch(setCoins(entryId, coins)),
  setMGCoins: (entryId, mgCoins) => dispatch(setMGCoins(entryId, mgCoins)),
}))
class EntryCard extends Component {
  static defaultProps = {
    character: '',
    coins: '0',
    imageURI: require('../_SharedAssets/mushroom.svg'),
    isCPU: false,
    minigameCoins: '0',
    stars: '0',
  };

  static propTypes = {
    character: PropTypes.string,
    coins: PropTypes.string,
    imageURI: PropTypes.string,
    isCPU: PropTypes.bool,
    minigameCoins: PropTypes.string,
    place: PropTypes.string.isRequired,
    player: PropTypes.shape({
      id: PropTypes.string.isRequired,
      avatarURL: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
    }).isRequired,
    players: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        avatarURL: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
      }),
    ).isRequired,
    selectCharacter: PropTypes.func.isRequired,
    selectPlayer: PropTypes.func.isRequired,
    setCoins: PropTypes.func.isRequired,
    setMGCoins: PropTypes.func.isRequired,
    setStars: PropTypes.func.isRequired,
    stars: PropTypes.string,
    toggleCPU: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.props.toggleCPU(this.props.place, false);
  }

  findPlayer = tag => {
    const { place, players } = this.props;
    players.some(player => {
      if (player.tag === tag) {
        this.props.selectPlayer(place, player);
        return true;
      }
      return false;
    });
  };

  generatePlayerList = (players = this.props.players) => {
    const list = players.map(player => ({
      leftAvatar: (
        <Avatar alt={`Avatar for ${player.tag}`} src={player.avatarURL} />
      ),
      name: player.tag,
    }));

    return list;
  };

  toggleCPU = value => {
    const { place } = this.props;
    this.props.toggleCPU(place, value);
    this.props.selectCharacter(place, '');
  };

  render() {
    const {
      character,
      coins,
      imageURI,
      isCPU,
      minigameCoins,
      place,
      player,
      stars,
    } = this.props;
    const playerList = this.generatePlayerList();
    let playerAvatar;
    if (player && player.avatarURL) {
      playerAvatar = player.avatarURL;
    } else {
      playerAvatar = require('../BoardRow/discord-avatar-default.png');
    }
    return (
      <div className={s.container}>
        <div className={s.playerAvatar}>
          <Avatar alt="Player avatar" src={playerAvatar} />
        </div>
        <div className={s.cpuToggle}>
          <Switch
            id={`cpuToggle-${place}`}
            name={`cpuToggle-${place}`}
            label="CPU"
            onChange={this.toggleCPU}
          />
        </div>
        <div className={s.placeIndex}>
          <FontIcon>
            {`filter_${place}`}
          </FontIcon>
        </div>
        <div className={s.playerSearch}>
          <Autocomplete
            data={playerList}
            dataLabel="name"
            disabled={isCPU}
            focusInputOnAutocomplete={false}
            fullWidth
            id={`searchPeople-${place}`}
            onAutocomplete={tag => this.findPlayer(tag)}
            placeholder="Search by Discord tag"
          />
        </div>
        <div className={s.charAvatar}>
          <img
            alt=""
            src={imageURI || require('../_SharedAssets/mushroom.svg')}
          />
        </div>
        <div className={s.charSelect}>
          <SelectField
            disabled={isCPU}
            id={`characters-${place}`}
            itemLabel="name"
            itemValue="name"
            label="Character"
            menuItems={characterList}
            onChange={value => this.props.selectCharacter(place, value)}
            placeholder="Select a character"
            value={character}
          />
        </div>
        <div className={s.coinIcon}>
          <img alt="" src={require('../_SharedAssets/coin.png')} />
        </div>
        <div className={s.coinInput}>
          <NumberInput
            label="Coins"
            onChange={value => this.props.setCoins(place, value)}
            value={coins}
          />
        </div>
        <div className={s.mgCoinIcon}>
          <img
            alt="Minigame Coin Icon"
            src={require('../_SharedAssets/coin.png')}
          />
        </div>
        <div className={s.mgCoinInput}>
          <NumberInput
            label="MG Coins"
            onChange={value => this.props.setMGCoins(place, value)}
            value={minigameCoins}
          />
        </div>
        <div className={s.starIcon}>
          <img alt="" src={require('../_SharedAssets/star.png')} />
        </div>
        <div className={s.starInput}>
          <NumberInput
            label="Stars"
            onChange={value => this.props.setStars(place, value)}
            value={stars}
          />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(EntryCard);
