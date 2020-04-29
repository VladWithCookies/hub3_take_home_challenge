import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  getDogs,
  setFilter,
  filterDogs,
} from '../../../concepts/dogs/actions';
import BreedFilterComponent from './component';

class BreedFilter extends React.Component {
  static propTypes = {
    getDogs: PropTypes.func.isRequired,
    setFilter: PropTypes.func.isRequired,
    filterDogs: PropTypes.func.isRequired,
    searchedBreeds: PropTypes.arrayOf(PropTypes.string).isRequired
  }

  handleChange = (value) => {
    const breeds = value.slice(0, 5);

    this.props.setFilter(breeds);
  }

  handleSubmit = () => {
    const { searchedBreeds } = this.props;

    if (searchedBreeds.length) {
      this.props.filterDogs({ breeds: searchedBreeds });
    } else {
      this.props.getDogs();
    }
  }

  render() {
    return (
      <BreedFilterComponent
        {...this.props}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

const mapStateToProps = state => ({
  searchedBreeds: state.dogs.searchedBreeds,
});

const mapDispatchToProps = {
  getDogs,
  setFilter,
  filterDogs,
};

export default connect(mapStateToProps, mapDispatchToProps)(BreedFilter);
