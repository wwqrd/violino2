import { connect } from 'react-redux'
import FingerPosition from '../components/finger_position.jsx'

const mapStateToProps = (state) => {
  return {
    note: state.note.note
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FingerPosition);
