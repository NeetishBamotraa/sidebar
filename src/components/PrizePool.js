import React from 'react';
import { Radio, Input, Row, Col, Select } from 'antd';
import 'antd/dist/antd.css';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export default function PrizePool() {
  const [yesNo, setYesNo] = React.useState(-1);
  const [prizeType, setPrizeType] = React.useState(0);
  const [amountInr, setAmountInr] = React.useState(0);
  const [giveAway, setGiveAway] = React.useState('');
  const [others, setOthers] = React.useState('');
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );
  const [totalPrizePool, setTotalPrizePool] = React.useState();

  const GiveAway = ['Smart Phone', 'Laptop', 'Amazon Voucher', 'Others'];

  const handleYesNo = (e) => {
    console.log('radio checked', e.target.value);
    setYesNo(e.target.value);
  };

  const handlePrize = (e) => {
    console.log('radio checked', e.target.value);
    setPrizeType(e.target.value);
  };

  const handleAmount = (e) => {
    let initialAmount = e.target.value;
    let amount = initialAmount / 10;
    setAmountInr(amount);
  };

  const handleGiveawayChange = (value) => {
    console.log(value);
    setGiveAway(value);
  };

  const handleOthers = (e) => {
    setOthers(e.target.value);
  };

  const handleTotalPrizePool = (e) => {
    setTotalPrizePool(e.target.value);
  };

  return (
    <div style={{ margin: '20px' }}>
      <h2>Is there a Prize Pool</h2>
      <div>
        <Radio.Group onChange={handleYesNo} value={yesNo}>
          <Radio value={1}>Yes</Radio>
          <Radio value={0}>No</Radio>
        </Radio.Group>
      </div>
      {yesNo === 0 && <h3>you selected no</h3>}
      {yesNo === 1 && (
        <div>
          <h2>Type of Prize</h2>
          <div>
            <Radio.Group onChange={handlePrize} value={prizeType}>
              <Radio value={1}>Clutchh Coins</Radio>
              <Radio value={2}>Giveaway</Radio>
            </Radio.Group>
          </div>
        </div>
      )}
      {prizeType === 1 && (
        <div>
          <h3>Enter Total Prize Pool</h3>
          <h4>Clutchh Coins</h4>
          <Row>
            <Col span={12}>
              <div>
                <Input
                  onChange={handleAmount}
                  placeholder="Enter Amount in numbers"
                />
              </div>
            </Col>
            <Col span={12}>
              <div style={{ margin: '0px 10px' }}>
                <Input
                  disabled={true}
                  placeholder={amountInr == 0 ? 'Amount in INR' : amountInr}
                />
              </div>
            </Col>
          </Row>
        </div>
      )}

      {prizeType === 2 && (
        <div>
          <Select
            defaultValue="Select Your Giveaway"
            style={{ width: 200 }}
            onChange={handleGiveawayChange}
          >
            {GiveAway.map((value) => (
              <Option key={value} value={value}>
                {value}
              </Option>
            ))}
          </Select>
          <div>
            {giveAway == 'Others' && (
              <div>
                <Input onChange={handleOthers} placeholder="Others?" />
              </div>
            )}
          </div>
          <div
            style={{
              padding: '10px',
              margin: '20px',
              backgroundColor: 'grey',
              color: 'white',
              height: '300px',
            }}
          >
            <h3 style={{ color: 'white' }}>Enter GiveAway Description</h3>
            <Editor
              editorState={editorState}
              onEditorStateChange={setEditorState}
            />
          </div>
          <div>
            <h3>Enter Total Prize Pool</h3>
            <Input
              onChange={handleTotalPrizePool}
              placeholder="Amount in Numbers"
            />
          </div>
        </div>
      )}
    </div>
  );
}
