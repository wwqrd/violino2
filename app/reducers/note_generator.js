const noteGenerator = (state = {}, action) => {
  switch(action.type) {
    case 'GENERATE_NOTE':
      return {
        ...state,
        currentNote: 'C3'
      };
    case 'START_NOTE_GENERATOR':
    case 'STOP_NOTE_GENERATOR':
    default:
      return state;
  }
};

export default noteGenerator;
