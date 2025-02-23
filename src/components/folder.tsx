import Link from 'next/link';

type Props = {
  name: string;
  rout: string;
};

export default function Folder({ name, rout }: {Props}) {
  return (
    <Link href={rout}>
      <div className='folder-container flex items-center m-5'>
        <p className='text-center w-full'>{name}</p>
      </div>
    </Link>
  )
}
