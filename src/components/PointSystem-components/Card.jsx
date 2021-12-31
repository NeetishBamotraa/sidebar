import React from 'react';
import './Card.css';

export default function Card(props) {
  return (
    <div className="card">
      {!props.isDifferent ? (
        <div className="card__cardsSection1">
          <div className="card__cards">
            <div className="card__vertical1">
              <button className="btn btn-outline-primary ">Select</button>
              <p className="card__cardName">{props.title}</p>
            </div>
            <span className="card__cardDivider" />
            <div className="card__inputSection">
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-danger dropdown-toggle btn-sm"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {props.value1}
                </button>
                <ul class="dropdown-menu">
                  <li class="dropdown-item"> {props.value1}</li>
                  <li className="dropdown-item"> {props.value3}</li>
                  <li className="dropdown-item"> {props.value2}</li>
                </ul>
              </div>
              <span>=</span>
              <input type="number" className="card__bonusPointNumbers" />
              <p>Point</p>
            </div>
            <button className="btn btn-primary">Expand/ Collapse</button>
          </div>
        </div>
      ) : (
        <div className="card__cardsSection">
          <div className="card__cards">
            <button className="btn btn-outline-primary ">Select</button>
            <p className="card__cardName">{props.title}</p>

            <div className="card__inputSection">
              <span className="card__singleEntry">1</span>
              <p className="card__subTitle">{props.subTitle}</p> =
              <input type="number" className="card__bonusPointNumbers" />
              <p>Point</p>
            </div>

            <div className="card__vertical">
              <p className="card__bonusPoint">Bonus Point</p>
              <div className="card__inputSection">
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-danger dropdown-toggle btn-sm"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    more than 5
                  </button>
                  <ul class="dropdown-menu">
                    <li class="dropdown-item">more than 5</li>
                    <li className="dropdown-item">more then 8</li>
                    <li className="dropdown-item">more then 10</li>
                  </ul>
                </div>
                <span>=</span>
                <input type="number" className="card__bonusPointNumbers" />
                <p>Point</p>
              </div>
            </div>
            <button className="btn btn-primary">Expand/ Collapse</button>
          </div>
        </div>
      )}
    </div>
  );
}
