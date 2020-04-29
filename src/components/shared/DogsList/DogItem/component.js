import React from 'react';
import { Col, Card } from 'antd';
import PropTypes from 'prop-types';

const DogItem = ({
  dog: {
    image,
    breed,
  }
}) => (
  <Col
    span={8}
    className="dogs-list__item"
  >
    <Card cover={<img src={image} className="dogs-list__item-image" alt="" />}>
      <Card.Meta title={breed} />
    </Card>
  </Col>
);

DogItem.propTypes = {
  dog: PropTypes.shape({
    image: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
  }).isRequired,
};

export default DogItem;
