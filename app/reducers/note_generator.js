const NoteGenerator = (state, action) => {
  switch(action.type) {
    case 'GENERATE_NOTE':
      return {
        currentNote: 'C3'
      }
    case 'START_NOTE_GENERATOR':
    case 'STOP_NOTE_GENERATOR':
      return state;
  }
}
