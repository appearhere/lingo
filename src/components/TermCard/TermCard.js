import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cx from 'classnames';

import cardCss from '@appearhere/bloom/components/Cards/Card/Card.css';
import css from './TermCard.css';

const TermCard = ({ term, className }) => (
  <div className={ cx(css.root, cardCss.link, className) }>
    <Link to={ `/${term.department}/${term.name}` }>
      <div className={ css.name }>{ term.name }</div>
      <div className={ css.department }>{ term.department }</div>
    </Link>
  </div>
);

TermCard.propTypes = {
  term: PropTypes.shape({}).isRequired,
  className: PropTypes.string,
};

export default TermCard;
