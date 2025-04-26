
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">Will Smith</h1>
          <div className="space-x-4">
            <Button variant="ghost" className="text-white hover:text-gray-300">About</Button>
            <Button variant="ghost" className="text-white hover:text-gray-300">Career</Button>
            <Button variant="ghost" className="text-white hover:text-gray-300">Awards</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
