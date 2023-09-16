import React from 'react';
import CartContainer from "./containers/CartContainer";
import HeaderContainer from "./containers/HeaderContainer";
import "./App.css";


export const App = () => {
  return (
    <div className='App'>
      <HeaderContainer />
       <CartContainer />
    </div>

  )
}

export default App;