export default function TopBar() {
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">silverwolf.dev</h1>
        <div className="flex space-x-4">
          <a href="https://silverwolf.dev" className="text-white hover:underline">Home</a>
          <a href="https://silverwolf.dev/about" className="text-white hover:underline">About</a>
          <a href="https://github.com/Mewtwo2387" className="text-white hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </nav>
  )
}