import React from 'react';

import TermCard from '../TermCard/TermCard';

import terms from './terms';

import css from './TermList.css';

const TermList = () => (
  <div>
    { terms.map(term => (
      <TermCard
        key={ term.name }
        name={ term.name }
        department={ term.department }
        linkTo={ `/${term.name}` }
        className={ css.item }
      />
    )) }
  </div>
);

export default TermList;
