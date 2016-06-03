import { connect } from 'react-redux'
import NoteName from '../components/note_name.jsx'

const mapStateToProps = (state) => {
  return {
    showNoteDetails: state.game.showNoteDetails,
    note: state.note.note
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteName);
