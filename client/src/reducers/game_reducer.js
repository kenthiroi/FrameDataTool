const actionTypes = {
  // Define your action types here
  GAME_CHANGE: 'GAME_CHANGE',
  CHARACTER_SLOT1_CHANGE: 'CHARACTER_SLOT1_CHANGE',
  CHARACTER_SLOT2_CHANGE: 'CHARACTER_SLOT2_CHANGE',
  SHOW_MODAL: 'SHOW_MODAL',
};

const gameReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.GAME_CHANGE:
      return {
        ...state,
        game: action.data
      }
    case actionTypes.CHARACTER_SLOT1_CHANGE:
      return {
        ...state,
        character1: action.data
      }
    case actionTypes.CHARACTER_SLOT2_CHANGE:
      return {
        ...state,
        character2: action.data
      }
    case actionTypes.SHOW_MODAL:
      return {
        ...state,
        modal: action.data
      }
      // Add more cases for other action types
      default:
        return state;
  }
};

export default gameReducer;
