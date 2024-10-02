'use server';

import { promises as fs } from 'fs';
import path from 'path';
// import { useEffect, useState} from 'react';

export default async function generateIdea() {
  try {
    // const [data, setData] = useState(null);

    // useEffect(() => {
    //  const fetchData = async () => {
    //    const res = await import('../public/data/ideas.json');
    //    setData(res.default);
    //  };
    //  fetchData();
    // }, []);

    const filePath = path.resolve(process.cwd() + '.next', 'ideas.json');
    const ideaFile = await fs.readFile(filePath, 'utf8');
    const ideaData = JSON.parse(ideaFile);

    let randomNum: number = Rnbt(3, 1);

    switch (randomNum) {
      case 0:
        return `You are a 
                ${ideaData.verbs[Rnbt(ideaData.verbs.length, 1)]} 
                ${ideaData.beings[Rnbt(ideaData.beings.length, 1)]} 
                who must 
                ${ideaData.tasks[Rnbt(ideaData.tasks.length, 1)]}`
      case 1:
        return `A blend between the 
               ${ideaData.genres[Rnbt(ideaData.genres.length, 1)]} 
               and 
               ${ideaData.genres[Rnbt(ideaData.genres.length, 1)]} genres, 
               where you are a 
               ${ideaData.verbs[Rnbt(ideaData.verbs.length, 1)]} 
               ${ideaData.beings[Rnbt(ideaData.beings.length, 1)]}
               who will
               ${ideaData.tasks[Rnbt(ideaData.tasks.length, 1)]}.`
      //case 2: 
      //  return `A game about a 
      //         ${ideaData.objects[Rnbt(ideaData.objects.length, 1)]} 
      //         and a 
      //         ${ideaData.objects[Rnbt(ideaData.objects.length, 1)]}.`
      case 2: 
        return `You are a 
               ${ideaData.beings[Rnbt(ideaData.beings.length, 1)]} 
               who is ${ideaData.traits[Rnbt(ideaData.traits.length, 1)]}
               that tries to 
               ${ideaData.tasks[Rnbt(ideaData.tasks.length, 1)]}.`
      case 3: 
        return `A game where you must 
               ${ideaData.tasks[Rnbt(ideaData.tasks.length, 1)]} 
               with ${ideaData.objects[Rnbt(ideaData.objects.length, 1)]}
               in a mix between the 
               ${ideaData.genres[Rnbt(ideaData.tasks.length, 1)]} and
               ${ideaData.genres[Rnbt(ideaData.tasks.length, 1)]}.`
      default: return "Idea failed";
    }

    console.log(randomNum);
  } catch (error) {
    console.error(`Error parsing idea data:`, error);
    throw error;
  }
}

function Rnbt(max: number, min: number) {
  return Math.floor(Math.random() * ((max - min) + min));
}

