/* eslint-disable import/prefer-default-export, global-require */

import React from 'react';
import Avatar from 'react-md/lib/Avatars';

export const getBoards = game => {
  const list = ['Unknown'];
  switch (game) {
    case 'Mario Party 1':
      return list.concat([
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
      return list.concat([
        'Bowser Land',
        'Horror Land',
        'Mystery Land',
        'Pirate Land',
        'Space Land',
        'Western Land',
      ]);
    case 'Mario Party 3':
      return list.concat([
        'Chilly Waters',
        'Creepy Cavern',
        'Deep Blooper Sea',
        'Spiny Desert',
        "Waluigi's Island",
        'Woody Woods',
      ]);
    case 'Mario Party 4':
      return list.concat([
        "Boo's Haunted Bash",
        "Bowser's Gnarly Party",
        "Goomba's Greedy Gala",
        "Koopa's Seaside Soiree",
        "Shy Guy's Jungle Jam",
        "Toad's Midway Madness",
      ]);
    case 'Mario Party 5':
      return list.concat([
        'Bowser Nightmare',
        'Future Dream',
        'Pirate Dream',
        'Rainbow Dream',
        'Sweet Dream',
        'Toy Dream',
        'Undersea Dream',
      ]);
    case 'Mario Party 6':
      return list.concat([
        'Castaway Bay',
        'Clockwork Castle',
        "E. Gadd's Garage",
        'Faire Square',
        'Snowflake Lake',
        'Towering Treetop',
      ]);
    case 'Mario Party 7':
      return list.concat([
        "Bowser's Enchanted Inferno!",
        'Grand Canal',
        'Neon Heights',
        'Pagoda Peak',
        'Pyramid Park',
        'Windmillville',
      ]);
    case 'Mario Party 8':
      return list.concat([
        "Bowser's Warped Orbit",
        "DK's Treetop Temple",
        "Goomba's Booty Boardwalk",
        "King Boo's Haunted Hideaway",
        "Koopa's Tycoon Town",
        "Shy Guy's Perplex Express",
      ]);
    case 'Mario Party 9':
      return list.concat([
        'Blooper Beach',
        'Bob-omb Factory',
        "Boo's Horror Castle",
        'Bowser Station',
        "DK's Jungle Ruins",
        'Magma Mine',
        'Toad Road',
      ]);
    default:
      return list;
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
      return require('../components/_SharedAssets/mushroom.svg');
  }
};

const characterList = [
  {
    name: 'Birdo',
    leftAvatar: <Avatar src={getCharacterImage('Birdo')} />,
  },
  {
    name: 'Blooper',
    leftAvatar: <Avatar src={getCharacterImage('Blooper')} />,
  },
  {
    name: 'Boo',
    leftAvatar: <Avatar src={getCharacterImage('Boo')} />,
  },
  {
    name: 'Daisy',
    leftAvatar: <Avatar src={getCharacterImage('Daisy')} />,
  },
  {
    name: 'Donkey Kong',
    leftAvatar: <Avatar src={getCharacterImage('Donkey Kong')} />,
  },
  {
    name: 'Dry Bones',
    leftAvatar: <Avatar src={getCharacterImage('Dry Bones')} />,
  },
  {
    name: 'Hammer Bro',
    leftAvatar: <Avatar src={getCharacterImage('Hammer Bro')} />,
  },
  {
    name: 'Kamek',
    leftAvatar: <Avatar src={getCharacterImage('Kamek')} />,
  },
  {
    name: 'Koopa Kid',
    leftAvatar: <Avatar src={getCharacterImage('Koopa Kid')} />,
  },
  {
    name: 'Koopa Troopa',
    leftAvatar: <Avatar src={getCharacterImage('Koopa Troopa')} />,
  },
  {
    name: 'Luigi',
    leftAvatar: <Avatar src={getCharacterImage('Luigi')} />,
  },
  {
    name: 'Mario',
    leftAvatar: <Avatar src={getCharacterImage('Mario')} />,
  },
  {
    name: 'Peach',
    leftAvatar: <Avatar src={getCharacterImage('Peach')} />,
  },
  {
    name: 'Shy Guy',
    leftAvatar: <Avatar src={getCharacterImage('Shy Guy')} />,
  },
  {
    name: 'Toad',
    leftAvatar: <Avatar src={getCharacterImage('Toad')} />,
  },
  {
    name: 'Toadette',
    leftAvatar: <Avatar src={getCharacterImage('Toadette')} />,
  },
  {
    name: 'Waluigi',
    leftAvatar: <Avatar src={getCharacterImage('Waluigi')} />,
  },
  {
    name: 'Wario',
    leftAvatar: <Avatar src={getCharacterImage('Wario')} />,
  },
  {
    name: 'Yoshi',
    leftAvatar: <Avatar src={getCharacterImage('Yoshi')} />,
  },
];

export const getCharacters = game => {
  const list = [];
  switch (game) {
    case 'Mario Party 1':
      return list.concat([
        characterList[4],
        characterList[10],
        characterList[11],
        characterList[12],
        characterList[17],
        characterList[18],
      ]);
    case 'Mario Party 2':
      return list.concat([
        characterList[3],
        characterList[4],
        characterList[10],
        characterList[11],
        characterList[12],
        characterList[16],
        characterList[17],
        characterList[18],
      ]);
    case 'Mario Party 3':
      return list.concat([
        characterList[3],
        characterList[4],
        characterList[10],
        characterList[11],
        characterList[12],
        characterList[16],
        characterList[17],
        characterList[18],
      ]);
    case 'Mario Party 4':
      return list.concat([
        characterList[3],
        characterList[4],
        characterList[10],
        characterList[11],
        characterList[12],
        characterList[16],
        characterList[17],
        characterList[18],
      ]);
    case 'Mario Party 5':
      return list.concat([
        characterList[2],
        characterList[3],
        characterList[8],
        characterList[10],
        characterList[11],
        characterList[12],
        characterList[14],
        characterList[16],
        characterList[17],
        characterList[18],
      ]);
    case 'Mario Party 6':
      return list.concat([
        characterList[2],
        characterList[3],
        characterList[8],
        characterList[10],
        characterList[11],
        characterList[12],
        characterList[14],
        characterList[15],
        characterList[16],
        characterList[17],
        characterList[18],
      ]);
    case 'Mario Party 7':
      return list.concat([
        characterList[0],
        characterList[2],
        characterList[3],
        characterList[5],
        characterList[10],
        characterList[11],
        characterList[12],
        characterList[14],
        characterList[15],
        characterList[16],
        characterList[17],
        characterList[18],
      ]);
    case 'Mario Party 8':
      return list.concat([
        characterList[0],
        characterList[1],
        characterList[2],
        characterList[3],
        characterList[5],
        characterList[6],
        characterList[10],
        characterList[11],
        characterList[12],
        characterList[14],
        characterList[15],
        characterList[16],
        characterList[17],
        characterList[18],
      ]);
    case 'Mario Party 9':
      return list.concat([
        characterList[0],
        characterList[3],
        characterList[7],
        characterList[9],
        characterList[10],
        characterList[11],
        characterList[12],
        characterList[13],
        characterList[14],
        characterList[16],
        characterList[17],
        characterList[18],
      ]);
    default:
      return characterList;
  }
};
