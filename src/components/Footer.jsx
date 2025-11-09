export default function Footer(){
  return (
    <footer className="mt-16 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 text-sm text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>
          © {new Date().getFullYear()} Foodie Finder. Bon appétit!
        </p>
        <p>
          Built for exploring flavors around you.
        </p>
      </div>
    </footer>
  )
}
