import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { subscribe } from 'subscribe-ui-event';

import TabBar from '@appearhere/bloom/components/Navigation/TabBar/TabBar';
import TabBarItem from '@appearhere/bloom/components/Navigation/TabBar/TabBarItem';

import m from '@appearhere/bloom/globals/modifiers.css';

import Search from '../Search/Search';

const MIN_MOBILE_NAV_WIDTH = '(min-width: 36.25rem)';

export default class Header extends Component {
  static propTypes = {
    match: PropTypes.shape({}).isRequired,
    location: PropTypes.shape({}).isRequired,
    history: PropTypes.shape({}).isRequired,
  };

  state = {
    isNavScrollable: false,
  };

  componentDidMount() {
    this.checkWindow();
    this.resizeEventSubscription = subscribe('resize', this.checkWindow, {
      useRAF: true,
    });
  }

  checkWindow = () => {
    // eslint-disable-next-line
    if (window.matchMedia(MIN_MOBILE_NAV_WIDTH).matches) {
      this.setState({ isNavScrollable: false });
    } else {
      this.setState({ isNavScrollable: true });
    }
  };

  handleItemClick = (e) => {
    const { location, history } = this.props;
    const { name } = e.target;

    history.push(`/${name}${location.search}`);
  };

  render() {
    const { isNavScrollable } = this.state;
    const { match } = this.props;
    return (
      <div>
        <Search { ...this.props } />
        <TabBar scrollable={ isNavScrollable }>
          <TabBarItem
            active={ !match.params.department }
            Component="button"
            onClick={ this.handleItemClick }
            className={ m.bgWhite }
          >
            All
          </TabBarItem>
          <TabBarItem
            name="Supply"
            active={ match.params.department === 'Supply' }
            Component="button"
            onClick={ this.handleItemClick }
            className={ m.bgWhite }
          >
            Supply
          </TabBarItem>
          <TabBarItem
            name="Concierge"
            active={ match.params.department === 'Concierge' }
            Component="button"
            onClick={ this.handleItemClick }
            className={ m.bgWhite }
          >
            Concierge
          </TabBarItem>
          <TabBarItem
            name="Marketing"
            active={ match.params.department === 'Marketing' }
            Component="button"
            onClick={ this.handleItemClick }
            className={ m.bgWhite }
          >
            Marketing
          </TabBarItem>
          <TabBarItem
            name="Service"
            active={ match.params.department === 'Service' }
            Component="button"
            onClick={ this.handleItemClick }
            className={ m.bgWhite }
          >
            Service
          </TabBarItem>
          <TabBarItem
            name="Product"
            active={ match.params.department === 'Product' }
            Component="button"
            onClick={ this.handleItemClick }
            className={ m.bgWhite }
          >
            Product
          </TabBarItem>
        </TabBar>
      </div>
    );
  }
}
