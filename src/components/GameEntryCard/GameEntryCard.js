/* eslint-disable global-require, import/no-dynamic-require */

import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import cn from 'classnames';

import Avatar from 'react-md/lib/Avatars';
import Autocomplete from 'react-md/lib/Autocompletes';
import FontIcon from 'react-md/lib/FontIcons';
import SelectField from 'react-md/lib/SelectFields';
import Switch from 'react-md/lib/SelectionControls/Switch';

import s from './GameEntryCard.css';

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

class GameEntryCard extends Component {
  render() {
    return (
      <div className={s.container}>
        <div className={s.playerAvatar}>
          <img alt="" src={require('../BoardRow/discord-avatar-default.png')} />
        </div>
        <div className={s.cpuToggle}>
          <Switch id="cpuToggle" name="cpuToggle" label="CPU" />
        </div>
        <div className={s.placeIndex}>
          <FontIcon>filter_1</FontIcon>
        </div>
        <div className={s.playerSearch}>
          <Autocomplete
            className={cn('md-cell md-cell--4', s.autocomplete)}
            id="searchPeople"
            placeholder="Search"
            data={[
              {
                name: 'Sly',
                leftAvatar: <Avatar src={require('../BoardRow/discord-avatar-default.png')} />,
              },
              {
                name: 'Slyearwerw',
                leftAvatar: <Avatar src={require('../BoardRow/discord-avatar-default.png')} />,
              },
              {
                name: 'Swag',
                leftAvatar: <Avatar src={require('../BoardRow/discord-avatar-default.png')} />,
              },
              {
                name: 'Jeffery 🐦🍃#4336',
                leftAvatar: <Avatar src={require('../BoardRow/discord-avatar-default.png')} />,
              },
            ]}
            dataLabel="name"
            fullWidth
          />
        </div>
        <div className={s.charAvatar}>
          <img alt="" src={require('./p_toad.png')} />
        </div>
        <div className={s.charSelect}>
          <SelectField
            id="characters"
            label="Character"
            placeholder="Select a character"
            menuItems={[
              { name: 'Birdo' },
              { name: 'Blooper' },
              { name: 'Boo' },
              { name: 'Daisy' },
              { name: 'Donkey Kong' },
              { name: 'Dry Bones' },
              { name: 'Hammer Bro' },
              { name: 'Kamek' },
              { name: 'Koopa Kid' },
              { name: 'Koopa Troopa' },
              { name: 'Luigi' },
              { name: 'Mario' },
              { name: 'Peach' },
              { name: 'Shy Guy' },
              { name: 'Toad' },
              { name: 'Toadette' },
              { name: 'Waluigi' },
              { name: 'Wario' },
              { name: 'Yoshi' },
            ]}
            itemLabel="name"
            itemValue="name"
            className="md-cell"
            helpOnFocus
            helpText="Select some character for me"
          />
        </div>
        <div className={s.starIcon}>
          <img alt="" src={require('./star.png')} />
        </div>
        <div className={s.starInput}>Input</div>
        <div className={s.coinIcon}>
          <img alt="" src={require('./coin.png')} />
        </div>
        <div className={s.coinInput}>Input</div>
      </div>
    );
  }
}

export default withStyles(s)(GameEntryCard);
