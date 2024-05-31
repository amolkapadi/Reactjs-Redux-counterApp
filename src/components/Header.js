// src/components/Header.js
import React from 'react';
import { useSelector } from 'react-redux';
import { selectCount } from '../features/counter/counterSlice';

const Header = () => {
  const count = useSelector(selectCount);

  return (
    <header style={headerStyle}>
      <h1>Counter App</h1>
      <div style={countStyle}>Current Count: {count}</div>
    </header>
  );
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 20px',
  backgroundColor: '#282c34',
  color: 'white',
};

const countStyle = {
  fontSize: '1.2rem',
};

export default Header;
