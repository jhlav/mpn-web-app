/* eslint-disable import/prefer-default-export */

import { CHANGE_CATEGORY, CHANGE_VIEW, NAVIGATE } from '../constants';

export function changeCategory(category) {
  return {
    type: CHANGE_CATEGORY,
    payload: {
      category,
    },
  };
}

export function changeView(view) {
  return {
    type: CHANGE_VIEW,
    payload: {
      view,
    },
  };
}

export function navigate(isNavigating) {
  return {
    type: NAVIGATE,
    payload: {
      isNavigating,
    },
  };
}
