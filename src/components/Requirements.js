import React, { useState } from 'react';
import { Button, Radio, Checkbox, Row, Col, Input, Select } from 'antd';
import 'antd/dist/antd.css';

function Requirements({ theme, stepSelect }) {
  const [initYes, setInitYes] = useState(-1);
  const [lastradio, setLastradio] = useState(-1);
  const SeasonOptions = [
    'Season 19',
    'Season 18',
    'Season 17',
    'Season 16',
    'Season 15',
  ];

  const DataPoints = [
    'Matches Played',
    'R/P',
    'Tier',
    'Chicken Dinner',
    'Top 10',
    'F/D',
    'Kills',
    'Win Ratio',
    'Top 10 Rate',
    'Headshot',
    'Headshot(%)',
    'Most Kills',
    'Highest Damage',
    'Average Damage',
    'Accuracy',
  ];

  const Tier = ['Gold', 'Platinum', 'Diamond', 'Ace', 'Conqueror'];

  const onYesClick = () => {
    setInitYes(1);
  };
  const onNoClick = () => {
    setInitYes(0);
  };
  const onFirstRadioChange = (e) => {
    console.log(e.target.value);
  };

  const onLastRadioChange = (e) => {
    setLastradio(e.target.value);
  };

  const seasonCheckbox = (checkedvalues) => {
    console.log(checkedvalues);
  };

  const onDataPointChange = (checkedvalues) => {
    console.log(checkedvalues);
  };

  const onTierChange = (value) => {
    console.log(value);
  };

  const onSaveClick = () => {};
  return (
    <div style={{ color: `${theme === 'dark' ? 'white' : 'black'}` }}>
      <Button
        type="primary"
        size="large"
        shape="round"
        style={{ margin: '10px' }}
        onClick={onYesClick}
      >
        <h2 style={{ color: 'white' }}>Yes</h2>
      </Button>
      <Button
        type="danger"
        size="large"
        shape="round"
        style={{ margin: '10px' }}
        onClick={onNoClick}
      >
        <h2 style={{ color: 'white' }}>No</h2>
      </Button>

      <div>
        {initYes === 1 && (
          <div>
            <h1>For Squad/Duo</h1>
            <h3>Select whose data has to be taken into account</h3>
            <Radio.Group onChange={onFirstRadioChange}>
              <Radio value={1}>Whole Team Average</Radio>
              <Radio value={2}>Each of the Player</Radio>
              <Radio value={3}>IGL</Radio>
            </Radio.Group>
            <h3>Select Any One</h3>
            <Checkbox.Group options={SeasonOptions} onChange={seasonCheckbox} />
            <h3>Select one or more of the following Data Points</h3>
            <Checkbox.Group
              style={{ width: '100%' }}
              onChange={onDataPointChange}
            >
              <Row>
                {DataPoints.map((data) => (
                  <Col span={4} key={data}>
                    <Checkbox value={data}>{data}</Checkbox>
                  </Col>
                ))}
              </Row>
            </Checkbox.Group>
            <h3>Select Any One</h3>
            <Radio.Group onChange={onLastRadioChange}>
              <Radio value={1}>Range</Radio>
              <Radio value={2}>Minimum</Radio>
              <Radio value={3}>Maximum</Radio>
            </Radio.Group>
            {lastradio === 1 && (
              <div>
                <Row>
                  <Col span={4} style={{ margin: '0 5px' }}>
                    <Input placeholder="From" />
                  </Col>
                  <div>to</div>
                  <Col span={4} style={{ margin: '0 5px' }}>
                    <Input placeholder="To" />
                  </Col>
                </Row>
              </div>
            )}
            {lastradio === 2 && (
              <div>
                <Row>
                  <Col span={4}>
                    <Input placeholder="Min" />
                  </Col>
                </Row>
              </div>
            )}
            {lastradio === 3 && (
              <div>
                <Row>
                  <Col span={4}>
                    <Input placeholder="Max" />
                  </Col>
                </Row>
              </div>
            )}
            <div>
              <h3>Select Tier</h3>
              <Select
                style={{ width: '150px' }}
                defaultValue="Select Here"
                onChange={onTierChange}
              >
                {Tier.map((data) => (
                  <Select.Option key={data} value={data}>
                    {data}
                  </Select.Option>
                ))}
              </Select>
            </div>
            <Button
              type="primary"
              size="large"
              shape="round"
              style={{ margin: '10px' }}
              onClick={onSaveClick}
            >
              <h3 style={{ color: 'white' }}>Save</h3>
            </Button>
          </div>
        )}
        {initYes === 0 && <h1>You chose No</h1>}
        {initYes === -1 && <h1>Choose Yes or No</h1>}
      </div>
    </div>
  );
}

export default Requirements;
