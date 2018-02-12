import React from 'react';
import replace from 'string-replace-to-array';
import PropTypes from 'prop-types';

import css from './Highlight.css';

const Highlight = ({ highlight, caseSensitive, text, ...rest }) => (
  <div { ...rest }>
    { highlight
      ? replace(
        text,
        new RegExp(
          (highlight || '').replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&'),
          caseSensitive ? 'g' : 'gi'
        ),
        (tag, index) => <mark key={ index } className={ css.mark }>{ tag }</mark>
      )
      : text }
  </div>
);


Highlight.propTypes = {
  highlight: PropTypes.string,
  text: PropTypes.string,
  caseSensitive: PropTypes.bool,
};

Highlight.defaultProps = {
  caseSensitive: false,
};

export default Highlight;
