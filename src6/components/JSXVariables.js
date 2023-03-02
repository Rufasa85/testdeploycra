import React from 'react';


function JSXVariables(props) {
  console.log(props)
  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          {/* TODO: Add your name variable */}
          <h1>My card</h1>
          <h1>Hi! My name is {props.username}</h1>
          {/* TODO: Add your number of letters variable */}
          <h2>My name has {props.username.length} letters</h2>
          {/* TODO: Add your thoughts variable */}
          <h2>I think React {props.thoughts}</h2>
        </div>
      </div>
      <hr/>
    </div>
  );
}

export default JSXVariables;
