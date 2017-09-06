import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import Button from 'react-md/lib/Buttons/Button';
import TextField from 'react-md/lib/TextFields';

import s from './NumberInput.css';

@withStyles(s)
class NumberInput extends React.Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
  };

  onChange = value => {
    const { label } = this.props;
    const int = parseInt(value, 10);
    if (label === 'MG Coins' && (int < -999 || int > 999)) {
      return;
    } else if (int < 0 || int > 999) {
      return;
    }
    this.props.onChange(value);
  };

  onDecrement = () => {
    const { label, onChange, value } = this.props;
    const int = parseInt(value, 10);
    if (label === 'MG Coins' && int <= -999) {
      return;
    } else if (label !== 'MG Coins' && int <= 0) {
      return;
    }
    onChange((int - 1).toString());
  };

  onIncrement = () => {
    const { onChange, value } = this.props;
    const int = parseInt(value, 10);
    if (int >= 999) {
      return;
    }
    onChange((int + 1).toString());
  };

  render() {
    const { label, value } = this.props;
    // TODO Add onTouchStart and onTouchEnd props for better mobile experience
    // TODO Make long presses possible with oTS / oTE and onMouseDown / onMouseUp
    return (
      <div className={s.root}>
        <Button flat onClick={this.onIncrement}>
          add
        </Button>
        <TextField
          label={label}
          lineDirection="center"
          onChange={this.onChange}
          placeholder="#"
          type="number"
          value={value}
        />
        <Button flat onClick={this.onDecrement}>
          remove
        </Button>
      </div>
    );
  }
}

export default NumberInput;
