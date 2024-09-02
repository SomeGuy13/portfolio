import Link from 'next/link';

export default function BlogItem({
  itemTitle,
  start,
  pathName,
}: {
  itemTitle: string,
  start: string,
  pathName: string,
}) {
  return (
    <Link href={`/blog/${pathName}`}>
      <div className='blog-item h-24 my-5'>
        <h3 className='m-1 sm:m-2'>{itemTitle}</h3>
        <p className='m-1 sm:m-2 truncate'>{start}</p>
      </div>
    </Link>
  )
}
