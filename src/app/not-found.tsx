import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <div className="grid place-content-center h-screen">
        <div>
          <p className="text-stone-50">Looks like your lost buddy.</p>
          <Link href="/"><p className="text-red-600">Come home.</p></Link>
        </div>
      </div>
    </main>
  )
}
