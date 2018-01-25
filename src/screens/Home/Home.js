import React from 'react';
import PropTypes from 'prop-types';
import Fuse from 'fuse.js';
import qs from 'query-string';

import TermList from '../../components/TermList/TermList';

import terms from '../../terms';

import sharedCss from '../../shared.css';

const options = {
  shouldSort: true,
  threshold: 0.1,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: ['name', 'definition'],
};

const fuse = new Fuse(terms, options);

const Home = ({ match, location }) => {
  const { q: query } = qs.parse(location.search);
  const currentDepartment = match.params.department;
  const searchResults = query ? fuse.search(query) : terms;

  const filteredTerms = currentDepartment ? searchResults.filter(
    term => term.department === currentDepartment
  ) : searchResults;

  const sortedTerms = filteredTerms.sort((a, b) => {
    if (a.name < b.name) return -1;

    if (a.name > b.name) return 1;

    return 0;
  });

  return (
    <div className={ sharedCss.container }>
      <TermList terms={ sortedTerms } />
    </div>
  );
};


Home.propTypes = {
  match: PropTypes.shape({}),
  location: PropTypes.shape({}),
};

export default Home;
