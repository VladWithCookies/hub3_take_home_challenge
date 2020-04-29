import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

import BreedsSelect from '../../shared/BreedsSelect';

const BreedFilter = ({
  onChange,
  onSubmit,
  searchedBreeds,
}) => (
  <div className="breed-filter">
    <BreedsSelect
      onChange={onChange}
      value={searchedBreeds}
    />
    <Button
      size="large"
      type="primary"
      onClick={onSubmit}
    >
      Search
    </Button>
  </div>
);

BreedFilter.defaultProps = {
  searchedBreeds: [],
};

BreedFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  searchedBreeds: PropTypes.arrayOf(PropTypes.string),
};

export default BreedFilter;
