import Songs from "@/app/components/music/Songs";

export default function AlbumbSongsPage({
  params,
}: {
  params: { id: string };
}) {
  return <Songs albumbId={params.id} />;
}
