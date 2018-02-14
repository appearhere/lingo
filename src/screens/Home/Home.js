import React from 'react';
import PropTypes from 'prop-types';
import Fuse from 'fuse.js';
import qs from 'query-string';
import flow from 'lodash/fp/flow';
import sortBy from 'lodash/fp/sortBy';
import groupBy from 'lodash/fp/groupBy';
import cx from 'classnames';

import ValueIconNoBull from '@appearhere/bloom/components/ValueIcons/ValueIconNoBull';

import TermList from '../../components/TermList/TermList';

import terms from '../../terms.json';

import sharedCss from '../../shared.css';
import css from './Home.css';

const fuse = new Fuse(terms, {
  shouldSort: true,
  threshold: 0.2,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: ['name'],
});

const formatResults = flow(sortBy('name'), groupBy('department'));

const Home = ({ match, location }) => {
  const { q: query } = qs.parse(location.search);
  const currentDepartment = match.params.department;
  const searchResults = query ? fuse.search(query) : terms;
  const results = currentDepartment ? formatResults(searchResults) : searchResults;

  return (
    <div className={ cx(sharedCss.container, css.root) }>
      <h1 className={ css.welcome }> Here&#39;s the Lingo</h1>

      <p className={ css.strapline }>
        Lingo is here to help you understand the terms we all use.
      </p>

      { currentDepartment
        ? <TermList
          terms={ results[currentDepartment] }
          highlight={ query }
        />
        : <TermList
          terms={ results }
          highlight={ query }
        />
      }
      { query && !results.length &&
        <div className={ css.iconContainer }>
          We couldn&#39;t find what you were looking for.
          <ValueIconNoBull className={ css.icon } value="NoBull" />
        </div>
      }
    </div>
  );
};


Home.propTypes = {
  match: PropTypes.shape({}),
  location: PropTypes.shape({}),
};

export default Home;
