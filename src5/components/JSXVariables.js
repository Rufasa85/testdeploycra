import React from 'react';

const name = 'ShivaBahamut';
const num1 = 7;
const num2 = 3;
const elemArr = [<li>cat</li>,<li>dog</li>]

function JSXVariables() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          {/* JavaScript expressions can be escaped inside of curly braces */}

          <h2>My cat's name is {name}. But you can call me...</h2>
          <h1>The JSX Boss!</h1>
          <hr />
          
          <h2>I can do math: {num1 + num2}.</h2>
          <h2>
            I can generate random numbers:
            {Math.floor(Math.random() * 10) + 1},
            {Math.floor(Math.random() * 10) + 1},
            {Math.floor(Math.random() * 10) + 1}.
          </h2>
          <h2>I can even reverse my name: {name.split('').reverse().join("")}</h2>
          <ul>
            {elemArr}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
