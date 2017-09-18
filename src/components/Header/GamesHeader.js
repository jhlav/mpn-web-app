import React from 'react';
// import PropTypes from 'prop-types';
// import withStyles from 'isomorphic-style-loader/lib/withStyles';

import Button from 'react-md/lib/Buttons';
// import Card from 'react-md/lib/Cards';
// import { connect } from 'react-redux';
// import FontIcon from 'react-md/lib/FontIcons';
// import SelectField from 'react-md/lib/SelectFields';
// import TextField from 'react-md/lib/TextFields';
import Toolbar from 'react-md/lib/Toolbars';

class BoardHeader extends React.Component {
  render() {
    const actions = [<Button icon>search</Button>];

    return <Toolbar actions={actions} colored title="Games" />;
  }
}

export default BoardHeader;
