import Link from "next/link";
const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="bg-green-600">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-green-500 lg:border-none">
          <Link
            href="/"
            className="font-custom text-base font-medium text-white hover:text-green-50"
          >
            Company name
          </Link>
          <div className="flex items-center">
            <div className="hidden ml-10 space-x-8 lg:block">
              {navigation.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-white hover:text-green-50"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          {navigation.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-base font-medium text-white hover:text-green-50"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
