"use client";
import AlbumnCard from "@/app/components/music/AlbumnCard";
import { selectJwtToken, useSelector } from "@/lib/redux";
import { useState, useEffect } from "react";

type Albumn = {
  id: number;
  name: string;
  label: string;
  cover: string;
  releaseDate: string;
  artistName: string;
  artistId: number;
};

export default function ArtistDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const jwtToken = useSelector(selectJwtToken);
  const [albumns, setAlbumns] = useState<Albumn[] | []>([]);

  useEffect(() => {
    if (jwtToken)
      (async () => {
        await fetchAlbumn();
      })();
  }, [jwtToken]);

  const fetchAlbumn = async () => {
    try {
      const response = await fetch(`/api/music/albumns?artist=${params.id}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${jwtToken}`,
        },
      });

      const data = await response.json();

      setAlbumns(data.albumns);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-4 w-full">
      <h1 className="text-xl mb-4">Latest Albumns</h1>
      {albumns.length === 0 && (
        <div className="flex justify-center items-center h-60">
          {" "}
          <span className="loading loading-infinity loading-lg"></span>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {albumns?.map((album) => (
          <AlbumnCard
            key={album.id}
            id={album.id}
            title={album.name}
            coverArtURL={album.cover}
            artistName={album.artistName}
            label={album.label}
          />
        ))}
      </div>
    </div>
  );
}
