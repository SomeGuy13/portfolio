import { BarScale } from "@/components/barScale";
import Link from "next/link";

export default function Page() {
  return (
  <main>
      <h1 className="flex justify-center text-6xl md:mt-20 mt-8 mb-3 text-pretty text-center">Isaac Erickson</h1>
      <p className='flex justify-center text-pretty text-center mb-5 md:mb-24'>Game and web developer. Passionate about programming.</p>
      <h1>About</h1>
      <p>
        I&apos;m a self taught hobbiest who learns cool stuff from doing a lot of Googling, reading, and just straight up trail and error.
        Check out my projects below!
      </p>
      <Link href={"/projects"}>
        <div className='button w-fit p-1.5 mt-3'>
          <p>See all projects</p>
        </div>
      </Link>
      <br />
      <h1>Blog</h1>
      <p>See what I&apos;ve been working on recently!</p>
      <Link href={'/blog'}>
        <div className='button w-fit p-1.5 mt-3'>
          <p>See Blog</p>
        </div>
      </Link>
      <br />
      <h1 className="mt-3">Skills</h1>
      <p>Just my personal guesses</p>
      <br />
      <div className="lg:flex lg:justify-between mb-16">
        <div>
          <h2>Game Development</h2>
          <h4>Design</h4>
          <BarScale skillName="Mechanics" value={4.5}></BarScale>
          <BarScale skillName="Level Design" value={3.7}></BarScale>
          <BarScale skillName="UI Design" value={2}></BarScale>
          <h4>Art</h4>
          <BarScale skillName="3D Modeling" value={4}></BarScale>
          <BarScale skillName="3D Animation" value={0.75}></BarScale>
          <BarScale skillName="Pixel Art" value={3}></BarScale>
          <BarScale skillName="Voxel Art" value={9}></BarScale>
          <h4>Programming</h4>
          <BarScale skillName="C#" value={6.89}></BarScale>
          <BarScale skillName="C++" value={0.1}></BarScale>
          <BarScale skillName="Rust" value={4.84}></BarScale>
          <BarScale skillName="Blueprint" value={0.98}></BarScale>
          <BarScale skillName="Lua" value={0.74}></BarScale>
          <h4>Engines</h4>
          <BarScale skillName="Unity" value={8.25}></BarScale>
          <BarScale skillName="Unreal" value={1}></BarScale>
          <h4></h4>
        </div>
        <div>
          <h2>Web Development</h2>
          <h4>Frameworks</h4>
          <BarScale skillName="React" value={6.5}></BarScale>
          <BarScale skillName="NextJS" value={4.2}></BarScale>
          <BarScale skillName="Tailwind" value={5}></BarScale>
          <h4>Database</h4>
          <BarScale skillName="PostgrSQL" value={3}></BarScale>
          <h4>Languages</h4>
          <BarScale skillName="HTML" value={9}></BarScale>
          <BarScale skillName="CSS" value={6.32}></BarScale>
          <BarScale skillName="Java Script" value={8}></BarScale>
        </div>
      </div>
    </main>
  );
}
