import React from 'react';
import PropTypes from 'prop-types';
import Fuse from 'fuse.js';
import qs from 'query-string';
import flow from 'lodash/fp/flow';
import sortBy from 'lodash/fp/sortBy';
import groupBy from 'lodash/fp/groupBy';
import map from 'lodash/map';

import TermList from '../../components/TermList/TermList';

import terms from '../../terms.json';

import sharedCss from '../../shared.css';

const fuse = new Fuse(terms, {
  shouldSort: true,
  threshold: 0.2,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: ['name', 'definition'],
});

const formatResults = flow(sortBy('name'), groupBy('department'));

const Home = ({ match, location }) => {
  const { q: query } = qs.parse(location.search);
  const currentDepartment = match.params.department;
  const searchResults = query ? fuse.search(query) : terms;
  const results = formatResults(searchResults);

  return (
    <div className={ sharedCss.container }>
      { currentDepartment
        ? <TermList department={ currentDepartment } terms={ results[currentDepartment] } />
        : map(results, (groupedTerms, department) => (
          <TermList key={ department } department={ department } terms={ groupedTerms } />
      )) }
    </div>
  );
};


Home.propTypes = {
  match: PropTypes.shape({}),
  location: PropTypes.shape({}),
};

export default Home;
