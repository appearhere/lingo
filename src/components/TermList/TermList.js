import React from 'react';
import PropTypes from 'prop-types';

import TermCard from '../TermCard/TermCard';

import css from './TermList.css';

const TermList = ({ currentDepartment, terms }) => (
  <div>
    { terms.map(term => (
      <TermCard
        key={ term.name }
        name={ term.name }
        department={ currentDepartment !== term.department && term.department }
        linkTo={ `/${term.department}/${term.name}` }
        className={ css.item }
      />
    )) }
  </div>
);

TermList.propTypes = {
  currentDepartment: PropTypes.string,
  terms: PropTypes.arrayOf(PropTypes.shape({})),
};

TermList.defaultProps = {
  terms: [],
};

export default TermList;
