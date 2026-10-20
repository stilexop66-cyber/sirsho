import { Heart } from "lucide-react";
import { yourName } from "../data/content";

export default function Footer() {
  return (
    <footer className="relative bg-rose-950 px-5 py-10 text-center text-rose-100/80">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-3">
        <Heart className="h-5 w-5 fill-rose-300 text-rose-300" />
        <p className="font-serif text-sm">
          Made with love, a little bit of code, and a lot of butterflies — by {yourName}.
        </p>
        <p className="text-xs text-rose-200/50">
          {new Date().getFullYear()} · Here's to us, always.
        </p>
      </div>
    </footer>
  );
}
