import Image from 'next/image'
import ImageStack from '@/components/imageStack';

export default function Home() {
  return (
      <div className='lg:w-3/6 md:w-5/6 p-2 m-auto'>
        <div className='lg:flex'>
          <h1 className='text-nowrap mr-6 pt-5'>Project Gallery</h1>
        </div>
        <div className='flex justify-between sm:pt-16'> 
          <ImageStack images={['/images/img1.jpg', '/images/img2.jpg', '/images/img3.jpg']}></ImageStack>
          <div className='pt-10'>
            <h2 className='text-right'>Project 000</h2>
            <p className='text-right'>Project Dscription....</p>
          </div>
        </div>
        <div className='flex justify-between sm:pt-16'> 
          <div className='pt-10'>
            <h2>Project 000</h2>
            <p>Project Dscription....</p>
          </div>
          <ImageStack images={['/images/img1.jpg', '/images/img2.jpg', '/images/img3.jpg']}></ImageStack>
        </div>
      </div>
  );
}
