import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cx from 'classnames';

import cardCss from '@appearhere/bloom/components/Cards/Card/Card.css';
import css from './TermCard.css';

const TermCard = ({ name, department, linkTo, className }) => (
  <div className={ cx(css.root, cardCss.link, className) }>
    <Link to={ linkTo }>
      <div className={ css.name }>{ name }</div>
      <div className={ css.department }>{ department }</div>
    </Link>
  </div>
);

TermCard.propTypes = {
  name: PropTypes.string.isRequired,
  department: PropTypes.oneOf(['Supply', 'Concierge', 'Marketing', 'Service', 'Product']),
  linkTo: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default TermCard;
