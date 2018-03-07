import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cx from 'classnames';

import cardCss from '@appearhere/bloom/components/Cards/Card/Card.css';

import Highlight from '../Highlight/Highlight';

import css from './TermCard.css';

const TermCard = ({ term, highlight, className }) => (
  <Link
    to={`/${term.department}/${term.name}`}
    className={cx(css.root, cardCss.link, className)}
  >
    <Highlight className={css.name} text={term.name} highlight={highlight} />
    <div className={css.department}>
      { term.department }
    </div>
  </Link>
);

TermCard.propTypes = {
  term: PropTypes.shape({}).isRequired,
  highlight: PropTypes.string,
  className: PropTypes.string,
};

export default TermCard;
