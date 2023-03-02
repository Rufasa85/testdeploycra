import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Card from './components/Card';
import Joe from './components/Joe';

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return (
    <div>
      <Joe color="green"/>
      <Joe color/>
      <Header />
      <Navbar />
      <Card color="deepskyblue"/>
      <Card />
      <Card  color="chocolate"/>
    </div>
  );
}

export default App;

