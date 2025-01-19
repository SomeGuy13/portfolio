import Link from 'next/link'
import Image from 'next/image';

export default function Page() {
  return (
    <div>
      <h1>Project 002</h1>
      <h3 className='mb-2'>Conquer until Conquered</h3>
      <br/>
      <p>I wanted to give some writing a try, and I figured why not just make a new website and put my writing on there? So thats what I did. It&apos;s called Conquer until Conqured and is a story of massive power vacumes and grabbs. We&apos;ll see where this goes...</p>
      <br />
      <Link href='https://conquer-until-conquered.vercel.app'><div className='button m-2'><p className='text-center'>Conquer until Conquered</p></div></Link>
    </div>
  )
}
