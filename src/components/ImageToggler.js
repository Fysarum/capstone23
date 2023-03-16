import React from 'react';
import { sculptureList } from './ImageList.js';
import { useState } from 'react';
export default function imageToggler() {

    let index = 0

        function handleClick() {
            index = index +1;
        }

        let sculpture = sculptureList[index];



    return (
         <>
      <button onClick={handleClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
      <p>
        {sculpture.description}
      </p>
        </>
    )
}