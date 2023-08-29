"use client";
import { selectJwtToken, useSelector } from "@/lib/redux";
import { useState, useEffect } from "react";

type Lyrics = {
  id: number;
  desc: string;
  pixelUrl: string;
  scriptUrl: string;
};

export default function Lyrics({ songId }: { songId: string }) {
  const jwtToken = useSelector(selectJwtToken);
  const [lyrics, setLyrics] = useState<Lyrics>({} as Lyrics);

  useEffect(() => {
    if (jwtToken)
      (async () => {
        await fetchLyrics();
      })();
  }, [jwtToken]);

  const fetchLyrics = async () => {
    try {
      const response = await fetch(`/api/music/lyrics?song=${songId}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${jwtToken}`,
        },
      });

      const data = await response.json();

      setLyrics(data.lyrics);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Song Lyrics</h1>
      <pre className="whitespace-pre-line">{lyrics.desc}</pre>
      <img src={`${lyrics.pixelUrl}`} />
    </div>
  );
}
