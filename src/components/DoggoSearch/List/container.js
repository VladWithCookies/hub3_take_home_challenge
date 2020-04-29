import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getDogs } from '../../../concepts/dogs/actions';
import DogsList from '../../shared/DogsList';

class List extends React.Component {
  static propTypes = {
    getDogs: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.getDogs();
  }

  render() {
    return (
      <DogsList {...this.props} />
    );
  }
}

const mapStateToProps = state => ({
  dogs: state.dogs.all,
});

const mapDispatchToProps = {
  getDogs,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
