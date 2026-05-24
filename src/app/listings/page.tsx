import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ListingCard from "../../components/ListingCard";
import { listings } from "../../data/listings";

export default function ListingsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-10">
          <h1 className="text-4xl font-bold">
            Available Listings
          </h1>

          <p className="mt-2 text-gray-600">
            Browse verified rental properties in Ghana.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {listings.map((listing) => (
            <ListingCard
              key={listing.id}
              {...listing}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}