import React from 'react';
import { Row } from 'antd';
import PropTypes from 'prop-types';

import DogItem from './DogItem';

const DogsList = ({ dogs }) => (
  <Row className="dogs-list">
    {dogs.map(dog => (
      <DogItem
        key={dog.id}
        dog={dog}
      />
    ))}
  </Row>
);

DogsList.defaultProps = {
  dogs: [],
};

DogsList.propTypes = {
  dogs: PropTypes.arrayOf(PropTypes.shape()),
};

export default DogsList;
