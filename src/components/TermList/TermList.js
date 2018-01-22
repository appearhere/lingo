import React from 'react';
import PropTypes from 'prop-types';

import TermCard from '../TermCard/TermCard';

import css from './TermList.css';

const TermList = ({ terms }) => (
  <div className={ css.root }>
    { terms.map(term => (
      <TermCard
        key={ term.name }
        term={ term }
        className={ css.item }
      />
    )) }
  </div>
);

TermList.propTypes = {
  terms: PropTypes.arrayOf(PropTypes.shape({})),
};

TermList.defaultProps = {
  terms: [],
};

export default TermList;
