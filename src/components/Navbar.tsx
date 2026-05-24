import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div>
          <h1 className="text-2xl font-bold">RentGH</h1>

          <p className="text-sm text-gray-500">
            Verified Rooms & Houses in Ghana
          </p>
        </div>

        <nav className="hidden gap-6 md:flex">
          <Link href="/">Home</Link>
          <Link href="/listings">Listings</Link>
          <Link href="#">About</Link>
          <Link href="#">Contact</Link>
        </nav>

        <button className="rounded-xl bg-black px-4 py-2 text-white shadow hover:opacity-90">
          Admin Login
        </button>
      </div>
    </header>
  );
}