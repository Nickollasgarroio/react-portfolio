import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3 mt-6">
        <div className="text-sm flex items-center gap-2 opacity-80">
          <p className="text">Made by using</p>
          <p className="text-custom-violet-400">React + HeroUI</p>
        </div>
      </footer>
    </div>
  );
}
