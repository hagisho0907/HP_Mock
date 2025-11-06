export function AdBanner() {
  return (
    <div className="fixed bottom-6 right-6 z-40 bg-white rounded-lg shadow-2xl overflow-hidden w-64 h-32 hidden lg:block">
      <div className="w-full h-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center p-4">
        <div className="text-white text-center">
          <p className="text-xs mb-1">SPONSORED</p>
          <p>広告バナー</p>
        </div>
      </div>
    </div>
  );
}
