// reducers/rootReducer.js

// Define your initial state
const initialState = {
  // Define your initial state properties here
  game: 'SF6',
  character1: 'Ryu',
  character2: 'Ken',
  modal: null,
};

// Define action types (constants)
export const actionTypes = {
  // Define your action types here
  GAME_CHANGE: 'GAME_CHANGE',
  CHARACTER_SLOT1_CHANGE: 'CHARACTER_SLOT1_CHANGE',
  CHARACTER_SLOT2_CHANGE: 'CHARACTER_SLOT2_CHANGE',
  SHOW_MODAL: 'SHOW_MODAL',
};

// Create your reducer function
const rootReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.GAME_CHANGE:
      return {
        ...state,
        game: action.data
      }
      break;
    case actionTypes.CHARACTER_SLOT1_CHANGE:
      return {
        ...state,
        character1: action.data
      }
      break;
    case actionTypes.CHARACTER_SLOT2_CHANGE:
      return {
        ...state,
        character2: action.data
      }
      break;
    case actionTypes.SHOW_MODAL:
      return {
        ...state,
        modal: action.data
      }
      break;
    // Add more cases for other action types

    default:
      return state;
  }
};

export default rootReducer;
