import React from 'react';
import Card from './Card';

const canine = {
  name: 'Spot',
  description: 'The best boy',
  id: 1,
};
const doggos = [
  {
    name: 'Spot',
    description: 'The best boy',
    id: 1,
  },
  {
    name: 'Puppy',
    description: 'Hes 4 feet tall',
    id: 2,
  },
  {
    name: 'Cocoa',
    description: 'She was brown',
    id: 3,
  },
  {
    name: 'Laney',
    description: 'shes a princess',
    id: 4,
  },
  {
    name: 'Willow',
    description: 'The worst',
    id: 5,
  },
]

const createCards = ()=>{
  const dogCards = doggos.map((doggie)=>{
    return <Card name={doggie.name} id={doggie.id} description={doggie.description} key={doggie.id}/>
  })
  return dogCards
}

export default function Display() {
  return (
    <div>
        {/* {doggos.map((doggie)=><Card name={doggie.name} id={doggie.id} description={doggie.description} key={doggie.id}/>)} */}
        {createCards()}
    </div>
  );
}
