import React from 'react'
import { useState } from "react";
import '../styles/App.css';

const searchArray = ["Newton", "School", "Newton School", "React", "Preact", "Node", "Mongoose", "Angular", "Vue", "Apple", "Microsoft", "Netflix", "Meta"]
const App = () => {
 const [inputVal, setInputVal] = useState();
  const [res, setRes] = useState([]);
  return (
    <div id="main">
      <label>
        Search
        <br />
        <br />
        <input
          type="text"
          id="search-input"
          onChange={function (e) {
          value={inputVal}
          onChange={function (e) {
            setInputVal(e.target.value);
            if (e.target.value.length > 0) {
              setRes(
                searchArray.filter((el) => {
                  if (el.toLowerCase().trim().includes(e.target.value)) {
                    return el.toLowerCase().trim().includes(e.target.value);
                  } else {
                    return false;
                  }
                })
              );
            } else {
              setRes([]);
            }
          }}
        />
      </label>
      <br />
      <br />
      <div>
        Results
        <ul>
         {res.map((el, i) => {
            return <li key={i}>{el}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;
