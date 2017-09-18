/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

// external-global styles must be imported in your JS.
import { connect } from 'react-redux';
import normalizeCss from 'normalize.css';

import BoardHeader from '../BoardHeader';
import Feedback from '../Feedback';
import Footer from '../Footer';
import GamesHeader from '../Header/GamesHeader';
import Header from '../Header';
import s from './Layout.css';

import { navigate } from '../../actions/boards';

@connect(null, { navigate })
class Layout extends React.Component {
  static defaultProps = {
    schema: '',
  };

  static propTypes = {
    children: PropTypes.node.isRequired,
    navigate: PropTypes.func.isRequired,
    schema: PropTypes.string,
  };

  render() {
    const { schema } = this.props;

    switch (schema) {
      case 'boards':
        return (
          <div>
            <BoardHeader navigate={this.props.navigate} />
            {this.props.children}
          </div>
        );
      case 'games':
        return (
          <div>
            <GamesHeader />
            {this.props.children}
          </div>
        );
      default:
        break;
    }

    return (
      <div>
        <Header />
        {this.props.children}
        <Feedback />
        <Footer />
      </div>
    );
  }
}

export default withStyles(normalizeCss, s)(Layout);
