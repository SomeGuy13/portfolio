import ImageStack from '@/components/imageStack';

export default function ProjectLayer(
  {images, projectTitle, projectDescription, right}:
  {images: Array<string>, projectTitle: string, projectDescription: string, right: bool}) 
{

  let currentImages: Array<string> = ['/images/img1.jpg', '/images/img2.jpg', '/images/img3.jpg'];
  
  if (images != null) {
    currentImages = images;
  }

  if (right) {
    return (
      <div className='flex justify-between sm:pt-16'>
       <ImageStack images={currentImages}></ImageStack> 
        <div className='pt-10'>
          <h2 className='md:text-6xl text-right'>{projectTitle}</h2>
          <p className='md:text-2xl text-right pt-3'>{projectDescription}</p>
        </div>
      </div>
    )
  }

  return (
    <div className='flex justify-between sm:pt-16'> 
      <div className='pt-10'>
        <h2 className='md:text-6xl'>{projectTitle}</h2>
        <p className='md:text-2xl pt-3'>{projectDescription}</p>
      </div>
      <ImageStack images={currentImages}></ImageStack>
    </div>
  )
}
