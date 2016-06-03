import { connect } from 'react-redux'
import MusicalScore from '../components/musical_score.jsx'

const mapStateToProps = (state) => {
  return {
    note: state.note.note
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MusicalScore);
