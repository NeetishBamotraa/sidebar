import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Card, Row, Col, Menu, Dropdown, Button, Input, Image } from 'antd';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, Modifier } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const popData = ['Rule 1', 'Rule 2', 'Rule 3'];

const popdatamore =
  "Lorem Ipsum is simply dummy text of the printing and \
typesetting industry. Lorem Ipsum has been the industry's \
standard dummy text ever since the 1500s, when an unknown\
printer took a galley of type and scrambled it to make a\
type specimen book. It has survived not only five centuries,\
but also the leap into electronic typesetting, remaining\
essentially unchanged. It was popularised in the 1960s with\
the release of Letraset sheets containing Lorem Ipsum\
passages, and more recently with desktop publishing software\
like Aldus PageMaker including versions of Lorem Ipsum";

export default function AddRules({ theme, stepSelect }) {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const [popOn, setPopOn] = useState(false);
  const [errorPop, setErrorPop] = useState(false);

  const handlePopUp = (val) => {
    console.log(val);
    const currentContent = editorState.getCurrentContent();

    if (currentContent.hasText()) {
      setErrorPop(true);
    } else {
      setPopOn(true);
    }
  };

  const handlePopSelect = (rule, popdatamore) => {
    let currRule = rule.rule + '\n' + popdatamore.popdatamore + '\n';
    const currentContent = editorState.getCurrentContent(),
      currentSelection = editorState.getSelection();

    if (!currentContent.hasText()) {
      const newContent = Modifier.insertText(
        currentContent,
        currentSelection,
        currRule
      );

      const newEditorState = EditorState.push(
        editorState,
        newContent,
        'insert-characters'
      );

      setEditorState(newEditorState);
    }
  };

  const gotoDes = () => {
    setPopOn(false);
    setErrorPop(false);
  };

  const nextHandler = () => {
    // code to next..
    stepSelect('step 9');
  };
  return (
    <div
      style={{
        margin: '20px',
        color: `${theme === 'dark' ? 'white' : 'black'}`,
      }}
    >
      <Card>
        <h1>Add Rules</h1>
      </Card>

      <Row style={{ float: 'right', margin: '10px 0' }}>
        <div style={{ margin: '0 5px' }}>
          <Button shape="round">Save</Button>
        </div>
        <div style={{ margin: '0 5px' }}>
          <Button shape="round">Edit</Button>
        </div>
        <div style={{ margin: '0 5px' }}>
          <Button shape="round">Preview</Button>
        </div>
      </Row>
      <br></br>

      <Row style={{ margin: '10px 0' }}>
        <div
          style={{ margin: '0 5px' }}
          onClick={() => handlePopUp('Standard')}
        >
          <Button type="primary" shape="round">
            Add Standard Rules
          </Button>
        </div>
        <div style={{ margin: '0 5px' }} onClick={() => handlePopUp('Archive')}>
          <Button type="primary" shape="round">
            Add From Archive
          </Button>
        </div>
      </Row>
      {/*****************  pop up code starts *************************/}

      {errorPop && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            backgroundColor: 'white',
            width: '40vw',
            height: '100px',
            padding: '10px',
            zIndex: '11',
            border: '2px solid lightgrey',
          }}
        >
          <div
            onClick={gotoDes}
            style={{
              position: 'absolute',
              top: '0px',
              right: '10px',
              border: '1px solid grey',
              padding: '0 2px',
              cursor: 'pointer',
              zIndex: '10',
              margin: '10px',
            }}
          >
            X
          </div>
          <div style={{ position: 'relative', top: '20px' }}>
            You have already selected rules to select new rules delete the rules
            in the description box
          </div>
        </div>
      )}
      {popOn && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            backgroundColor: 'white',
            height: '30vh',
            width: '40vw',
            zIndex: '10',
            overflowY: 'auto',
            border: '2px solid lightgrey',
          }}
        >
          <div
            onClick={gotoDes}
            style={{
              position: 'absolute',
              top: '0px',
              right: '10px',
              border: '1px solid grey',
              padding: '0 2px',
              cursor: 'pointer',
              zIndex: '10',
            }}
          >
            X
          </div>

          {popData.map((rule) => (
            <Card>
              <div style={{ margin: '15px 0' }} key={rule}>
                <h2>{rule}</h2>
                <div
                  style={{
                    height: '40px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    margin: '10px 0',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {popdatamore}
                </div>
                <div
                  onClick={() => handlePopSelect({ rule }, { popdatamore })}
                  style={{
                    float: 'right',
                    border: '1px solid grey',
                    padding: '2px',
                    cursor: 'pointer',
                  }}
                >
                  Select
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      <Row>
        <div
          style={
            !popOn
              ? {
                  padding: '10px',
                  margin: '20px',
                  backgroundColor: 'grey',
                  color: 'white',
                  height: '300px',
                  overflowY: 'auto',
                  opacity: '1',
                  width: '100%',
                }
              : {
                  padding: '10px',
                  margin: '20px',
                  backgroundColor: 'grey',
                  color: 'white',
                  height: '300px',
                  overflowY: 'auto',
                  opacity: '0.5',
                  width: '100%',
                }
          }
        >
          <h2>Description</h2>
          <Editor
            editorState={editorState}
            onEditorStateChange={setEditorState}
          />
        </div>
      </Row>

      <Row style={{ float: 'right', margin: '10px 0' }}>
        <div style={{ margin: '0 5px' }}>
          <Button type="primary" shape="round">
            Previous
          </Button>
        </div>
        <div style={{ margin: '0 5px' }}>
          <Button onClick={nextHandler} type="primary" shape="round">
            Next
          </Button>
        </div>
      </Row>
    </div>
  );
}
