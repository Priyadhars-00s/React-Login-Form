import React from 'react';
import User from './pages/Users/User';
import './App.css';
import Test from './context'
const App: React.FC = () => {
  return (
    <div>
      <User />
      <Test />
    </div>
  );
}

export default App;