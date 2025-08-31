import Footer from "./Footer";
import Navbar from "./NavBar";

export default function CommonLayout({ children }: any) {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Navbar />
      <div className="flex flex-1">
        {children} 
      </div>
      <Footer />
    </div>
  );
}
