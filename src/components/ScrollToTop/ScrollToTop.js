// eslint-disable-next-line
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

class ScrollToTop extends Component {
  static propTypes = {
    location: PropTypes.shape({ }),
    children: PropTypes.node,
  };

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
