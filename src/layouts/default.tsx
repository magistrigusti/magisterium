import { Link } from "@heroui/link";

import { Navbar } from "@/components/hero-components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-4">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3">
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="http://allodium.netlify.app/ "
          title="Allodium homepage"
        >
          <span className="text-default-600">Powered by</span>
          <p className="text-orange-400">ALLODIUM™ Fondation</p>
        </Link>
      </footer>
    </div>
  );
}
