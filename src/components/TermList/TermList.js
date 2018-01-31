import React from 'react';
import PropTypes from 'prop-types';

import TermCard from '../TermCard/TermCard';

import css from './TermList.css';

const TermList = ({ department, terms }) => (
  <section>
    <h2 className={ css.h2 }>{ department }</h2>
    <div className={ css.container }>
      { terms.map(term => (
        <TermCard
          key={ term.name }
          term={ term }
          className={ css.item }
        />
      )) }
    </div>
  </section>
);

TermList.propTypes = {
  department: PropTypes.string.isRequired,
  terms: PropTypes.arrayOf(PropTypes.shape({})),
};

TermList.defaultProps = {
  terms: [],
};

export default TermList;
