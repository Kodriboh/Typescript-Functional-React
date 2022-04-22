import React from 'react';
import './App.css';

import { Person } from './components/Person';

export const App : React.FC = () => {
  return (
    <div className='App'>
      <Person
        name="Luke"
        age={27}
        isEmployed={true}
      />
    </div>
  );
}