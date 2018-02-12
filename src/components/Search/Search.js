import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import IconInput from '@appearhere/bloom/components/Form/IconInput/IconInput';

import css from './Search.css';

class Search extends Component {
  static propTypes = {
    match: PropTypes.shape({}),
    location: PropTypes.shape({}),
    history: PropTypes.shape({}),
  };

  handleInputChange = (e) => {
    const { value } = e.target;

    this.updateURL(value);
  };

  checkLocation = () => {
    const { match, history } = this.props;

    if (match.params.department) history.push('/');
  };

  updateURL = (query) => {
    const { location, history } = this.props;

    if (query) {
      history.push(`${location.pathname}?q=${query}`);
    } else {
      history.push(`${location.pathname}`);
    }
  };

  render() {
    const { location } = this.props;
    const value = location.search.substr(3);

    return (
      // eslint-disable-next-line
      <div className={ css.root } onClick={ this.checkLocation }>
        <IconInput
          iconName="search"
          iconSide="right"
          type="search"
          classNames={ { root: css.inputRoot, input: css.input } }
          placeholder="Search..."
          onChange={ this.handleInputChange }
          value={ value }
        />
      </div>
    );
  }
}

export default withRouter(Search);
