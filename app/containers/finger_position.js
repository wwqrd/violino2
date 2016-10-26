import { connect } from 'react-redux';
import FingerPosition from '../components/finger_position.jsx';

const mapStateToProps = (state) => {
  return {
    showNoteDetails: state.game.showNoteDetails,
    note: state.note.note
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(FingerPosition);
