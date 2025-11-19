import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSquare } from './Square';

function App() {
  const dispatch = useDispatch();

  const myval = useSelector((state) => state.sqrt.square);

  return (
    <div style={{ justifySelf: "center", marginTop: "150px" }}>
      <h2>Enter a number for squaring : </h2>
      <input
        type="text"
        onChange={(e) => dispatch(setSquare(Number(e.target.value)))}
        style={{ padding: "10px" }}
      />
      <h3>Square : {myval}</h3>
    </div>
  )
}

export default App;
