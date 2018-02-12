import React from 'react';
import PropTypes from 'prop-types';

import TermCard from '../TermCard/TermCard';

import css from './TermList.css';

const TermList = ({ terms, highlight }) => (
  <section>
    <div className={ css.container }>
      { terms.map(term => (
        <TermCard
          key={ term.name }
          term={ term }
          highlight={ highlight }
          className={ css.item }
        />
      )) }
    </div>
  </section>
);

TermList.propTypes = {
  terms: PropTypes.arrayOf(PropTypes.shape({})),
  highlight: PropTypes.string,
};

TermList.defaultProps = {
  terms: [],
};

export default TermList;
