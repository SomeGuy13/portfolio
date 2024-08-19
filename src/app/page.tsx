import { VerticalBarScale } from "@/components/verticalBarScale";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <div className='lg:w-3/6 md:w-5/6 p-2 m-auto'>
        <h1 className="flex justify-center text-6xl md:mt-36 mt-8 mb-3 text-pretty text-center">Mechanized Viking</h1>
        <p className='flex justify-center text-pretty text-center mb-5 md:mb-24'>Game and web developer. Passionate about programming.</p>
        <h1>About</h1>
        <p>
          I'm a self taught hobbiest who learns cool stuff from doing a lot of Googling, reading, and just straight up trail and error.
          Check out my projects below!
        </p>
        <Link href={"/projects"}>
          <div className='button w-fit p-1.5 mt-3'>
            <p>See all projects</p>
          </div>
        </Link>
        <h1 className="mt-3">Skills</h1>
        <p>Just my personal guesses</p>
        <div className="lg:flex lg:justify-between">
          <div>
            <h2>Game Development</h2>
            <h4>Design</h4>
            <VerticalBarScale skillName="Mechanics" value={4.5}></VerticalBarScale>
            <VerticalBarScale skillName="Level Design" value={3.7}></VerticalBarScale>
            <VerticalBarScale skillName="UI Design" value={2}></VerticalBarScale>
            <h4>Art</h4>
            <VerticalBarScale skillName="3D Modeling" value={4}></VerticalBarScale>
            <VerticalBarScale skillName="3D Animation" value={0.75}></VerticalBarScale>
            <VerticalBarScale skillName="Pixel Art" value={3}></VerticalBarScale>
            <VerticalBarScale skillName="Voxel Art" value={9}></VerticalBarScale>
            <h4>Programming</h4>
            <VerticalBarScale skillName="C#" value={6.89}></VerticalBarScale>
            <VerticalBarScale skillName="C" value={0.1}></VerticalBarScale>
            <VerticalBarScale skillName="Rust" value={4.84}></VerticalBarScale>
            <VerticalBarScale skillName="Blueprint" value={1.13}></VerticalBarScale>
            <VerticalBarScale skillName="Lua" value={0.74}></VerticalBarScale>
            <h4>Engines</h4>
            <VerticalBarScale skillName="Unity" value={8.25}></VerticalBarScale>
            <VerticalBarScale skillName="Unreal" value={1}></VerticalBarScale>
            <h4></h4>
          </div>
          <div>
            <h2>Web Development</h2>
            <h4>Frameworks</h4>
            <VerticalBarScale skillName="React" value={6.5}></VerticalBarScale>
            <VerticalBarScale skillName="NextJS" value={4.2}></VerticalBarScale>
            <VerticalBarScale skillName="Tailwind" value={5}></VerticalBarScale>
            <h4>Database</h4>
            <VerticalBarScale skillName="PostgrSQL" value={3}></VerticalBarScale>
            <h4>Languages</h4>
            <VerticalBarScale skillName="HTML" value={9}></VerticalBarScale>
            <VerticalBarScale skillName="CSS" value={6.32}></VerticalBarScale>
            <VerticalBarScale skillName="Java Script" value={8}></VerticalBarScale>
          </div>
        </div>
      </div>
    </main>
  );
}
