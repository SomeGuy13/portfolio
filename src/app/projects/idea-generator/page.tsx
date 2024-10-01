'use client';

import React from 'react';
import { useState } from 'react';
import generateIdea from './ideaGenerator.tsx';

export default function Page({idea}: { idea: string }) {
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
      <p>I wanted to make a litle game idea generator to see what bizare results would come out of it and use it as some inspiration for future projects.</p>
      <div className='mx-auto w-fit mt-24'> 
        <p className='text-center'>{generatedIdea}</p>
        <br/>
        <div className='button w-fit p-1.5 mt-3 mx-auto' onClick={handleClick}>
          <p className='select-none'>Generate</p>
        </div>
      </div>
    </div>
  )
}
