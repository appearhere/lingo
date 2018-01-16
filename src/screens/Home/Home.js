import React from 'react';
import PropTypes from 'prop-types';

import TermList from '../../components/TermList/TermList';

import terms from '../../terms';

const Home = ({ match }) => {
  const currentDepartment = match.params.department;
  const filteredTerms = currentDepartment ? terms.filter(
    term => term.department === currentDepartment
  ) : terms;
  return <TermList currentDepartment={ currentDepartment } terms={ filteredTerms } />;
};


Home.propTypes = {
  match: PropTypes.shape({}),
};

export default Home;
