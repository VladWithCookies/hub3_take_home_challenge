import React from 'react';
import { Menu } from 'antd';
import PropTypes from 'prop-types';
import { map, isEmpty } from 'lodash';

const SubBreedFilter = ({
  breeds,
  onReset,
  onFilter,
}) => (
  <Menu
    mode="inline"
    className="sub-breed-filter"
  >
    <Menu.Item
      key="all"
      onClick={onReset}
    >
      All
    </Menu.Item>
    {map(breeds, (value, key) => isEmpty(value) ? (
      <Menu.Item
        key={key}
        onClick={onFilter}
      >
        {key}
      </Menu.Item>
    ) : (
      <Menu.SubMenu
        key={key}
        title={key}
        onTitleClick={onFilter}
      >
        {value.map((subBreed) => (
          <Menu.Item
            onClick={onFilter}
            key={`${key}.${subBreed}`}
          >
            {subBreed}
          </Menu.Item>
        ))}
      </Menu.SubMenu>
    ))}
  </Menu>
);

SubBreedFilter.propTypes = {
  onReset: PropTypes.func.isRequired,
  onFilter: PropTypes.func.isRequired,
  breeds: PropTypes.shape().isRequired,
};

export default SubBreedFilter;
