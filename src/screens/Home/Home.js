import React from 'react';
import PropTypes from 'prop-types';
import Fuse from 'fuse.js';
import qs from 'query-string';

import TermList from '../../components/TermList/TermList';

import terms from '../../terms';

const options = {
  shouldSort: true,
  threshold: 0.0,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: ['name'],
};

const fuse = new Fuse(terms, options);

const Home = ({ match, location }) => {
  const { q: query } = qs.parse(location.search);
  const currentDepartment = match.params.department;

  const searchResults = query ? fuse.search(query) : terms;
  const filteredTerms = currentDepartment ? searchResults.filter(
    term => term.department === currentDepartment
  ) : searchResults;

  return <TermList terms={ filteredTerms } />;
};


Home.propTypes = {
  match: PropTypes.shape({}),
  location: PropTypes.shape({}),
};

export default Home;
