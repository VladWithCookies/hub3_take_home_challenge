import React from 'react';
import { connect } from 'react-redux';

import {
  getDogs,
  getDogsByBreeds,
  setSearchedBreeds,
} from '../../../concepts/dogs/actions';
import BreedFilterComponent from './component';

class BreedFilter extends React.Component {
  handleChange = (value) => {
    this.props.setSearchedBreeds(value);
  }

  handleSubmit = () => {
    const { searchedBreeds } = this.props;

    if (searchedBreeds.length) {
      this.props.getDogsByBreeds();
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
  getDogsByBreeds,
  setSearchedBreeds,
};

export default connect(mapStateToProps, mapDispatchToProps)(BreedFilter);
