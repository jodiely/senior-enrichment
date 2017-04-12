import Student from '../components/Student';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
//     selectedArtist: state.artists.selected,
//     children: ownProps.children
  };
};

const StudentsContainer = connect(
  mapStateToProps
)(Student);

export default StudentsContainer;