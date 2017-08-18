import { CHANGE_CATEGORY, CHANGE_VIEW, NAVIGATE } from '../constants';

const initialState = { category: 'Category', view: 'root', isNavigating: true };

export default function boards(state = initialState, action) {
  switch (action.type) {
    case CHANGE_CATEGORY:
      return {
        ...state,
        category: action.payload.category,
      };
    case CHANGE_VIEW:
      return {
        ...state,
        view: action.payload.view,
      };
    case NAVIGATE:
      return {
        ...state,
        isNavigating: action.payload.isNavigating,
      };
    default:
      return state;
  }
}
