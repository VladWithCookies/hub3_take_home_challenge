import React from 'react';
import { keys } from 'lodash';
import { connect } from 'react-redux';

import { getBreeds } from '../../../concepts/breeds/actions';
import BreedsSelectComponent from './component';

class BreedsSelect extends React.Component {
  get options() {
    const { breeds } = this.props;

    return keys(breeds);
  }

  componentDidMount() {
    this.props.getBreeds();
  }

  render() {
    return (
      <BreedsSelectComponent
        {...this.props}
        options={this.options}
      />
    );
  }
}

const mapStateToProps = state => ({
  breeds: state.breeds,
});

const mapDispatchToProps = {
  getBreeds,
};

export default connect(mapStateToProps, mapDispatchToProps)(BreedsSelect);
