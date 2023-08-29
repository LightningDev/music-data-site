import Image from "next/image";

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
        <p>{artistName}</p>
        <p>{label}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline btn-accent">Detail</button>
        </div>
      </div>
    </div>
  );
}
