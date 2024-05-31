// src/features/counter/Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, selectCount } from './counterSlice';
import './Counter.css'
const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div className="card">
      <h1>Counter: {count}</h1>
      <div className="button-container">
        <button className="button" onClick={() => dispatch(increment())}>Increment</button>
        <button className="button" onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
