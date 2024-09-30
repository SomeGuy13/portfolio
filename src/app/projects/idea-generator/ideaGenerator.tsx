'use server';

import { promises as fs } from 'fs';

export default async function generateIdea() {
  'use server';

  try {
    const ideaFile = await fs.readFile(process.cwd() + '/src/app/projects/idea-generator/ideas.json', 'utf8');
    const ideaData = JSON.parse(ideaFile);

    let generatedIdea: string = `You are a blank who must do blank`;

    let randomInt1 = Math.floor(Math.random() * ((ideaData.people.length - 1) + 1));
    let randomInt2 = Math.floor(Math.random() * ((ideaData.tasks.length - 1) + 1));

    generatedIdea = `You are a ${ideaData.people[randomInt1]} who must ${ideaData.tasks[randomInt2]}`;

    return generatedIdea;
  } catch (error) {
    console.error('Error parsing idea data:', error);
    throw error;
  }
}
