import Student from '../components/Students';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    selectedStudent: state.students.selected,
    students: state.students.list
  };
};

const StudentsContainer = connect(
  mapStateToProps
)(Student);

export default StudentsContainer;