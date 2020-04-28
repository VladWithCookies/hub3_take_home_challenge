import React from 'react';
import { Select, Button } from 'antd';

const BreedFilter = () => (
  <div className="breed-filter">
    <Select
      size="large"
      className="breed-filter__select"
    />
    <Button
      size="large"
      type="primary"
    >
      Search
    </Button>
  </div>
);

export default BreedFilter;
