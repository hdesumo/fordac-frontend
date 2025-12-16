"use client";

export default function Pagination({
  page,
  total,
  onNext,
  onPrev,
}: {
  page: number;
  total: number;
  onNext: () => void;
  onPrev: () => void;
}) {
  return (
    <div className="flex items-center justify-center space-x-4 mt-6">
      <button
        onClick={onPrev}
        disabled={page <= 1}
        className="px-4 py-2 bg-gray-200 text-gray-600 rounded disabled:opacity-50 hover:bg-gray-300"
      >
        Précédent
      </button>

      <span className="font-semibold">
        Page {page} sur {total}
      </span>

      <button
        onClick={onNext}
        disabled={page >= total}
        className="px-4 py-2 bg-gray-200 text-gray-600 rounded disabled:opacity-50 hover:bg-gray-300"
      >
        Suivant
      </button>
    </div>
  );
}
