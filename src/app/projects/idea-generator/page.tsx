'use client';

import React from 'react';
import { useState } from 'react';
import generateIdea from './ideaGenerator';

export default function Page() {
  let idea: string = '';
  const [generatedIdea, setGeneratedIdea] = useState(idea);

  const handleClick = async () => {
    try {
      const newIdea = await generateIdea();
      setGeneratedIdea(newIdea);
    } catch (error) {
      console.error('Error generating new idea:', error);
      alert('Failed to generate new idea. Please try again.');
    }
  };

  return (
    <div>
      <h1>Project 001</h1>
      <h3>Idea Generator</h3>
      <br/>
      <div className='mx-auto w-fit mt-24'> 
        <p className='text-center text-3xl'>{generatedIdea}</p>
        <br/>
        <div className='button w-fit p-1.5 mt-3 mx-auto' onClick={handleClick}>
          <p className='select-none'>Generate</p>
        </div>
      </div>
    </div>
  )
}
