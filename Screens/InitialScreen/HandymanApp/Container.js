import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { restoreSession } from '../../../Firebase/store/session/actions';

import HandymanAppComponent from './Component';

class HandymanAppContainer extends Component {
  componentDidMount() {
    this.props.restore();
  }

  render() {
    return (
      <HandymanAppComponent
        restoring={this.props.restoring}
        logged={this.props.logged} />
    );
  }
}

const mapStateToProps = state => ({
  restoring: state.session.restoring,
  logged: state.session.user != null
});

const mapDispatchToProps = {
  restore: restoreSession
};

HandymanAppContainer.propTypes = {
  restoring: PropTypes.bool.isRequired,
  logged: PropTypes.bool.isRequired,
  restore: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(HandymanAppContainer);
