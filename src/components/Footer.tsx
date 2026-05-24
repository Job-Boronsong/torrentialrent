export default function Footer() {
  return (
    <footer className="border-t bg-white py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <div>
          <h3 className="text-xl font-bold">RentGH</h3>

          <p className="text-sm text-gray-500">
            Trusted rental listings in Ghana.
          </p>
        </div>

        <div className="flex gap-6 text-sm text-gray-600">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
}