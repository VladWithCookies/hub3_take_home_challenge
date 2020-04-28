import React from 'react';
import { Menu } from 'antd';

const SubBreedFilter = () => (
  <Menu mode="inline">
    <Menu.Item key="1">
      Boxer
    </Menu.Item>
    <Menu.SubMenu title="Hound">
      <Menu.Item key="2">
        Afghan
      </Menu.Item>
    </Menu.SubMenu>
  </Menu>
);

export default SubBreedFilter;
