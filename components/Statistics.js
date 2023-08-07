import React from 'react';

const FactComponent = ({ facts }) => {
  return (
    <div>
      {facts.map((fact, index) => (
        <FactItem key={index} fact={fact} />
      ))}
    </div>
  );
};

const FactItem = ({ fact }) => {
  return <div>{fact}</div>;
};

// TEST
const factsArray = [
  'The sun is a star.',
  'Earth is the third planet from the sun.',
  'Water boils at 100 degrees Celsius (212 degrees Fahrenheit).',
];

const App = () => {
  return (
    <div>
      <h1>Random Facts</h1>
      <FactComponent facts={factsArray} />
    </div>
  );
};

export default App;
