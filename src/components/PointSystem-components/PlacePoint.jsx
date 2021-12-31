import React, { useState } from 'react';
import './PlacePoint.css';

export default function PlacePoint() {
  const [click, setClick] = useState(0);
  const [rangeClick, setRangeClick] = useState(0);
  const [button, setButton] = useState(false);
  const [array, setArray] = useState([]);
  const [newArray, setNewArray] = useState([]);

  const clickHandler = () => {
    if (click < 25) {
      setClick(click + 1);
      setArray([...array, click]);
      // console.log(click);
    } else {
      alert(`Minimun ${click} Rank allowed!!`);
    }
  };

  const handleDelete = (id) => {
    const updatedArray = array.filter((value, index) => {
      return index !== id;
    });

    const updatedNewArray = newArray.filter((value, index) => {
      return index !== id;
    });

    setArray(updatedArray);
    setNewArray(updatedNewArray);

    // console.log("legth :"+ (array.length - 1));

    setClick(array.length - 1);
    setRangeClick(newArray.length - 1);
  };

  const buttonHandler = () => {
    if (click < 10) {
      setButton(true);
      setRangeClick(rangeClick + 1);
      setNewArray([...newArray, rangeClick]);
      console.log(rangeClick);
    } else {
      alert(`Minimun ${click} Rank allowed!!`);
    }
  };

  return (
    <div className="placePoint">
      <div className="placePoint__container">
        <div className="placePoint__titleSection">
          <h3 className="placePoint__titleName">Add Rank</h3>
        </div>
        <div className="placePoint__buttonSection">
          <span onClick={clickHandler}>
            <i className="fas fa-plus-circle"></i>
          </span>
          <button className="btn btn-outline-dark" onClick={buttonHandler}>
            Range
          </button>
        </div>
        <div className="placePoint__title">
          <span className="placePoint__titleNameRank">Rank</span>
          <p className="placePoint__titleNamePoint">Point</p>
        </div>
      </div>

      <div className="placePoint__scroll">
        {array.map((value, id) => {
          return (
            <div className="placePoint__card" key={id}>
              <div className="placePoint__cardRankSection">
                <p className="placePoint__rank" contentEditable={false}>
                  Rank {value + 1}
                </p>
              </div>
              <div className="placePoint__cardPointSection">
                <input
                  type="number"
                  className="placePoint__point"
                  min="0"
                  placeholder="Point"
                />
                <button>
                  <i className="far fa-edit"></i>
                </button>
                <button onClick={() => handleDelete(id)}>
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            </div>
          );
        })}

        <div hidden={!button ? true : false}>
          {newArray.map((value, id) => {
            return (
              <div className="placePoint__RangeContainer" key={id}>
                <p className="placePoint__rank" contentEditable={false}>
                  Rank
                </p>
                <div className="placePoint__rangeInputSection">
                  <input
                    type="number"
                    className="placePoint__range"
                    placeholder="From"
                  />
                  <input
                    type="number"
                    className="placePoint__range"
                    placeholder="To"
                  />
                </div>
                <div className="placePoint__RangeSection">
                  <input
                    type="number"
                    className="placePoint__point"
                    min="0"
                    placeholder="Point"
                  />
                  <button>
                    <i className="far fa-edit"></i>
                  </button>
                  <button onClick={() => handleDelete(id)}>
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
