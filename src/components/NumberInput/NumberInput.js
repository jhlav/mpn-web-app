import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import Button from 'react-md/lib/Buttons/Button';
import TextField from 'react-md/lib/TextFields';

import s from './NumberInput.css';

@withStyles(s)
class NumberInput extends React.PureComponent {
  render() {
    return (
      <div className={s.root}>
        <Button flat>add</Button>
        <TextField label="#" lineDirection="center" placeholder="3" />
        <Button flat>remove</Button>
      </div>
    );
  }
}

export default NumberInput;
