export default function Pagination({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
}: {
  postsPerPage: number;
  totalPosts: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md p-4 flex justify-center space-x-4">
      <ul className="flex gap-2">
        {currentPage !== 1 && (
          <li>
            <button
              className="px-3 py-1 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-full"
              onClick={() => paginate(currentPage - 1)}
            >
              Prev
            </button>
          </li>
        )}

        {pageNumbers.map((number) => (
          <li key={number} className="text-center">
            <button
              onClick={() => paginate(number)}
              className={`px-3 py-1 rounded-full ${
                currentPage === number
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {number}
            </button>
          </li>
        ))}

        {currentPage !== pageNumbers.length && (
          <li>
            <button
              className="px-3 py-1 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-full"
              onClick={() => paginate(currentPage + 1)}
            >
              Next
            </button>
          </li>
        )}
      </ul>
    </div>
  );
}
