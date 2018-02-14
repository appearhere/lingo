import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cx from 'classnames';

import StickyNode from '@appearhere/bloom/components/StickyNode/StickyNode';
import BtnContainer from '@appearhere/bloom/components/BtnContainer/BtnContainer';
import Icon from '@appearhere/bloom/components/Icon/Icon';

import Search from '../Search/Search';

import css from './Header.css';

const DEPARTMENTS = ['Supply', 'Commercial', 'Marketing', 'Service', 'Product'];

export default class Header extends PureComponent {
  static propTypes = {
    match: PropTypes.shape({}).isRequired,
    location: PropTypes.shape({}).isRequired,
    history: PropTypes.shape({}).isRequired,
  };

  handleItemClick = (e) => {
    const { history } = this.props;
    const { name } = e.target;

    history.push(`/${name}`);
  };

  render() {
    const { match } = this.props;

    return (
      <StickyNode>
        <div className={ css.root }>
          <Link to="/" className={ css.logoContainer }>
            <Icon className={ css.logo } name="appearhere" />
            <Icon className={ css.logoBrackets } name="appearhere-brackets" />
          </Link>
          <div className={ css.navigation }>
            { DEPARTMENTS.map(department => (
              <BtnContainer
                key={ department }
                name={ department }
                onClick={ this.handleItemClick }
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
  }
}
