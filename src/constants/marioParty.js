/* eslint-disable import/prefer-default-export, global-require */

import React from 'react';
import Avatar from 'react-md/lib/Avatars';

export const getBoards = game => {
  switch (game) {
    case 'Mario Party 1':
      return ['Unknown'].concat([
        "Bowser's Magma Mountain",
        "DK's Jungle Adventure",
        'Eternal Star',
        "Luigi's Engine Room",
        "Mario's Rainbow Castle",
        "Peach's Birthday Cake",
        "Wario's Battle Canyon",
        "Yoshi's Tropical Island",
      ]);
    case 'Mario Party 2':
      return ['Unknown'].concat([
        'Bowser Land',
        'Horror Land',
        'Mystery Land',
        'Pirate Land',
        'Space Land',
        'Western Land',
      ]);
    case 'Mario Party 3':
      return ['Unknown'].concat([
        'Chilly Waters',
        'Creepy Cavern',
        'Deep Blooper Sea',
        'Spiny Desert',
        "Waluigi's Island",
        'Woody Woods',
      ]);
    case 'Mario Party 4':
      return ['Unknown'].concat([
        "Boo's Haunted Bash",
        "Bowser's Gnarly Party",
        "Goomba's Greedy Gala",
        "Koopa's Seaside Soiree",
        "Shy Guy's Jungle Jam",
        "Toad's Midway Madness",
      ]);
    case 'Mario Party 5':
      return ['Unknown'].concat([
        'Bowser Nightmare',
        'Future Dream',
        'Pirate Dream',
        'Rainbow Dream',
        'Sweet Dream',
        'Toy Dream',
        'Undersea Dream',
      ]);
    case 'Mario Party 6':
      return ['Unknown'].concat([
        'Castaway Bay',
        'Clockwork Castle',
        "E. Gadd's Garage",
        'Faire Square',
        'Snowflake Lake',
        'Towering Treetop',
      ]);
    case 'Mario Party 7':
      return ['Unknown'].concat([
        "Bowser's Enchanted Inferno!",
        'Grand Canal',
        'Neon Heights',
        'Pagoda Peak',
        'Pyramid Park',
        'Windmillville',
      ]);
    case 'Mario Party 8':
      return ['Unknown'].concat([
        "Bowser's Warped Orbit",
        "DK's Treetop Temple",
        "Goomba's Booty Boardwalk",
        "King Boo's Haunted Hideaway",
        "Koopa's Tycoon Town",
        "Shy Guy's Perplex Express",
      ]);
    case 'Mario Party 9':
      return ['Unknown'].concat([
        'Blooper Beach',
        'Bob-omb Factory',
        "Boo's Horror Castle",
        'Bowser Station',
        "DK's Jungle Ruins",
        'Magma Mine',
        'Toad Road',
      ]);
    default:
      return ['Unknown'];
  }
};

export const getCharacterImage = character => {
  switch (character) {
    case 'Birdo':
      return require('../components/_SharedAssets/p_birdo.png');
    case 'Blooper':
      return require('../components/_SharedAssets/p_blooper.png');
    case 'Boo':
      return require('../components/_SharedAssets/p_boo.png');
    case 'Daisy':
      return require('../components/_SharedAssets/p_daisy.png');
    case 'Donkey Kong':
      return require('../components/_SharedAssets/p_donkeykong.png');
    case 'Dry Bones':
      return require('../components/_SharedAssets/p_drybones.png');
    case 'Hammer Bro':
      return require('../components/_SharedAssets/p_hammerbro.png');
    case 'Kamek':
      return require('../components/_SharedAssets/p_kamek.png');
    case 'Koopa Kid':
      return require('../components/_SharedAssets/p_koopakid.png');
    case 'Koopa Troopa':
      return require('../components/_SharedAssets/p_koopatroopa.png');
    case 'Luigi':
      return require('../components/_SharedAssets/p_luigi.png');
    case 'Mario':
      return require('../components/_SharedAssets/p_mario.png');
    case 'Peach':
      return require('../components/_SharedAssets/p_peach.png');
    case 'Shy Guy':
      return require('../components/_SharedAssets/p_shyguy.png');
    case 'Toad':
      return require('../components/_SharedAssets/p_toad.png');
    case 'Toadette':
      return require('../components/_SharedAssets/p_toadette.png');
    case 'Waluigi':
      return require('../components/_SharedAssets/p_waluigi.png');
    case 'Wario':
      return require('../components/_SharedAssets/p_wario.png');
    case 'Yoshi':
      return require('../components/_SharedAssets/p_yoshi.png');
    default:
      return require('../components/_SharedAssets/mushroom.svg'); // TODO possibly path.resolve()-based logic
  }
};

