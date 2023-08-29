import AlbumnCard from "@/app/components/music/AlbumnCard";

const albumsData = [
  {
    id: 1,
    title: "Album 1",
    coverArtURL:
      "https://upload.wikimedia.org/wikipedia/en/7/77/Maroon_5_-_Overexposed.png",
    artist: "Artist Name 1",
  },
  {
    id: 1,
    title: "Album 1",
    coverArtURL:
      "https://upload.wikimedia.org/wikipedia/en/7/77/Maroon_5_-_Overexposed.png",
    artist: "Artist Name 1",
  },
  {
    id: 1,
    title: "Album 1",
    coverArtURL:
      "https://upload.wikimedia.org/wikipedia/en/7/77/Maroon_5_-_Overexposed.png",
    artist: "Artist Name 1",
  },
];

export default function ArtistDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Albums</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {albumsData.map((album) => (
          <AlbumnCard
            key={album.id}
            title={album.title}
            coverArtURL={album.coverArtURL}
            artist={album.artist}
          />
        ))}
      </div>
    </div>
  );
}
