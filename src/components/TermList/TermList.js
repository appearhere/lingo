import React from 'react';

import terms from './terms';

const TermList = () => (
  <div>
    { terms.map((term) => <div key={ term.name }>{ term.name }</div>) }
  </div>
);

export default TermList;
