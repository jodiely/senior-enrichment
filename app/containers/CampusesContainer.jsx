import Campuses from '../components/Campuses';
import { connect } from 'react-redux';



const mapStateToProps = (state) => {
  console.log('container state', state)
  return {
    campuses: state.campuses.list
  };
};

const CampusesContainer = connect(
  mapStateToProps
)(Campuses);

export default CampusesContainer;