


const GlobalSkeleton = () => {
  return (
    <div className="bg-brand-light min-h-screen">
      
      <header className="bg-white/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-200 rounded-md animate-pulse"></div>
              <div className="w-24 h-6 bg-gray-200 rounded animate-pulse"></div>
            </div>
            <div className="hidden lg:flex items-center space-x-8">
              <div className="w-16 h-4 bg-gray-200 rounded animate-pulse"></div>
              <div className="w-16 h-4 bg-gray-200 rounded animate-pulse"></div>
              <div className="w-16 h-4 bg-gray-200 rounded animate-pulse"></div>
              <div className="w-16 h-4 bg-gray-200 rounded animate-pulse"></div>
            </div>
            <div className="hidden lg:block w-32 h-10 bg-gray-200 rounded-lg animate-pulse"></div>
            <div className="lg:hidden w-8 h-8 bg-gray-200 rounded-md animate-pulse"></div>
          </div>
        </div>
      </header>

      <main className="animate-pulse">

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="h-12 bg-gray-300 rounded w-3/4"></div>
              <div className="h-12 bg-gray-200 rounded w-1/2"></div>
              <div className="h-6 bg-gray-200 rounded w-full"></div>
              <div className="h-6 bg-gray-200 rounded w-5/6"></div>
              <div className="flex space-x-4 pt-4">
                <div className="h-14 w-40 bg-gray-300 rounded-lg"></div>
                <div className="h-14 w-40 bg-gray-200 rounded-lg"></div>
              </div>
            </div>
            <div className="hidden lg:block h-96 bg-gray-300 rounded-2xl"></div>
          </div>
        </div>
        

        <div className="py-20 sm:py-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mx-auto max-w-2xl">
                    <div className="h-6 bg-gray-200 rounded w-1/4 mx-auto"></div>
                    <div className="h-10 bg-gray-300 rounded w-3/4 mx-auto mt-4"></div>
                    <div className="h-5 bg-gray-200 rounded w-full mx-auto mt-4"></div>
                </div>
                <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                    <div className="bg-white p-8 rounded-2xl shadow-lg h-56 space-y-4">
                        <div className="h-16 w-16 rounded-full bg-gray-200"></div>
                        <div className="h-6 bg-gray-300 rounded w-1/2"></div>
                        <div className="h-4 bg-gray-200 rounded w-full"></div>
                        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    </div>
                     <div className="bg-white p-8 rounded-2xl shadow-lg h-56 space-y-4">
                        <div className="h-16 w-16 rounded-full bg-gray-200"></div>
                        <div className="h-6 bg-gray-300 rounded w-1/2"></div>
                        <div className="h-4 bg-gray-200 rounded w-full"></div>
                        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    </div>
                     <div className="bg-white p-8 rounded-2xl shadow-lg h-56 space-y-4">
                        <div className="h-16 w-16 rounded-full bg-gray-200"></div>
                        <div className="h-6 bg-gray-300 rounded w-1/2"></div>
                        <div className="h-4 bg-gray-200 rounded w-full"></div>
                        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    </div>
                </div>
            </div>
        </div>


        <div className="py-20 sm:py-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
                <div className="text-center mx-auto max-w-2xl">
                    <div className="h-6 bg-gray-200 rounded w-1/3 mx-auto"></div>
                    <div className="h-10 bg-gray-300 rounded w-full mx-auto mt-4"></div>
                </div>
                <div className="mt-12 space-y-4">
                    <div className="h-16 bg-white rounded-lg shadow"></div>
                    <div className="h-16 bg-white rounded-lg shadow"></div>
                    <div className="h-16 bg-white rounded-lg shadow"></div>
                    <div className="h-16 bg-white rounded-lg shadow"></div>
                </div>
            </div>
        </div>

         
      </main>
    </div>
  );
};

export default GlobalSkeleton;
