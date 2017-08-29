/* eslint-disable global-require */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import Button from 'react-md/lib/Buttons';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import Divider from 'react-md/lib/Dividers';
import SelectField from 'react-md/lib/SelectFields/SelectField';

import EntryCard from './EntryCard';
import s from './GameInputForm.css';

@withStyles(s)
class GameInputForm extends React.Component {
  static propTypes = {
    players: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        avatarURL: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  render() {
    const { players } = this.props;
    return (
      <Card className={s.root}>
        <CardTitle title="Record a Game" />
        <div className={s.upperPortion}>
          <div className={s.gameButtons}>
            <Button icon>
              <img alt="" src={require('../_SharedAssets/integerMP1.png')} />
            </Button>
            <Button icon>
              <img alt="" src={require('../_SharedAssets/integerMP2.png')} />
            </Button>
            <Button icon>
              <img alt="" src={require('../_SharedAssets/integerMP3.png')} />
            </Button>
            <Button icon>
              <img alt="" src={require('../_SharedAssets/integerMP4.png')} />
            </Button>
            <Button icon>
              <img alt="" src={require('../_SharedAssets/integerMP5.png')} />
            </Button>
            <Button icon>
              <img alt="" src={require('../_SharedAssets/integerMP6.png')} />
            </Button>
            <Button icon>
              <img alt="" src={require('../_SharedAssets/integerMP7.png')} />
            </Button>
            <Button icon>
              <img alt="" src={require('../_SharedAssets/integerMP8.png')} />
            </Button>
            <Button icon>
              <img alt="" src={require('../_SharedAssets/integerMP9.png')} />
            </Button>
          </div>
          <div className={s.gameInputs}>
            <SelectField
              defaultValue="Battle Royale"
              disabled
              helpOnFocus
              helpText="Select a gamemode"
              id="selectGamemode"
              label="Battle Royale"
              placeholder="Select a gamemode"
              value="Battle Royale"
            />
            <SelectField
              helpOnFocus
              helpText="Select a board"
              id="selectBoard"
              itemLabel="name"
              itemValue="name"
              label="Board"
              menuItems={[
                { name: 'Chilly Waters' },
                { name: 'Spiny Desert' },
                { name: 'Woody Woods' },
              ]}
              placeholder="Select a board"
            />
            <DatePicker
              id="selectDate"
              label="Select a date"
              displayMode="portrait"
            />
          </div>
        </div>
        <Divider />
        <div className={s.entryCards}>
          <EntryCard place="1" players={players} />
          <EntryCard place="2" players={players} />
          <EntryCard place="3" players={players} />
          <EntryCard place="4" players={players} />
        </div>
      </Card>
    );
  }
}

export default GameInputForm;
