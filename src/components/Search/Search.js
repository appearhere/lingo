import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import IconInput from '@appearhere/bloom/components/Form/IconInput/IconInput';

import css from './Search.css';

import logo from './logo.svg';

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

    if (match.params.department && match.params.term) history.push('/');
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
        <Link to="/" className={ css.logoContainer }>
          <img src={ logo } className={ css.logo } alt="logo" />
          <div className={ css.logoText }>Lingo</div>
        </Link>
        <IconInput
          iconName="search"
          classNames={ { root: css.inputRoot, input: css.input } }
          placeholder="Search for a term"
          onChange={ this.handleInputChange }
          value={ value }
        />
      </div>
    );
  }
}

export default Search;
