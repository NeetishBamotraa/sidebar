import React, { useState } from 'react';
import './InputField.css';

export default function InputField() {
  const [dataUri, setDataUri] = useState([]);
  const [fileName, setFileName] = useState('');
  const [fileSize, setFileSize] = useState();
  const [sizeOFFile, setsSizeOFFile] = useState();
  const [array, setArray] = useState([]);
  const [imageUpload, setImageUpload] = useState(false);
  const [videoUpload, setVideoUpload] = useState(false);
  const [count, setCount] = useState(0);
  const [newarray, setNewArray] = useState([]);
  const [view, setView] = useState(false);

  const fileToDataUri = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      setFileName(file.name);
      setsSizeOFFile(file.size);

      reader.onload = (event) => {
        resolve(event.target.result);
      };
      reader.readAsDataURL(file);
    });

  const onChange = (file) => {
    if (!file) {
      setDataUri('');
      return;
    }

    fileToDataUri(file).then((dataUri) => {
      setDataUri([dataUri]);
      setArray([...array, dataUri]);
    });
    console.log(file);
  };

  const ClickHandler = () => {
    sizeConverter();
    setImageUpload(true);
    setCount(count + 1);
    setNewArray([...newarray, count]);
    setVideoUpload(false);
  };

  const clickVideoHandler = () => {
    sizeConverter();
    setVideoUpload(true);
    setImageUpload(false);
    setCount(count + 1);
    setNewArray([...newarray, count]);
  };

  //delete

  const handleDelete = (id) => {
    const updatedNewArray = newarray.filter((value, index) => {
      return index !== id;
    });

    setNewArray(updatedNewArray);
    setCount(array.length);
  };

  function sizeConverter() {
    let bytes = sizeOFFile;
    // let finalSize;
    if (bytes >= 1073741824) {
      bytes = (bytes / 1073741824).toFixed(2) + ' GB';
    } else if (bytes >= 1048576) {
      bytes = (bytes / 1048576).toFixed(2) + ' MB';
    } else if (bytes >= 1024) {
      bytes = (bytes / 1024).toFixed(2) + ' KB';
    } else if (bytes > 1) {
      bytes = bytes + ' bytes';
    } else if (bytes === 1) {
      bytes = bytes + ' byte';
    } else {
      bytes = '0 bytes';
    }
    return setFileSize(bytes);
  }

  console.log(newarray.length);

  return (
    <div className="InputFields">
      <div className="InputFields__container">
        <h2>Promote-Content & Social Media</h2>
        <p>Dummy Text</p>
        <div className="InputFields__InputSections">
          <div className="InputFields__InputImageSection">
            <span className="icon" />
            <input
              type="file"
              accept="image/*"
              onChange={(event) => onChange(event.target.files[0] || null)}
              style={{ marginBottom: '10px' }}
            />
            <button className="btn btn-outline-primary" onClick={ClickHandler}>
              Upload
            </button>
          </div>
          <div className="InputFields__InputVideoSection">
            <span className="icon" />
            <input
              type="file"
              accept="video/mp4,video/x-m4v,video/*"
              onChange={(event) => onChange(event.target.files[0] || null)}
            />
            <button
              onClick={clickVideoHandler}
              className="btn btn-outline-primary"
            >
              Upload
            </button>
          </div>

          <div className="popUpScreen" hidden={view ? false : true}>
            <div className="cancelIcon" onClick={() => setView(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                class="bi bi-x-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </div>
            <label htmlFor="">Dummy Text</label>
            <input type="text" className="popUpText" placeholder="Caption" />
            <button className="btn btn-success" onClick={() => setView(false)}>
              Save & Back
            </button>
          </div>
        </div>

        <table className="table">
          <thead
            hidden={
              newarray.length > 0 && (imageUpload || videoUpload) ? false : true
            }
          >
            <tr>
              <th scope="col">File name</th>
              <th scope="col">Type</th>
              <th scope="col">Size</th>
              <th scope="col">Upload date/time</th>
              <th scope="col">Tags</th>
              <th scope="col">Descripation</th>
              <th scope="col">Action</th>
              <th scope="col">Publish</th>
              <th scope="col">Unpublish</th>
              <th scope="col">Shareable Link</th>
            </tr>
          </thead>
          <tbody>
            {dataUri.length > 0 && imageUpload
              ? newarray.map((e, curId) => {
                  return (
                    <tr>
                      <th scope="row">
                        <div className="imageView">
                          {dataUri.map((curEle, id) => (
                            <img src={curEle} alt="no data found" key={id} />
                          ))}
                          <p>{fileName}</p>
                        </div>
                      </th>
                      <td>Image</td>
                      <td>{`${fileSize}`}</td>
                      <td>{`${new Date().toLocaleDateString()}, ${new Date().toLocaleTimeString(
                        'en-US',
                        {
                          hour: 'numeric',
                          minute: 'numeric',
                        }
                      )}`}</td>
                      <td>Score Card</td>
                      <td>
                        <button
                          className="btn btn-primary btn-sm"
                          onClick={() => setView(true)}
                        >
                          View/Edit
                        </button>
                      </td>
                      <td>
                        <div className="TableAction">
                          <button className="btn btn-primary btn-sm">
                            Download
                          </button>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => handleDelete(curId)}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                      <td>
                        <button className="btn btn-success btn-sm">
                          Publish
                        </button>
                      </td>
                      <td>
                        <button className="btn btn-success btn-sm">
                          Unpublish
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-success btn-sm"
                          style={{ fontSize: '.8rem', width: '80px' }}
                        >
                          Copy Link
                        </button>
                      </td>
                    </tr>
                  );
                })
              : videoUpload
              ? newarray.map((e, id) => {
                  return (
                    <tr>
                      <th scope="row">
                        <div className="imageView">
                          <video
                            src="/video.mp4"
                            width="150px"
                            height="100px"
                          ></video>
                          <p>{fileName}</p>
                        </div>
                      </th>
                      <td>Video</td>
                      <td>{`${fileSize}`}</td>
                      <td>{`${new Date().toLocaleDateString()}, ${new Date().toLocaleTimeString(
                        'en-US',
                        {
                          hour: 'numeric',
                          minute: 'numeric',
                        }
                      )}`}</td>
                      <td>Clutch</td>
                      <td>
                        <button
                          className="btn btn-primary btn-sm"
                          onClick={() => setView(true)}
                        >
                          View/Edit
                        </button>
                      </td>
                      <td>
                        <div className="TableAction">
                          <button className="btn btn-primary btn-sm">
                            Download
                          </button>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => handleDelete(id)}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                      <td>
                        <button className="btn btn-success btn-sm">
                          Publish
                        </button>
                      </td>
                      <td>
                        <button className="btn btn-success btn-sm">
                          unPublish
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-success btn-sm"
                          style={{ fontSize: '.8rem', width: '80px' }}
                        >
                          Copy Link
                        </button>
                      </td>
                    </tr>
                  );
                })
              : ''}
          </tbody>
        </table>
      </div>
    </div>
  );
}
