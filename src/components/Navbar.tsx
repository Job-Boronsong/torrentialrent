export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div>
          <h1 className="text-2xl font-bold">RentGH</h1>
        </div>

        <nav className="hidden gap-6 md:flex">
          <a href="/">Home</a>
          <a href="/listings">Listings</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>

        <button className="rounded-xl bg-black px-4 py-2 text-white">
          Admin Login
        </button>
      </div>
    </header>
  );
}