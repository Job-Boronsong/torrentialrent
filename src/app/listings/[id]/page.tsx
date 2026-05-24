import Navbar from "@/components/Navbar";
  const listing = listings.find(
    (item) => item.id === Number(params.id)
  );

  if (!listing) {
    return <div>Listing not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-2">
          <img
            src={listing.image}
            alt={listing.title}
            className="h-[500px] w-full rounded-3xl object-cover"
          />

          <div>
            <div className="flex items-center gap-4">
              <h1 className="text-4xl font-bold">{listing.title}</h1>

              {listing.verified && (
                <span className="rounded-full bg-green-100 px-3 py-1 text-green-700">
                  Verified
                </span>
              )}
            </div>

            <p className="mt-4 text-xl text-gray-600">
              {listing.location}
            </p>

            <p className="mt-6 text-3xl font-bold text-black">
              {listing.price}
            </p>

            <p className="mt-8 leading-8 text-gray-700">
              {listing.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-2xl bg-black px-8 py-4 text-white">
                Request Inspection
              </button>

              <button className="rounded-2xl border px-8 py-4">
                WhatsApp Agent
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}