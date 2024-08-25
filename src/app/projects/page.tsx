import Image from 'next/image'
import ImageStack from '@/components/imageStack';

export default function Home() {


  return (
      <div className='lg:w-3/6 md:w-5/6 p-2 m-auto'>
        <div className='lg:flex'>
          <h1 className='text-nowrap mr-6'>Project Gallery</h1>
          <input id='search-bar' className='self-center' placeholder='Search...' />
        </div>
        <div className='flex w-auto'>
          <ImageStack images={['/images/img1.jpg', '/images/img2.jpg', '/images/img3.jpg']}></ImageStack>
          <div className='justify-self-end'>
            <h2 className='text-right'>Project 000</h2>
            <p className='text-right'>lalalall</p>
          </div>
        </div>
      </div>
  );
}