import React from 'react';
import MyContext from './MyContext';

const MyProvider = props => {
  return (
    <MyContext.Provider
      value={{
        correctPairs: 0,
        addPair: function () { this.correctPairs++ }
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default MyProvider;
