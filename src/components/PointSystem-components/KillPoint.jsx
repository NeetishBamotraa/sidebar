import React from 'react';
import './KillPoint.css';

export default function KillPoint(props) {
  return (
    <div className="killPoint">
      <div className="killPoint__container">
        <div className="killPoint__titleSection">
          <h2 className="killPoint__title">Kill point</h2>
        </div>
        <div className="killPoint__killPointCalculator">
          <span className="killPoint__kills">1 kill</span> =
          <input type="number" min="0" className="killPoint__calc" />
          <span>Point</span>
        </div>
        <div
          className="killPoint__bonusPointSection"
          hidden={props.isChecked2 ? false : true}
        >
          <h5 className="killPoint__bonusPointText">Bonus Point</h5>
          <div className="btn-group">
            <button
              type="button"
              class="btn btn-primary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              more than 5
            </button>
            <ul class="dropdown-menu">
              <li className="dropdown-item">more than 5</li>
              <li className="dropdown-item">more then 8</li>
              <li className="dropdown-item">more then 10</li>
            </ul>
          </div>
          =
          <input type="number" className="killPoint__inputFeild" min="0" />
          <span>Point</span>
        </div>
        <div className="killPoint__buttonSection">
          <button className="btn btn-outline-warning">Previous</button>
          <button className="btn btn-outline-success">Next</button>
        </div>
      </div>
    </div>
  );
}
