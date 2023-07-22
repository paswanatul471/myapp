import React from 'react'
import jsonData from "../assets/data.json"

const Home=()=> {
  return (
    <div>
      {jsonData.map((item, index) => (
        <div key={index}>
          <h1>Name:{item.name}</h1>
          <p>Age: {item.age}</p>
         
        </div>
      ))}
    </div>
  );
};

export default Home