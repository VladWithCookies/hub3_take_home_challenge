import React from 'react';
import { Col, Card } from 'antd';

const DogItem = () => (
  <Col
    span={8}
    className="dogs-list__item"
  >
    <Card
      cover={(
        <img
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          alt=""
        />
      )}
    >
      breed, sub-breed
    </Card>
  </Col>
);

export default DogItem;
