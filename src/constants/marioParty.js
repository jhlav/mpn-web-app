/* eslint-disable import/prefer-default-export */

export const getBoards = game => {
  switch (game) {
    case 'Mario Party 1':
      return [
        "Bowser's Magma Mountain",
        "DK's Jungle Adventure",
        'Eternal Star',
        "Luigi's Engine Room",
        "Mario's Rainbow Castle",
        "Peach's Birthday Cake",
        "Wario's Battle Canyon",
        "Yoshi's Tropical Island",
      ];
    case 'Mario Party 2':
      return [
        'Bowser Land',
        'Horror Land',
        'Mystery Land',
        'Pirate Land',
        'Space Land',
        'Western Land',
      ];
    case 'Mario Party 3':
      return [
        'Chilly Waters',
        'Creepy Cavern',
        'Deep Blooper Sea',
        'Spiny Desert',
        "Waluigi's Island",
        'Woody Woods',
      ];
    case 'Mario Party 4':
      return [
        "Boo's Haunted Bash",
        "Bowser's Gnarly Party",
        "Goomba's Greedy Gala",
        "Koopa's Seaside Soiree",
        "Shy Guy's Jungle Jam",
        "Toad's Midway Madness",
      ];
    case 'Mario Party 5':
      return [
        'Bowser Nightmare',
        'Future Dream',
        'Pirate Dream',
        'Rainbow Dream',
        'Sweet Dream',
        'Toy Dream',
        'Undersea Dream',
      ];
    case 'Mario Party 6':
      return [
        'Castaway Bay',
        'Clockwork Castle',
        "E. Gadd's Garage",
        'Faire Square',
        'Snowflake Lake',
        'Towering Treetop',
      ];
    case 'Mario Party 7':
      return [
        "Bowser's Enchanted Inferno!",
        'Grand Canal',
        'Neon Heights',
        'Pagoda Peak',
        'Pyramid Park',
        'Windmillville',
      ];
    case 'Mario Party 8':
      return [
        "Bowser's Warped Orbit",
        "DK's Treetop Temple",
        "Goomba's Booty Boardwalk",
        "King Boo's Haunted Hideaway",
        "Koopa's Tycoon Town",
        "Shy Guy's Perplex Express",
      ];
    case 'Mario Party 9':
      return [
        'Blooper Beach',
        'Bob-omb Factory',
        "Boo's Horror Castle",
        'Bowser Station',
        "DK's Jungle Ruins",
        'Magma Mine',
        'Toad Road',
      ];
    default:
      return ['Error Retrieving Boards'];
  }
};

export const getCharacterImage = character => {
  switch (character) {
    default:
      return ''; // TODO possibly path.resolve()-based logic
  }
};
