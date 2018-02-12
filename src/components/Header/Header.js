import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cx from 'classnames';

import StickyNode from '@appearhere/bloom/components/StickyNode/StickyNode';
import BtnContainer from '@appearhere/bloom/components/BtnContainer/BtnContainer';
import Icon from '@appearhere/bloom/components/Icon/Icon';

import Search from '../Search/Search';

import css from './Header.css';

const DEPARTMENTS = ['Supply', 'Commercial', 'Marketing', 'Service', 'Product'];

const Header = ({ match, history }) => {
  const handleItemClick = (e) => {
    const { name } = e.target;
    history.push(`/${name}`);
  };

  return (
    <StickyNode>
      <div className={ css.root }>
        <Link to="/" className={ css.logoContainer }>
          <Icon className={ css.logo } name="appearhere-brackets" />
          <div className={ css.logoText }>Lingo</div>
        </Link>
        <div className={ css.navigation }>
          { DEPARTMENTS.map(department => (
            <BtnContainer
              name={ department }
              onClick={ handleItemClick }
              className={
                cx(css.navigationItem, match.params.department === department && css.active)
              }
            >
              { department }
            </BtnContainer>
          )) }
        </div>
        <Search />
      </div>
    </StickyNode>
  );
};

Header.propTypes = {
  match: PropTypes.shape({}).isRequired,
  location: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({}).isRequired,
};

export default Header;
