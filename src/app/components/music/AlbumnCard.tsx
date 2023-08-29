export default function AlbumnCard({
  title,
  coverArtURL,
  artist,
}: {
  title: string;
  coverArtURL: string;
  artist: string;
}) {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img src={coverArtURL} alt={`${title} cover`} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{artist}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
  );
}
