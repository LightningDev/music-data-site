import Lyrics from "@/app/components/music/Lyrics";

export default function LyricsPage({ params }: { params: { id: string } }) {
  return <Lyrics songId={params.id} />;
}
