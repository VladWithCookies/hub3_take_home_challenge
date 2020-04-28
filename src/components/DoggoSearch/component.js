import React from 'react';
import { Row, Col } from 'antd';

import Header from '../shared/Header';
import DogsList from '../shared/DogList';
import BreedFilter from '../shared/BreedFilter';
import SubBreedFilter from '../shared/SubBreedFilter';

function DoggoSearch() {
  return (
    <>
      <Header />
      <Row>
        <Col span={6}>
          <SubBreedFilter />
        </Col>
        <Col span={18}>
          <BreedFilter />
          <DogsList />
        </Col>
      </Row>
    </>
  );
}

export default DoggoSearch;
