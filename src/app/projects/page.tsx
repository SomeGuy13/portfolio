import Image from 'next/image'
import ImageStack from '@/components/imageStack';
import ProjectLayer from '@/components/projectLayer';

export default function Home() {
  return (
    <div>
      <div className='lg:flex'>
        <h1 className='text-nowrap md:text-7xl mr-6 pt-5'>Project Gallery</h1>
      </div>
      <ProjectLayer projectTitle={'Project 001'}
        projectDescription={'Random game idea generator'}
        pathName={'idea-generator'}
        right={true}
        ></ProjectLayer>
      <ProjectLayer projectTitle={'Project 000'} 
        projectDescription={'Simple bubble popping game'} 
        pathName={'bubblepopper'} 
        images={[
          '/images/bubblepopper/2.png',
          '/images/bubblepopper/0.png',
          '/images/bubblepopper/1.png',
        ]}
        right={false}
        ></ProjectLayer>
    </div>
  );
}

