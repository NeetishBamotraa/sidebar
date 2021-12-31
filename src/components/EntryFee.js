import React, { Component, useState } from 'react';
import './EntryFee.css';
import { Button } from 'react-bootstrap';

const EntryFee = (props) => {
  const [ispaid, setIspaid] = useState(false);
  const [coins, setCoins] = useState('0');
  return (
    <div className="body">
      <div className="title">
        <h2>ENTRY FEES</h2>
        <hr></hr>
      </div>
      <div className="buttons row mb-5">
        <Button variant="warning col-2 col-sm-1 offset-2 ">Save</Button>
        <Button variant="primary col-2 col-sm-1 offset-1 offset-sm-2">
          Preview
        </Button>
      </div>
      <div
        className="radio row"
        onChange={(e) => {
          e.target.value == 'paid' ? setIspaid(true) : setIspaid(false);
        }}
      >
        <form className="m-2">
          <input
            type="radio"
            value="free"
            name="gender"
            className="my-3 mx-3 offset-2"
          />{' '}
          Free
          <input
            type="radio"
            value="paid"
            name="gender"
            className="mx-3"
          />{' '}
          Paid
        </form>
      </div>
      {ispaid && (
        <div className="middle my-3">
          <div>
            <label>Enter Entry fees in CC</label>
          </div>
          <div>
            <input
              type="text"
              name="entryfees"
              className="m-3"
              onChange={(e) => setCoins(e.target.value)}
            />
            <label>Coins</label>
            <input
              type="text"
              name="entryfees"
              className="mx-3 px-3 rupees"
              placeholder="In INR"
              value={coins / 10}
            />
            <label>Rupees</label>
          </div>
          <div className="buttons row my-5">
            <Button variant="danger col-2 col-sm-1 offset-2 offset-sm-1 ">
              Previous
            </Button>
            <Button variant="success col-2 col-sm-1 offset-2 offset-sm-1 ">
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EntryFee;
