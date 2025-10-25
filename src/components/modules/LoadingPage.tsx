export default function LoadingPage() {
  return (
    
    <div className="flex items-center justify-center flex-1 h-full sticky top-40 bg-gray-50">
      <div className="flex flex-col items-center h-full gap-4">
        
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

        
        <h1 className="text-lg font-semibold text-gray-700">
          Loading, please wait...
        </h1>
      </div>
    </div>
    
  );
}
