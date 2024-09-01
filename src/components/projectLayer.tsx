import ImageStack from '@/components/imageStack';
import Link from 'next/link';

export default function ProjectLayer(
  {images, projectTitle, projectDescription, right, pathName}:
  {images: Array<string>, projectTitle: string, projectDescription: string, right: bool, pathName: string}
){

  let currentImages: Array<string> = ['/images/img1.jpg', '/images/img2.jpg', '/images/img3.jpg'];
  
  if (images != null) {
    currentImages = images;
  }

  if (right) {
    return (
      <div className='flex justify-between sm:pt-16'>
        <ImageStack images={currentImages}></ImageStack> 
        <div className='pt-10 m-0.5'>
          <h2 className='md:text-6xl text-right'>{projectTitle}</h2>
          <p className='md:text-2xl text-right pt-3'>{projectDescription}</p>
          <Link href={`/projects/${pathName}`}>
            <div className='button w-fit p-2 m-5 mr-0 text-xl float-right'>See Project</div>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className='flex justify-between sm:pt-16'> 
      <div className='pt-10 m-0.5'>
        <h2 className='md:text-6xl'>{projectTitle}</h2>
        <p className='md:text-2xl pt-3'>{projectDescription}</p>
        <Link href={`/projects/${pathName}`}>
          <div className='button w-fit p-2 m-5 ml-0 text-xl'>See Project</div>
        </Link>
      </div>
      <ImageStack images={currentImages}></ImageStack>
    </div>
  )
}
