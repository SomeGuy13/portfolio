import Link from 'next/link';


export default function Folder({ name, rout }: { name: string; rout: string; }) {
  return (
    <Link href={rout}>
      <div className='folder-container flex items-center m-5'>
        <p className='text-center w-full'>{name}</p>
      </div>
    </Link>
  )
}
