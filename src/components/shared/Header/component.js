import React from 'react';
import { PageHeader } from 'antd';

const Header = () => (
  <PageHeader
    title="Doggo Search"
    extra={[
      <a key="1" href="/">Search</a>,
      <a key="2" href="/">My Saved Dogs</a>
    ]}
  />
);

export default Header;
