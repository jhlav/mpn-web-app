/* eslint-disable import/prefer-default-export */

import {
  SELECT_GAME,
  GET_BOARDS_FOR_SELECTED_GAME,
  SELECT_BOARD,
  SELECT_DATE,
  ENTRY_TOGGLE_CPU_PLAYER,
  ENTRY_SELECT_CHARACTER,
  GET_IMAGE_URI_FOR_SELECTED_CHARACTER,
  ENTRY_SET_STARS,
  ENTRY_SET_COINS,
  ENTRY_SET_MINIGAME_COINS,
} from '../constants';

export const selectGame = game => ({
  type: SELECT_GAME,
  payload: { game },
});

export const getBoardsForSelectedGame = game => ({
  type: GET_BOARDS_FOR_SELECTED_GAME,
  payload: { game },
});

export const selectBoard = board => ({
  type: SELECT_BOARD,
  payload: { board },
});

export const selectDate = date => ({
  type: SELECT_DATE,
  payload: { date },
});

export const entryToggleCpuPlayer = (entryId, isCPU) => ({
  type: ENTRY_TOGGLE_CPU_PLAYER,
  payload: { entryId, isCPU },
});

export const entrySelectCharacter = (entryId, character) => ({
  type: ENTRY_SELECT_CHARACTER,
  payload: { entryId, character },
});

export const getImageUriForSelectedCharacter = character => ({
  type: GET_IMAGE_URI_FOR_SELECTED_CHARACTER,
  payload: { character },
});

export const entrySetStars = (entryId, stars) => ({
  type: ENTRY_SET_STARS,
  payload: { entryId, stars },
});

export const entrySetCoins = (entryId, coins) => ({
  type: ENTRY_SET_COINS,
  payload: { entryId, coins },
});

export const entrySetMinigameCoins = (entryId, minigameCoins) => ({
  type: ENTRY_SET_MINIGAME_COINS,
  payload: { entryId, minigameCoins },
});
