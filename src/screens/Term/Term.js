import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Badge from '@appearhere/bloom/components/Badge/Badge';

import terms from '../../terms.json';

import sharedCss from '../../shared.css';
import css from './Term.css';

const Term = ({ match }) => {
  const term = terms.find(
    t => (t.name === match.params.term) && (t.department === match.params.department)
  );

  return (
    <div className={ cx(sharedCss.container, css.root) }>
      <div className={ css.top }>
        <h1 className={ css.h1 }>{ term.name }</h1>
        <Badge className={ css.badge }>{ term.department }</Badge>
        <div className={ css.definition }>{ term.definition }</div>
      </div>
      <div className={ css.bottom }>
        <div>
          <h2 className={ css.h2 }>What</h2>
          <div className={ css.body }>{ term.what }</div>
        </div>
        <div>
          <h2 className={ css.h2 }>When</h2>
          <div className={ css.body }>{ term.when }</div>
        </div>
        <div>
          <h2 className={ css.h2 }>Where</h2>
          <div className={ css.body }>{ term.where }</div>
        </div>
        <div>
          <h2 className={ css.h2 }>Expected Boundary</h2>
          <div className={ css.body }>{ term.expected_boundary }</div>
        </div>
      </div>
    </div>
  );
};

Term.propTypes = {
  match: PropTypes.shape({}).isRequired,
};

export default Term;
