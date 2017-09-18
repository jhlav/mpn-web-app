import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import Button from 'react-md/lib/Buttons';
// import Card from 'react-md/lib/Cards';
import { connect } from 'react-redux';
// import FontIcon from 'react-md/lib/FontIcons';
import SelectField from 'react-md/lib/SelectFields';
// import TextField from 'react-md/lib/TextFields';
import Toolbar from 'react-md/lib/Toolbars';
import s from './BoardHeader.css';

@connect(state => ({ isNavigating: state.boards.isNavigating }))
@withStyles(s)
class BoardHeader extends React.Component {
  static propTypes = {
    // category: PropTypes.string.isRequired,
    isNavigating: PropTypes.bool.isRequired,
    navigate: PropTypes.func.isRequired,
  };

  static defaultProps = {
    category: 'Category',
  };

  render() {
    const { isNavigating, navigate } = this.props;

    const FILTERS = [
      'Unfiltered',
      'N64',
      'Gamecube',
      'Wii',
      'Mario Party 1',
      'Mario Party 2',
      'Mario Party 3',
      'Mario Party 4',
      'Mario Party 5',
      'Mario Party 6',
      'Mario Party 7',
      'Mario Party 8',
      'Mario Party 9',
    ];

    const actions = [<Button icon>search</Button>];
    const nav =
      !isNavigating &&
      <Button icon onClick={() => navigate(true)}>
        arrow_back
      </Button>;
    const titleMenu = (
      <div className={s.filterContainer}>
        <SelectField
          defaultValue={FILTERS[0]}
          id="filtersMenu"
          key="filters"
          menuItems={FILTERS}
        />
      </div>
    );

    return (
      <Toolbar actions={actions} colored nav={nav} titleMenu={titleMenu} />
    );
  }
}

export default withStyles(s)(BoardHeader);
