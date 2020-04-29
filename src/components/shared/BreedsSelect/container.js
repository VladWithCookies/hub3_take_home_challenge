import React from 'react';
import { keys } from 'lodash';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getBreeds } from '../../../concepts/breeds/actions';
import BreedsSelectComponent from './component';

class BreedsSelect extends React.Component {
  static propTypes = {
    breeds: PropTypes.shape().isRequired,
    getBreeds: PropTypes.func.isRequired,
  }

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
