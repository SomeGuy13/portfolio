import Folder from "@/components/folder";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <div className="lg:w-1/2 md:w-5/6 p-10 m-auto md:mt-10 bg-yellow-50">
        <h1>The Archives</h1>
        <p>Well, hello there.</p>
        <p>It appears you have stumbled upon The Archives: a place where a few projects and ideas are documented. Feel free to take a look around at what you fancy.</p>
        <p>However, I will warn you: this will not be like other sites you have been to. You must dig through it, look into its dark corners, and try the unexpected to see what it really has to offer. Listen to what calls to you.</p>
        <p>Below is a folder to start your adventures. Good luck.</p>
        <div className="flex w-full">
          <Folder name="The Beginning" rout="/blog"/> 
        </div>
      </div>
    </main>
  );
}
