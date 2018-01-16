import React from 'react';
import PropTypes from 'prop-types';

const Term = ({ match }) => (
  <div>
    <h2>{ match.params.term }</h2>
  </div>
);

Term.propTypes = {
  match: PropTypes.shape({}),
};

export default Term;
