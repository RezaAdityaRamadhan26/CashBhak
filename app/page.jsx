import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <main className="min-h-screen w-screen bg-[#f3f5f5] text-slate-900">
      <header className="bg-white shadow-sm relative">
        <div className="max-w-6xl mx-auto px-6 py-2 flex items-center justify-between relative">
          <div className="flex items-center gap-4">
            <Image src="/images/logo.png" alt="Logo" width={50} height={50} />
            <div
              className="font-bold text-xl"
              style={{ fontFamily: "var(--font-poppins)" }}>
              CashBhak
            </div>
          </div>

          <nav className="hidden md:flex gap-4 text-sm font-medium absolute left-1/2 -translate-x-1/2">
            <a
              className="hover:underline font-normal text-base"
              style={{ fontFamily: "var(--font-poppins)" }}>
              Home
            </a>
            <a
              className="hover:underline font-normal text-base"
              style={{ fontFamily: "var(--font-poppins)" }}>
              Features
            </a>
            <a
              className="hover:underline font-normal text-base"
              style={{ fontFamily: "var(--font-poppins)" }}>
              About
            </a>
            <a
              className="hover:underline font-normal text-base"
              style={{ fontFamily: "var(--font-poppins)" }}>
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              className="text-sm"
              style={{ fontFamily: "var(--font-poppins)" }}>
              Sign In
            </a>
            <Button
              className="bg-emerald-400 hover:bg-emerald-500 text-white"
              style={{ fontFamily: "var(--font-poppins)" }}>
              Sign Up
            </Button>
          </div>
        </div>
      </header>

      <section className="relative w-full h-[500px] flex items-center justify-start px-10">
        <Image
          src="/images/hero.png"
          alt="Modern POS System"
          fill
          className="object-cover"
        />

        <div className="max-w-xl space-y-4">
          <h1
            className="text-4xl font-bold leading-snug text-slate-900"
            style={{ fontFamily: "var(--font-poppins)" }}>
            Sistem Kasir Modern <br />
            <span className="text-emerald-500">Untuk Bisnis Anda</span>
          </h1>

          <p className="text-slate-700 text-base leading-relaxed">
            Kelola penjualan, inventori, dan laporan bisnis dengan mudah
            menggunakan sistem kasir terpercaya yang telah digunakan ribuan
            merchant di Indonesia.
          </p>

          <div className="flex gap-3 pt-2">
            <Button className="bg-emerald-400 hover:bg-emerald-500 text-white">
              Try Free Trial 30 Days
            </Button>
            <Button
              variant="outline"
              className="border-slate-400 text-slate-700 hover:bg-slate-100">
              Login
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
