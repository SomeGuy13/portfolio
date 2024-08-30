import Image from 'next/image'
import ImageStack from '@/components/imageStack';
import ProjectLayer from '@/components/projectLayer';

export default function Home() {
  return (
      <div className='lg:w-3/6 md:w-5/6 p-2 m-auto'>
        <div className='lg:flex'>
          <h1 className='text-nowrap md:text-7xl mr-6 pt-5'>Project Gallery</h1>
        </div>
        <ProjectLayer right={true} projectTitle={'Project 000'} projectDescription={'Calculator Made with React'} pathName={'jscalc'}></ProjectLayer>
        <ProjectLayer projectTitle={'Project 001'} projectDescription={'Simple bubble popping game'}></ProjectLayer>
      </div>
  );
}

