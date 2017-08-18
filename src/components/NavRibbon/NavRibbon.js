import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './NavRibbon.css';
import Link from '../Link';

class NavRibbon extends React.Component {
  static defaultProps = {
    goesBack: false,
  };

  static propTypes = {
    goesBack: PropTypes.bool,
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
  };

  render() {
    const { goesBack, title, to } = this.props;
    return (
      <Link onClick={this.props.onClick} to={to} className={s.link}>
        <div className={s.ribbon}>
          <span className={s.title}>
            {goesBack ? 'Go Back' : title}
          </span>
        </div>
      </Link>
    );
  }
}

export default withStyles(s)(NavRibbon);
