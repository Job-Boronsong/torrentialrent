import Link from "next/link";

interface ListingCardProps {
  id: number;
  title: string;
  location: string;
  price: string;
  image: string;
  verified?: boolean;
}

export default function ListingCard({
  id,
  title,
  location,
  price,
  image,
  verified,
}: ListingCardProps) {
  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-1">
      <img
        src={image}
        alt={title}
        className="h-64 w-full object-cover"
      />

      <div className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold">{title}</h3>

          {verified && (
            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
              Verified
            </span>
          )}
        </div>

        <p className="mt-2 text-gray-600">{location}</p>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-xl font-semibold">{price}</p>

          <Link
            href={`/listings/${id}`}
            className="rounded-xl bg-black px-4 py-2 text-white hover:opacity-90"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}