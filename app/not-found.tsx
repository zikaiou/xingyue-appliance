import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="bg-[#050507] text-white min-h-screen font-sans flex items-center justify-center px-6 py-32">
      <div className="text-center max-w-lg">
        <p className="text-[#ff2f7d] text-7xl md:text-8xl font-black tracking-tight">404</p>
        <h1 className="text-2xl md:text-3xl font-bold mt-4">Page Not Found</h1>
        <p className="mt-3 text-white/50 text-sm">
          The page you are looking for does not exist or may have been moved. 
          Explore our professional garment care products instead.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-[#ff2f7d] text-white font-semibold rounded-full text-sm hover:bg-[#e6006f] transition">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <Link href="/products" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-full text-sm hover:border-white/50 transition">
            Browse Products <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
