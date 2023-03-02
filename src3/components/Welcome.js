import React from 'react';
import Joe from './Joe';

export default function Welcome() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <article className="container">
      <h1>Hello students!</h1>
      <p>Today we will be learning about the following:</p>
      <Joe/>
      <ul className="parent">
        <li>React</li>
        <li>Components</li>
        <li>Props</li>
        <li>Babel</li>
      </ul>
    </article>
  );
}
