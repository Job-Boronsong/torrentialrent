import Link from "next/link";

const featuredListings = [
  {
    id: 1,
    title: "Single Room Self-Contained",
    location: "Madina, Accra",
    price: "GHS 850/month",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    verified: true,
  },
  {
    id: 2,
    title: "2 Bedroom Apartment",
    location: "East Legon, Accra",
    price: "GHS 2,500/month",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
    verified: true,
  },
  {
    id: 3,
    title: "Student Hostel Room",
    location: "KNUST Area, Kumasi",
    price: "GHS 600/month",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop",
    verified: false,
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* HEADER */}
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

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-black text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm">
              Trusted Ghana Rental Platform
            </span>

            <h2 className="mt-6 text-5xl font-bold leading-tight">
              Find Verified Rooms & Houses in Ghana
            </h2>

            <p className="mt-6 text-lg text-gray-300">
              Browse verified listings, contact trusted agents, and schedule
              inspections easily.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/listings"
                className="rounded-2xl bg-white px-6 py-3 font-semibold text-black shadow-lg transition hover:scale-105"
              >
                Browse Listings
              </Link>

              <button className="rounded-2xl border border-white/30 px-6 py-3 transition hover:bg-white/10">
                List Property
              </button>
            </div>
          </div>

          {/* SEARCH CARD */}
          <div className="rounded-3xl bg-white p-6 text-black shadow-2xl">
            <h3 className="text-2xl font-bold">Search Properties</h3>

            <div className="mt-6 space-y-4">
              <input
                type="text"
                placeholder="Location"
                className="w-full rounded-xl border p-4 outline-none focus:ring-2"
              />

              <select className="w-full rounded-xl border p-4 outline-none focus:ring-2">
                <option>Property Type</option>
                <option>Single Room</option>
                <option>Self Contained</option>
                <option>Apartment</option>
                <option>Hostel</option>
              </select>

              <select className="w-full rounded-xl border p-4 outline-none focus:ring-2">
                <option>Budget</option>
                <option>Below GHS 500</option>
                <option>GHS 500 - 1000</option>
                <option>GHS 1000 - 3000</option>
              </select>

              <button className="w-full rounded-xl bg-black py-4 font-semibold text-white transition hover:opacity-90">
                Search Listings
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Why Choose RentGH?</h2>

          <p className="mt-4 text-gray-600">
            A trusted platform for finding real rental properties in Ghana.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <div className="text-4xl">✔️</div>

            <h3 className="mt-4 text-2xl font-semibold">
              Verified Listings
            </h3>

            <p className="mt-3 text-gray-600">
              We personally verify listings to reduce fake properties and scams.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <div className="text-4xl">📍</div>

            <h3 className="mt-4 text-2xl font-semibold">Easy Search</h3>

            <p className="mt-3 text-gray-600">
              Search by location, price, and property type with a mobile-first
              experience.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <div className="text-4xl">💬</div>

            <h3 className="mt-4 text-2xl font-semibold">Fast Response</h3>

            <p className="mt-3 text-gray-600">
              Contact us directly through WhatsApp for quick assistance and
              inspections.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED LISTINGS */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-4xl font-bold">Featured Listings</h2>

              <p className="mt-2 text-gray-600">
                Explore some of our latest verified properties.
              </p>
            </div>

            <Link
              href="/listings"
              className="rounded-xl border px-5 py-3 hover:bg-gray-100"
            >
              View All
            </Link>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {featuredListings.map((listing) => (
              <div
                key={listing.id}
                className="overflow-hidden rounded-3xl bg-gray-50 shadow-lg transition hover:-translate-y-1"
              >
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="h-64 w-full object-cover"
                />

                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold">
                      {listing.title}
                    </h3>

                    {listing.verified && (
                      <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                        Verified
                      </span>
                    )}
                  </div>

                  <p className="mt-2 text-gray-600">
                    {listing.location}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-xl font-semibold">
                      {listing.price}
                    </p>

                    <Link
                      href={`/listings/${listing.id}`}
                      className="rounded-xl bg-black px-4 py-2 text-white hover:opacity-90"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold">
            Looking for a Room or Apartment?
          </h2>

          <p className="mt-4 text-lg text-gray-300">
            Let us help you find verified rental properties quickly and safely.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/listings"
              className="rounded-2xl bg-white px-8 py-4 font-semibold text-black shadow-lg transition hover:scale-105"
            >
              Search Now
            </Link>

            <button className="rounded-2xl border border-white/30 px-8 py-4 hover:bg-white/10">
              Contact on WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <div>
            <h3 className="text-xl font-bold">RentGH</h3>

            <p className="text-sm text-gray-500">
              Trusted rental listings in Ghana.
            </p>
          </div>

          <div className="flex gap-6 text-sm text-gray-600">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms</Link>
            <Link href="#">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}