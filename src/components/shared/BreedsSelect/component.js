import React from 'react';
import { Select } from 'antd';
import PropTypes from 'prop-types';

const BreedsSelect = ({ onChange, value, options }) => (
  <Select
    size="large"
    mode="multiple"
    value={value}
    onChange={onChange}
    className="breed-filter__select"
  >
    {options.map(option => (
      <Select.Option key={option}>
        {option}
      </Select.Option>
    ))}
  </Select>
);

BreedsSelect.defaultProps = {
  value: [],
  options: [],
};

BreedsSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.arrayOf(PropTypes.string),
  options: PropTypes.arrayOf(PropTypes.string),
};

export default BreedsSelect;
