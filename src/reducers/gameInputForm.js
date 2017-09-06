import {
  SELECT_GAME,
  GET_BOARDS_FOR_SELECTED_GAME,
  SELECT_BOARD,
  SELECT_DATE,
  ENTRY_SELECT_PLAYER,
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
  const { entryId, ...payloadData } = payload;
  let oldData = {};
  // Preserve the deeper values of the old Map
  if (oldMap instanceof Map && oldMap.has(entryId)) {
    oldData = oldMap.get(entryId);
  }
  const newMap = new Map();
  newMap.set(entryId, { ...oldData, ...payloadData });
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
    case ENTRY_SELECT_PLAYER:
      return {
        ...state,
        entries: mergeMaps(state.entries, {
          entryId: action.payload.entryId,
          player: action.payload.player,
        }),
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
