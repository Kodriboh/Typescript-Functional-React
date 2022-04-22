import React, { createContext } from 'react';
import './App.css';

import { Person, HairColor } from './components/Person';

interface IAppContext {
  name: string,
  age: number,
  country: string,
};

const AppContext = createContext<IAppContext | null>(null);

const contextValue: IAppContext = {
  name: 'Luke',
  age: 27,
  country: 'England',
};

export const App : React.FC = () => {
  return (
    <AppContext.Provider value={contextValue}>
      <div className='App'>
        <Person
          name="Luke"
          email="developer-lukemccann@outlook.com"
          gender='Male'
          age={27}
          hairColor={HairColor.Black}
        />
      </div>
    </AppContext.Provider>
  );
}
