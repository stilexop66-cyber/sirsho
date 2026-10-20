import { useEffect, useRef, useState } from "react";
import { Music, Volume2, VolumeX } from "lucide-react";
import { backgroundSongUrl, backgroundSongLabel } from "../data/content";

export default function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.play().catch(() => setPlaying(false));
    } else {
      audioRef.current.pause();
    }
  }, [playing]);

  if (!backgroundSongUrl) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <audio ref={audioRef} src={backgroundSongUrl} loop />
      <button
        onClick={() => setPlaying((p) => !p)}
        className="group flex items-center gap-2 rounded-full bg-white/90 px-4 py-3 text-rose-700 shadow-lg shadow-rose-200/60 ring-1 ring-rose-200 backdrop-blur transition hover:bg-rose-50"
        title={playing ? "Pause our song" : `Play "${backgroundSongLabel}"`}
      >
        {playing ? (
          <Volume2 className="h-5 w-5 animate-pulse" />
        ) : (
          <VolumeX className="h-5 w-5" />
        )}
        <Music className="hidden h-4 w-4 sm:block" />
        <span className="hidden text-xs font-medium sm:block">{backgroundSongLabel}</span>
      </button>
    </div>
  );
}
