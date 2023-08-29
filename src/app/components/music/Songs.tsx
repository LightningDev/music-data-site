"use client";
import { selectJwtToken, useSelector } from "@/lib/redux";
import { useState, useEffect } from "react";
import Pagination from "../utils/Pagination";

type Song = {
  id: number;
  name: string;
  artistName: string;
  artistId: string;
};

export default function Songs({ albumbId }: { albumbId: string }) {
  const jwtToken = useSelector(selectJwtToken);
  const [songs, setSongs] = useState<Song[] | []>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    if (jwtToken)
      (async () => {
        await fetchSongs();
      })();
  }, [jwtToken]);

  // Get current songs
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentSongs = songs?.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const fetchSongs = async () => {
    try {
      const response = await fetch(`/api/music/songs?albumn=${albumbId}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${jwtToken}`,
        },
      });

      const data = await response.json();

      setSongs(data.songs);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="w-[50%] mt-12 p-6 bg-white rounded-lg shadow-md"
      style={{ height: "80vh" }}
    >
      <h2 className="text-2xl font-bold mb-4">Albumb's Songs</h2>
      {songs.length === 0 ? (
        <div className="flex justify-center items-center h-60">
          {" "}
          <span className="loading loading-infinity loading-lg"></span>
        </div>
      ) : (
        <>
          <table className="table w-full mb-4">
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Artist</th>
                <th className="w-[10%]"></th>
              </tr>
            </thead>
            <tbody>
              {currentSongs?.length > 0 &&
                currentSongs.map((song, index) => (
                  <tr key={song.id}>
                    <td>
                      {currentPage > 1
                        ? index + 1 + (currentPage - 1) * postsPerPage
                        : index + 1}
                    </td>
                    <td className="font-bold">{song.name}</td>
                    <td>{song.artistName}</td>
                    <td>
                      <a
                        href={`/music/songs/${song.id}`}
                        className="btn btn-ghost btn-xs"
                      >
                        View Lyrics
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={songs?.length || 0}
            paginate={paginate}
            currentPage={currentPage}
          />
        </>
      )}
    </div>
  );
}
