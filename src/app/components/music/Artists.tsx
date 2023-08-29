"use client";
import { selectJwtToken, useSelector } from "@/lib/redux";
import { useState, useEffect } from "react";
import Pagination from "../utils/Pagination";

type Artist = {
  id: number;
  name: string;
  rating: number;
};

export default function Artists() {
  const jwtToken = useSelector(selectJwtToken);
  const [artists, setArtists] = useState<Artist[] | []>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    if (jwtToken)
      (async () => {
        await fetchArtists();
      })();
  }, [jwtToken]);

  // Get current artists
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentArtists = artists?.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const fetchArtists = async () => {
    try {
      const response = await fetch("/api/music/artist?top=25", {
        method: "GET",
        headers: {
          authorization: `Bearer ${jwtToken}`,
        },
      });

      const data = await response.json();

      setArtists(data.artists);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="w-[50%] mt-12 p-6 bg-white rounded-lg shadow-md"
      style={{ height: "80vh" }}
    >
      <h2 className="text-2xl font-bold mb-4">Top 25 Artists</h2>
      {artists.length === 0 ? (
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
                <th>Rating</th>
                <th className="w-[10%]"></th>
              </tr>
            </thead>
            <tbody>
              {currentArtists?.length > 0 &&
                currentArtists.map((artist, index) => (
                  <tr key={artist.id}>
                    <td>
                      {currentPage > 1
                        ? index + 1 + (currentPage - 1) * postsPerPage
                        : index + 1}
                    </td>
                    <td className="font-bold">{artist.name}</td>
                    <td>{artist.rating}</td>
                    <td>
                      <a
                        href={`/music/artists/${artist.id}`}
                        className="btn btn-ghost btn-xs"
                      >
                        Albums
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={artists?.length || 0}
            paginate={paginate}
            currentPage={currentPage}
          />
        </>
      )}
    </div>
  );
}
