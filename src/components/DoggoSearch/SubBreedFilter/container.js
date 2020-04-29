import React from 'react';
import { pick } from 'lodash';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { resetFilter, setFilter, filterDogs } from '../../../concepts/dogs/actions';
import SubBreedFilterComponent from './component';

class SubBreedFilter extends React.Component {
  static defaultProps = {
    breeds: {},
  }

  static propTypes = {
    breeds: PropTypes.shape(),
    onReset: PropTypes.func.isRequired,
    setFilter: PropTypes.func.isRequired,
    filterDogs: PropTypes.func.isRequired,
    searchedBreeds: PropTypes.arrayOf(PropTypes.string).isRequired,
  }

  get breeds() {
    const { searchedBreeds, breeds } = this.props;

    return pick(breeds, searchedBreeds);
  }

  handleFilter = ({ key }) => {
    const [breed, subBreed] = key.split('.');

    this.props.filterDogs({
      breeds: [breed],
      subBreed,
    });
  }

  render() {
    return (
      <SubBreedFilterComponent
        {...this.props}
        breeds={this.breeds}
        onFilter={this.handleFilter}
      />
    );
  }
}

const mapStateToProps = state => ({
  breeds: state.breeds,
  searchedBreeds: state.dogs.searchedBreeds,
});

const mapDispatchToProps = {
  filterDogs,
  setFilter,
  onReset: resetFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(SubBreedFilter);
