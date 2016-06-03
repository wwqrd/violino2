const initialState = {showNoteDetails: false};

const game = (state = initialState, action) => {
  switch(action.type) {
    case 'HIDE_NOTE_DETAILS':
      return {
        ...state,
        showNoteDetails: false
      };
    case 'REVEAL_NOTE_DETAILS':
      return {
        ...state,
        showNoteDetails: true
      };
  }

  return state;
};

export default game;
