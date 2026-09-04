import { GlassCard } from "@/components/ui/glass-card";

export default function Spotify() {
  return (
    <>
      <div>
        <GlassCard accent="emerald">
          <iframe
            data-testid="embed-iframe"
            src="https://open.spotify.com/embed/playlist/77wlN8MDJyyiSLc3exoy8j?utm_source=generator&si=f2b8a6fe54364e4b"
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </GlassCard>
      </div>
    </>
  );
}
