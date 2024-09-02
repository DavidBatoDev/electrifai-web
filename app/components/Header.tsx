import { Zap } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link className="flex items-center justify-center" href="#">
        <Zap className="h-6 w-6 text-primary" />
        <span className="ml-2 text-2xl font-bold text-primary">ElectricAI</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
          Features
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
          Team
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
          Roadmap
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
          Contact
        </Link>
      </nav>
    </header>
  );
}

export default Header;
