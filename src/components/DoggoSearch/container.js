import { connect } from 'react-redux';

import DoggoSearch from './component';

const mapStateToProps = state => ({
  searchedBreeds: state.dogs.searchedBreeds,
});

export default connect(mapStateToProps)(DoggoSearch);
