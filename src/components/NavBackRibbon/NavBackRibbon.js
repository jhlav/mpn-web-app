import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './NavBackRibbon.css';
import Link from '../Link';

class NavBackRibbon extends React.Component {
  static propTypes = {
    to: PropTypes.string.isRequired,
  };

  render() {
    return (
      <Link onClick={this.props.onClick} to={this.props.to} className={s.link}>
        <div className={s.ribbon}>
          <span className={s.title}>
            <i className={`material-icons ${s.icon}`}>arrow_back</i> Go Back
          </span>
        </div>
      </Link>
    );
  }
}

export default withStyles(s)(NavBackRibbon);
