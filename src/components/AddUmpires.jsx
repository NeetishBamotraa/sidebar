import React, { useState } from 'react';
import './AddUmpires.css';

function AddUmpires() {
  const [radio1, setRadio1] = useState(false);
  const [radio2, setRadio2] = useState(false);
  const [addList, setAddList] = useState(false);
  const [searchList, setSearchList] = useState(false);
  const [buttonClick, setButtonClick] = useState(false);
  const [input, setInput] = useState('');

  const handleRadio1 = () => {
    setRadio1(true);
    setRadio2(false);
  };

  const handleRadio2 = () => {
    setRadio2(true);
    setRadio1(false);
    setAddList(false);
    setSearchList(false);
    setButtonClick(false);
  };

  const handleAddList = () => {
    setAddList(true);
    setSearchList(false);
    setButtonClick(false);
  };

  const handleSearchList = () => {
    setAddList(false);
    setSearchList(true);
    setButtonClick(false);
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const buttonHandler = () => {
    if (radio2) {
      setButtonClick(false);
    } else {
      setButtonClick(true);
    }
  };

  console.log(input);

  return (
    <div className="addUmpires">
      <div className="addUmpires__Container">
        <div className="addUmpires__Header">
          <h2 className="addUmpires__mainHeading">ADD UMPIRES</h2>
          <h4 className="addUmpires__subHeading">dummy sub text</h4>
        </div>

        <div className="addUmpires__RadioSelection mb-4">
          <p className="mb-3 mt-3 w-50 alert alert-primary" role="alert">
            <b>Do You Want To Add Umpire To The Match ?</b>
          </p>
          <input
            type="radio"
            className="radio1"
            onChange={handleRadio1}
            checked={radio1 && !radio2 ? true : false}
          />
          <label htmlFor="radio1">Yes</label>

          <input
            type="radio"
            className="radio2"
            onChange={handleRadio2}
            checked={radio2 && !radio1 ? true : false}
          />
          <label htmlFor="radio2">No</label>
        </div>

        <div
          className="addUmpires__UmpireSelection mb-3"
          hidden={!radio1 ? true : false}
        >
          <button
            onClick={handleAddList}
            className="btn btn-outline-primary me-3"
          >
            Add From List
          </button>
          <button
            onClick={handleSearchList}
            className="btn btn-outline-primary"
          >
            Search & Add
          </button>
        </div>

        <div className="addUmpire__selectedNO">
          <p
            hidden={radio2 ? false : true}
            className="alert alert-dark w-50 mb-4"
          >
            You have selected No option, Click Save to apply changes !!
          </p>
        </div>

        <div
          className="addUmpires__addFromList"
          hidden={!addList ? true : false}
        >
          {/* <h4 className="addUmpires__addFromList__Header">Add From List</h4> */}
          <table>
            <thead>
              <th>Select</th>
              <th>Usrname</th>
              <th>Umpire Rating</th>
              <th>No. of matches umpired</th>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="Checkbox" />
                </td>
                <td>
                  <div className="umpire_Username">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbno0gCsSzL260VpU5K94kpcQSOBPcbNaWMQ&usqp=CAU"
                      alt="profile image"
                    />
                    <p>Umpire 1</p>
                  </div>
                </td>
                <td>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                </td>
                <td>20</td>
              </tr>
              <tr>
                <td>
                  <input type="Checkbox" />
                </td>
                <td>
                  <div className="umpire_Username">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcUljKXpa0H1DimXKpnyOhrPvpyWn9-YA6mw&usqp=CAU"
                      alt="profile image"
                    />
                    <p>Umpire 2</p>
                  </div>
                </td>
                <td>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                </td>
                <td>5</td>
              </tr>
              <tr>
                <td>
                  <input type="Checkbox" />
                </td>
                <td>
                  <div className="umpire_Username">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK1UNchXp3Q8qF_7SgzpVjajkGNXCvjWruyg&usqp=CAU"
                      alt="profile image"
                    />
                    <p>Umpire 3</p>
                  </div>
                </td>
                <td>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                </td>
                <td>10</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div
          className="addUmpires__SearchAndAdd"
          hidden={!searchList ? true : false}
        >
          {/* <h4 className="addUmpires__SearchAndAdd__Header ">Search & Add</h4> */}
          <input
            type="text"
            className="addUmpires__SearchAndAdd__searchBox"
            placeholder="Enter Username"
            onChange={handleInput}
          />

          <table>
            <thead>
              <th>Usrname</th>
              <th>Umpire Rating</th>
              <th>No. of matches umpired</th>
              <th>Delete</th>
            </thead>

            <tbody>
              <tr
                hidden={
                  input === 'umpire1' || input === 'umpire' ? false : true
                }
              >
                <td>
                  <div className="umpire_Username">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbno0gCsSzL260VpU5K94kpcQSOBPcbNaWMQ&usqp=CAU"
                      alt="profile image"
                    />
                    <p>Umpire 1</p>
                  </div>
                </td>
                <td>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                </td>
                <td>20</td>
                <td>
                  <span class="fa fa-trash"></span>
                </td>
              </tr>
              <tr
                hidden={
                  input === 'umpire2' || input === 'umpire' ? false : true
                }
              >
                <td>
                  <div className="umpire_Username">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcUljKXpa0H1DimXKpnyOhrPvpyWn9-YA6mw&usqp=CAU"
                      alt="profile image"
                    />
                    <p>Umpire 2</p>
                  </div>
                </td>
                <td>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                </td>
                <td>5</td>
                <td>
                  <span class="fa fa-trash"></span>
                </td>
              </tr>
              <tr
                hidden={
                  input === 'umpire3' || input === 'umpire' ? false : true
                }
              >
                <td>
                  <div className="umpire_Username">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK1UNchXp3Q8qF_7SgzpVjajkGNXCvjWruyg&usqp=CAU"
                      alt="profile image"
                    />
                    <p>Umpire 3</p>
                  </div>
                </td>
                <td>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                </td>
                <td>10</td>
                <td>
                  <span class="fa fa-trash"></span>
                </td>
              </tr>
            </tbody>
            <p hidden={input.length > 0 ? true : false} className="m-3">
              No data Found
            </p>
          </table>
        </div>

        <button
          onClick={buttonHandler}
          className="add_Umpires_SaveButton btn btn-success"
        >
          Save
        </button>

        <div
          className="addUmpires__SelectedUmpires"
          hidden={!buttonClick ? true : false}
        >
          <h4 className="addUmpires__SelectedUmpires__Header mt-2">
            selected Umpires
          </h4>

          <table>
            <thead>
              <th>Usrname</th>
              <th>Umpire Rating</th>
              <th>No. of matches umpired</th>
              <th>Action</th>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="umpire_Username">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbno0gCsSzL260VpU5K94kpcQSOBPcbNaWMQ&usqp=CAU"
                      alt="profile image"
                    />
                    <p>Umpire 1</p>
                  </div>
                </td>
                <td>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                </td>
                <td>20</td>
                <td>
                  <span class="fa fa-trash"></span>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="umpire_Username">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcUljKXpa0H1DimXKpnyOhrPvpyWn9-YA6mw&usqp=CAU"
                      alt="profile image"
                    />
                    <p>Umpire 2</p>
                  </div>
                </td>
                <td>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                </td>
                <td>5</td>
                <td>
                  <span class="fa fa-trash"></span>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="umpire_Username">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK1UNchXp3Q8qF_7SgzpVjajkGNXCvjWruyg&usqp=CAU"
                      alt="profile image"
                    />
                    <p>Umpire 3</p>
                  </div>
                </td>
                <td>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                </td>
                <td>10</td>
                <td>
                  <span class="fa fa-trash"></span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AddUmpires;
