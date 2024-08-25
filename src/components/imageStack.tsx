import Image from 'next/image'

export default function ImageStack({images}: {images: Array<string>}) {
  let listOfImages = images;
  
  return (
    <div className='felx w-1/3 relative m-7 sm:m-24'>
      <Image id="clickable-image" src={listOfImages[0]} style={{width: '100%', height: 'auto', position: 'absolute', zIndex: '10'}} width={0} height={0} sizes={'100vw'} alt={"image"}></Image>
      <Image id="clickable-image" src={listOfImages[1]} style={{width: '100%', height: 'auto', position: 'absolute', zIndex: '5', transform: 'rotate(20deg)', left: '2.5vw'}} width={0} height={0} sizes={'100vw'} alt={"image"}></Image>
      <Image id="clickable-image" src={listOfImages[2]} style={{width: '100%', height: 'auto', position: 'absolute', transform: 'rotate(-15deg)', right: '2.5vw'}} width={0} height={0} sizes={'100vw'} alt={"image"}></Image>
    </div>
  )
}