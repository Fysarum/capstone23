import React from 'react';
import { imageList } from './ForrestList.js';
import { useState } from 'react';
export default function ForrestImage() {

    let index = 0

        function handleClick() {
            index = index +1;
        }

        let currentImage = imageList[index];



    return (
         <>
      <button onClick={handleClick}>
        Next
      </button>
      <h3>  
        ({index + 1} of {imageList.length})
      </h3>
      <img 
        src={currentImage.url} 
        alt={currentImage.alt}
      />
        </>
    )
}