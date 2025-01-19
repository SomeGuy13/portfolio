import BlogItem from '@/components/blogItem';

export default function Page() {
  return (
    <div>
      <h1>Blog</h1>
      <br />
      <BlogItem itemTitle={"Burnout"} start={"Well..."} pathName={"burnout"}></BlogItem>
      <BlogItem itemTitle={"Portfolio Website"} start={'I\'ve been working on a portfolio website for the past month...'} pathName={'portfolio-website'}></BlogItem>
    </div>
  )
}