export const characterList = [
  {
    name: 'Birdo',
    leftAvatar: (
      <Avatar src={require('../components/_SharedAssets/p_birdo.png')} />
    ),
  },
  {
    name: 'Blooper',
    leftAvatar: (
      <Avatar src={require('../components/_SharedAssets/p_blooper.png')} />
    ),
  },
  {
    name: 'Boo',
    leftAvatar: (
      <Avatar src={require('../components/_SharedAssets/p_boo.png')} />
    ),
  },
  {
    name: 'Daisy',
    leftAvatar: (
      <Avatar src={require('../components/_SharedAssets/p_daisy.png')} />
    ),
  },
  {
    name: 'Donkey Kong',
    leftAvatar: (
      <Avatar src={require('../components/_SharedAssets/p_donkeykong.png')} />
    ),
  },
  {
    name: 'Dry Bones',
    leftAvatar: (
      <Avatar src={require('../components/_SharedAssets/p_drybones.png')} />
    ),
  },
  {
    name: 'Hammer Bro',
    leftAvatar: (
      <Avatar src={require('../components/_SharedAssets/p_hammerbro.png')} />
    ),
  },
  {
    name: 'Kamek',
    leftAvatar: (
      <Avatar src={require('../components/_SharedAssets/p_kamek.png')} />
    ),
  },
  {
    name: 'Koopa Kid',
    leftAvatar: (
      <Avatar src={require('../components/_SharedAssets/p_koopakid.png')} />
    ),
  },
  {
    name: 'Koopa Troopa',
    leftAvatar: (
      <Avatar src={require('../components/_SharedAssets/p_koopatroopa.png')} />
    ),
  },
  {
    name: 'Luigi',
    leftAvatar: (
      <Avatar src={require('../components/_SharedAssets/p_luigi.png')} />
    ),
  },
  {
    name: 'Mario',
    leftAvatar: (
      <Avatar src={require('../components/_SharedAssets/p_mario.png')} />
    ),
  },
  {
    name: 'Peach',
    leftAvatar: (
      <Avatar src={require('../components/_SharedAssets/p_peach.png')} />
    ),
  },
  {
    name: 'Shy Guy',
    leftAvatar: (
      <Avatar src={require('../components/_SharedAssets/p_shyguy.png')} />
    ),
  },
  {
    name: 'Toad',
    leftAvatar: (
      <Avatar src={require('../components/_SharedAssets/p_toad.png')} />
    ),
  },
  {
    name: 'Toadette',
    leftAvatar: (
      <Avatar src={require('../components/_SharedAssets/p_toadette.png')} />
    ),
  },
  {
    name: 'Waluigi',
    leftAvatar: (
      <Avatar src={require('../components/_SharedAssets/p_waluigi.png')} />
    ),
  },
  {
    name: 'Wario',
    leftAvatar: (
      <Avatar src={require('../components/_SharedAssets/p_wario.png')} />
    ),
  },
  {
    name: 'Yoshi',
    leftAvatar: (
      <Avatar src={require('../components/_SharedAssets/p_yoshi.png')} />
    ),
  },
];
