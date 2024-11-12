import BlogItem from '@/components/blogItem';

export default function Page() {
  return (
    <div>
      <h1>Blog</h1>
      <br />
      <BlogItem 
        itemTitle={"Rust Experiment"} 
        start={'They say the best way to master something is to each someone else.'} 
        pathName={'rs-experiment'}>
      </BlogItem>
      <BlogItem 
        itemTitle={"Portfolio Website"} 
        start={'I\'ve been working on a portfolio website for the past month...'} 
        pathName={'portfolio-website'}>
      </BlogItem>
    </div>
  )
}
