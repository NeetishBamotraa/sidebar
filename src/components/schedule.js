import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { DatePicker, TimePicker } from 'antd';
import 'antd/dist/antd.css';

function Schedule({ theme, stepSelect }) {
  const onRegStartDateChange = (date, dateString) => {
    console.log(dateString);
  };

  const onRegStartTimeChange = (time, timeString) => {
    console.log(timeString);
  };
  const nextHandler = () => {
    stepSelect('step 3');
  };

  const backHandler = () => {
    // code to back..
  };

  const onSaveHandler = () => {
    // code to save..
  };

  const onPreviewHandler = () => {
    // code to preview..
  };

  return (
    <div style={{ color: `${theme === 'dark' ? 'white' : 'black'}` }}>
      <div>
        <Button onClick={onSaveHandler}>Save</Button>
        <Button onClick={onPreviewHandler}>Preview</Button>
      </div>

      <div>
        <h1>Registration Schedule</h1>
        <h3>Registration Starts</h3>
        <DatePicker onChange={onRegStartDateChange} />
        <TimePicker onChange={onRegStartTimeChange} />
        <h3>Registration Ends</h3>
        <DatePicker onChange={onRegStartDateChange} />
        <TimePicker onChange={onRegStartTimeChange} />
      </div>
      <div>
        <h1 style={{ margin: '20px', marginLeft: '0px' }}>Match Schedule</h1>
        <h3>
          <DatePicker
            onChange={onRegStartDateChange}
            placeholder="Tournament Date"
          />
          <TimePicker
            onChange={onRegStartTimeChange}
            placeholder="Start Time"
          />
          <TimePicker onChange={onRegStartTimeChange} placeholder="End Time" />
        </h3>
      </div>
      <div>
        <Button
          style={{ position: 'relative', right: '20px', margin: '10px' }}
          onClick={backHandler}
        >
          Back
        </Button>

        <Button
          style={{ position: 'relative', right: '20px', margin: '10px' }}
          onClick={nextHandler}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default Schedule;
