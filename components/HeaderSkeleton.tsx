function HeaderSkeleton() {
  return (
    <header className="bg-blue-600 text-white px-6 py-4 shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-2xl font-bold">Whatbytes</div>
        <div className="relative w-full sm:w-1/2">
          <div className="w-full h-10 bg-blue-500 rounded-full"></div>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-blue-800 px-4 py-2 rounded-full flex items-center gap-2">
            <div className="w-5 h-5 bg-blue-700 rounded"></div>
            <span className="text-sm font-medium">Cart</span>
          </div>
          <div className="w-7 h-7 bg-blue-700 rounded-full"></div>
        </div>
      </div>
    </header>
  );
}
export default HeaderSkeleton;
