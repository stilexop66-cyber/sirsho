import { useEffect, useState } from "react";
import { Heart, Menu, X } from "lucide-react";
import { cn } from "../utils/cn";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "our-story", label: "Our Story" },
  { id: "moments", label: "Moments" },
  { id: "interests", label: "Us in a Nutshell" },
  { id: "why-yes", label: "Why Say Yes" },
  { id: "proposal", label: "The Question" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "bg-rose-50/90 shadow-md backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <button
          onClick={() => scrollTo("home")}
          className="flex items-center gap-2 font-serif text-lg font-semibold text-rose-700"
        >
          <Heart className="h-5 w-5 fill-rose-500 text-rose-500" />
          <span style={{ fontFamily: "'Great Vibes', cursive" }} className="text-2xl">
            Us, Always
          </span>
        </button>

        <div className="hidden items-center gap-7 md:flex">
          {LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-sm font-medium tracking-wide text-rose-800/80 transition hover:text-rose-600"
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          className="rounded-full p-2 text-rose-700 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="flex flex-col items-center gap-4 bg-rose-50/95 pb-6 pt-2 backdrop-blur-md md:hidden">
          {LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-base font-medium text-rose-800/90"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
