import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cx from 'classnames';

import Badge from '@appearhere/bloom/components/Badge/Badge';

import cardCss from '@appearhere/bloom/components/Cards/Card/Card.css';
import css from './TermCard.css';

const TermCard = ({ term, className }) => (
  <Link
    to={ `/${term.department}/${term.name}` }className={ cx(css.root, cardCss.link, className) }
  >
    <div className={ css.header }>
      <div className={ css.name }>{ term.name }</div>
      <Badge className={ css.badge }>{ term.department }</Badge>
    </div>
    <div className={ css.definition }>
      { term.definition }
    </div>
  </Link>
);

TermCard.propTypes = {
  term: PropTypes.shape({}).isRequired,
  className: PropTypes.string,
};

export default TermCard;
