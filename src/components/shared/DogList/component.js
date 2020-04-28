import React from 'react';
import { Row } from 'antd';

import DogItem from './DogItem';

const DogList = () => (
  <Row className="dogs-list">
    <DogItem />
    <DogItem />
    <DogItem />
    <DogItem />
  </Row>
);

export default DogList;
