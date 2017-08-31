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
import { getBoards, getCharacterImage } from '../constants/marioParty';

const initialState = {
  game: '',
  board: '',
  boardsAvailable: ['Unknown'],
  date: new Date(),
  entries: new Map(),
};

const mergeMaps = (oldMap, payload) => {
  const newMap = new Map();
  const { entryId, ...data } = payload;
  newMap.set(entryId, data);
  return new Map([...oldMap, ...newMap]);
};

export default function gameInputForm(state = initialState, action) {
  switch (action.type) {
    case SELECT_GAME:
      return {
        ...state,
        game: action.payload.game,
      };
    case GET_BOARDS_FOR_SELECTED_GAME:
      return {
        ...state,
        boardsAvailable: getBoards(action.payload.game),
      };
    case SELECT_BOARD:
      return {
        ...state,
        board: action.payload.board,
      };
    case SELECT_DATE:
      return {
        ...state,
        date: action.payload.date,
      };
    case ENTRY_TOGGLE_CPU_PLAYER:
      return {
        ...state,
        entries: mergeMaps(state.entries, {
          entryId: action.payload.entryId,
          isCPU: action.payload.isCPU,
        }),
      };
    case ENTRY_SELECT_CHARACTER:
      return {
        ...state,
        entries: mergeMaps(state.entries, {
          entryId: action.payload.entryId,
          character: action.payload.character,
        }),
      };
    case GET_IMAGE_URI_FOR_SELECTED_CHARACTER:
      return {
        ...state,
        entries: mergeMaps(state.entries, {
          entryId: action.payload.entryId,
          imageURI: getCharacterImage(action.payload.character),
        }),
      };
    case ENTRY_SET_STARS:
      return {
        ...state,
        entries: mergeMaps(state.entries, {
          entryId: action.payload.entryId,
          stars: action.payload.stars,
        }),
      };
    case ENTRY_SET_COINS:
      return {
        ...state,
        entries: mergeMaps(state.entries, {
          entryId: action.payload.entryId,
          coins: action.payload.coins,
        }),
      };
    case ENTRY_SET_MINIGAME_COINS:
      return {
        ...state,
        entries: mergeMaps(state.entries, {
          entryId: action.payload.entryId,
          minigameCoins: action.payload.minigameCoins,
        }),
      };
    default:
      return state;
  }
}
