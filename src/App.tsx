import React from 'react';
import './App.css';

import { Person, HairColor } from './components/Person';

export const App : React.FC = () => {
  return (
    <div className='App'>
      <Person
        name="Luke"
        email="developer-lukemccann@outlook.com"
        age={27}
        hairColor={HairColor.Black}
      />
    </div>
  );
}
