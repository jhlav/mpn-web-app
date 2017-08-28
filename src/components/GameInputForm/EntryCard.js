/* eslint-disable global-require, import/no-dynamic-require */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import cn from 'classnames';

import Avatar from 'react-md/lib/Avatars';
import Autocomplete from 'react-md/lib/Autocompletes';
import FontIcon from 'react-md/lib/FontIcons';
import SelectField from 'react-md/lib/SelectFields';
import Switch from 'react-md/lib/SelectionControls/Switch';

import NumberInput from '../NumberInput';
import s from './EntryCard.css';

class EntryCard extends Component {
  static propTypes = {
    place: PropTypes.oneOf([PropTypes.number, PropTypes.string]).isRequired,
    players: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        avatarURL: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      isPlayerCPU: false,
    };
  }

  generatePlayerList = (players = this.props.players) => {
    const list = players.map(player => ({
      leftAvatar: <Avatar src={player.avatarURL} />,
      name: player.tag,
      playerId: player.id,
    }));

    return list;
  };

  render() {
    const { place } = this.props;
    const playerList = this.generatePlayerList();
    return (
      <div className={s.container}>
        <div className={s.playerAvatar}>
          <Avatar src={require('../BoardRow/discord-avatar-default.png')} />
        </div>
        <div className={s.cpuToggle}>
          <Switch
            id={`cpuToggle-${place}`}
            name={`cpuToggle-${place}`}
            label="CPU"
          />
        </div>
        <div className={s.placeIndex}>
          <FontIcon>
            {`filter_${place}`}
          </FontIcon>
        </div>
        <div className={s.playerSearch}>
          <Autocomplete
            className={cn(s.autocomplete)}
            id={`searchPeople-${place}`}
            placeholder="Search"
            data={playerList}
            dataLabel="name"
            fullWidth
          />
        </div>
        <div className={s.charAvatar}>
          <img alt="" src={require('../_SharedAssets/p_toad.png')} />
        </div>
        <div className={s.charSelect}>
          <SelectField
            id={`characters-${place}`}
            label="Character"
            placeholder="Select a character"
            menuItems={[
              {
                name: 'Birdo',
                leftAvatar: (
                  <Avatar src={require('../_SharedAssets/p_birdo.png')} />
                ),
              },
              {
                name: 'Blooper',
                leftAvatar: (
                  <Avatar src={require('../_SharedAssets/p_blooper.png')} />
                ),
              },
              {
                name: 'Boo',
                leftAvatar: (
                  <Avatar src={require('../_SharedAssets/p_boo.png')} />
                ),
              },
              {
                name: 'Daisy',
                leftAvatar: (
                  <Avatar src={require('../_SharedAssets/p_daisy.png')} />
                ),
              },
              {
                name: 'Donkey Kong',
                leftAvatar: (
                  <Avatar src={require('../_SharedAssets/p_donkeykong.png')} />
                ),
              },
              {
                name: 'Dry Bones',
                leftAvatar: (
                  <Avatar src={require('../_SharedAssets/p_drybones.png')} />
                ),
              },
              {
                name: 'Hammer Bro',
                leftAvatar: (
                  <Avatar src={require('../_SharedAssets/p_hammerbro.png')} />
                ),
              },
              {
                name: 'Kamek',
                leftAvatar: (
                  <Avatar src={require('../_SharedAssets/p_kamek.png')} />
                ),
              },
              {
                name: 'Koopa Kid',
                leftAvatar: (
                  <Avatar src={require('../_SharedAssets/p_koopakid.png')} />
                ),
              },
              {
                name: 'Koopa Troopa',
                leftAvatar: (
                  <Avatar src={require('../_SharedAssets/p_koopatroopa.png')} />
                ),
              },
              {
                name: 'Luigi',
                leftAvatar: (
                  <Avatar src={require('../_SharedAssets/p_luigi.png')} />
                ),
              },
              {
                name: 'Mario',
                leftAvatar: (
                  <Avatar src={require('../_SharedAssets/p_mario.png')} />
                ),
              },
              {
                name: 'Peach',
                leftAvatar: (
                  <Avatar src={require('../_SharedAssets/p_peach.png')} />
                ),
              },
              {
                name: 'Shy Guy',
                leftAvatar: (
                  <Avatar src={require('../_SharedAssets/p_shyguy.png')} />
                ),
              },
              {
                name: 'Toad',
                leftAvatar: (
                  <Avatar src={require('../_SharedAssets/p_toad.png')} />
                ),
              },
              {
                name: 'Toadette',
                leftAvatar: (
                  <Avatar src={require('../_SharedAssets/p_toadette.png')} />
                ),
              },
              {
                name: 'Waluigi',
                leftAvatar: (
                  <Avatar src={require('../_SharedAssets/p_waluigi.png')} />
                ),
              },
              {
                name: 'Wario',
                leftAvatar: (
                  <Avatar src={require('../_SharedAssets/p_wario.png')} />
                ),
              },
              {
                name: 'Yoshi',
                leftAvatar: (
                  <Avatar src={require('../_SharedAssets/p_yoshi.png')} />
                ),
              },
            ]}
            itemLabel="name"
            itemValue="name"
            helpOnFocus
            helpText="Select some character for me"
          />
        </div>
        <div className={s.starIcon}>
          <img alt="" src={require('../_SharedAssets/star.png')} />
        </div>
        <div className={s.starInput}>
          <NumberInput />
        </div>
        <div className={s.coinIcon}>
          <img alt="" src={require('../_SharedAssets/coin.png')} />
        </div>
        <div className={s.coinInput}>
          <NumberInput />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(EntryCard);
