import { connect } from 'react-redux';
import MusicalScore from '../components/musical_score.jsx';

const mapStateToProps = (state) => {
  return {
    showNoteDetails: state.game.showNoteDetails,
    note: state.note.note
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MusicalScore);
