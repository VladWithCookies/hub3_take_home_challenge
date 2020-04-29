import React from 'react';
import { Row, Col } from 'antd';
import { isEmpty } from 'lodash';
import PropTypes from 'prop-types';

import Header from '../shared/Header';
import List from './List';
import BreedFilter from './BreedFilter';
import SubBreedFilter from './SubBreedFilter';

const DoggoSearch = ({ searchedBreeds }) => (
  <>
    <Header />
    <Row>
      {!isEmpty(searchedBreeds) && (
        <Col span={6}>
          <SubBreedFilter />
        </Col>
      )}
      <Col span={isEmpty(searchedBreeds) ? 24 : 18}>
        <BreedFilter />
        <List />
      </Col>
    </Row>
  </>
);

DoggoSearch.defaultProps = {
  searchedBreeds: []
};

DoggoSearch.propTypes = {
  searchedBreeds: PropTypes.arrayOf(PropTypes.string),
};

export default DoggoSearch;
