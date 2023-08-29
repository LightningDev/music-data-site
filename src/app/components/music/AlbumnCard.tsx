import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AlbumnCard({
  id,
  title,
  coverArtURL,
  label,
  artistName,
}: {
  id: number;
  title: string;
  coverArtURL: string;
  label: string;
  artistName: string;
}) {
  const router = useRouter();

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure className="lg:w-[50%]">
        {coverArtURL ? (
          <img src={coverArtURL} alt={`${title} cover`} />
        ) : (
          <Image
            src="/images/albumn-cover.png"
            alt="albumn-cover"
            width="500"
            height="500"
          />
        )}
      </figure>
      <div className="card-body lg:w-[50%]">
        <h2 className="card-title">{title}</h2>
        <p>
          <strong>Singer:</strong> {artistName}
        </p>
        <p>
          <strong>Label:</strong> {label}
        </p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-outline btn-accent"
            onClick={() => router.push(`/music/albumn/${id}`)}
          >
            Detail
          </button>
        </div>
      </div>
    </div>
  );
}
