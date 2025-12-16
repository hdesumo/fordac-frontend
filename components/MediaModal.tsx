"use client";
import { useEffect } from "react";

export type Media = {
  type: "image" | "video";
  url: string;
  legend?: string;
};

export type MediaModalProps = {
  media: Media | null;
  onClose: () => void;
};

export default function MediaModal(props: MediaModalProps) {
  const { media, onClose } = props;

  if (!media) return null;

  // Fermeture via ESC
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full bg-white rounded-lg overflow-hidden shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-black bg-white bg-opacity-70 hover:bg-opacity-100 p-2 rounded-full"
        >
          ✕
        </button>

        {/* IMAGE */}
        {media.type === "image" && (
          <img
            src={media.url}
            alt={media.legend ?? ""}
            className="w-full object-contain max-h-[80vh]"
          />
        )}

        {/* VIDEO */}
        {media.type === "video" && (
          <video
            controls
            src={media.url}
            className="w-full max-h-[80vh]"
          />
        )}

        {media.legend && (
          <p className="p-4 bg-gray-100 text-gray-700 text-center text-sm">
            {media.legend}
          </p>
        )}
      </div>
    </div>
  );
}
