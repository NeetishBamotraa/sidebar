import React, { useState } from 'react';

import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import {
  Button,
  Input,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from 'reactstrap';

const DUMMY_DATA = {
  country: ['India', 'USA'],
  states: [
    'J&K',
    'Punjab',
    'Uttar Pradesh',
    'Delhi',
    'Los Vegas',
    'Los Santos',
    'California',
  ],
};

// Note: here "DataListPages" can be changed to "BasicInfo" while adding to original project.
function BasicInfo() {
  const [country, setCountry] = useState('Select Country');
  const [state, setState] = useState('Select State');
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const onSaveHandler = () => {
    // code to save..
  };

  const onPreviewHandler = () => {
    // code to preview..
  };

  const nextHandler = () => {
    // code to next..
  };

  const backHandler = () => {
    // code to back..
  };

  const handleCountryClick = (e) => {
    setCountry(e.target.innerText);
  };

  const handleStateClick = (e) => {
    setState(e.target.innerText);
  };

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '50%', display: 'flex' }}>
          Match:
          <Input placeholder="Enter Match Title" />
        </div>
        <div>
          <Button onClick={onSaveHandler}>Save</Button>
          <Button onClick={onPreviewHandler}>Preview</Button>
        </div>
      </div>

      <div style={{ padding: '10px', marginTop: '20px' }}>
        Platform:
        <div
          style={{
            margin: '5px',
            padding: '10px',
            display: 'inline-block',
            color: 'white',
            backgroundColor: 'grey',
            cursor: 'pointer',
          }}
        >
          PC
        </div>
        <div
          style={{
            margin: '5px',
            padding: '10px',
            display: 'inline-block',
            color: 'white',
            backgroundColor: 'grey',
            cursor: 'pointer',
          }}
        >
          Xbox
        </div>
        <div
          style={{
            margin: '5px',
            padding: '10px',
            display: 'inline-block',
            color: 'white',
            backgroundColor: 'grey',
            cursor: 'pointer',
          }}
        >
          PlayStation
        </div>
        <div
          style={{
            margin: '5px',
            padding: '10px',
            display: 'inline-block',
            color: 'white',
            backgroundColor: 'grey',
            cursor: 'pointer',
          }}
        >
          Mobile
        </div>
      </div>

      <div style={{ padding: '10px', margin: '20px' }}>
        <div>
          <UncontrolledDropdown>
            <DropdownToggle
              caret
              color="primary"
              size="lg"
              outline
              className="top-right-button top-right-button-single"
            >
              {country}
            </DropdownToggle>
            <DropdownMenu>
              {DUMMY_DATA.country.map((data) => (
                <DropdownItem onClick={handleCountryClick} key={data}>
                  {data}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown>
            <DropdownToggle
              caret
              color="primary"
              size="lg"
              outline
              className="top-right-button top-right-button-single"
            >
              {state}
            </DropdownToggle>
            <DropdownMenu>
              {DUMMY_DATA.states.map((data) => (
                <DropdownItem onClick={handleStateClick} key={data}>
                  {data}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
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
        <h2>Description</h2>
        <Editor
          editorState={editorState}
          onEditorStateChange={setEditorState}
        />
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

export default BasicInfo;
