import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface PhotoLightboxProps {
  images: { src: string; alt: string }[];
  initialIndex: number;
  onClose: () => void;
}

const PhotoLightbox = ({ images, initialIndex, onClose }: PhotoLightboxProps) => {
  const [index, setIndex] = useState(initialIndex);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const prev = useCallback(() => setIndex((i) => (i > 0 ? i - 1 : images.length - 1)), [images.length]);
  const next = useCallback(() => setIndex((i) => (i < images.length - 1 ? i + 1 : 0)), [images.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, prev, next]);

  const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (images.length < 2) {
      return;
    }

    e.stopPropagation();
    const bounds = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - bounds.left;

    if (clickX < bounds.width / 2) {
      prev();
      return;
    }

    next();
  };

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/92 flex items-center justify-center animate-fade-in"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-20 text-white/70 hover:text-white transition-colors p-2"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            prev();
          }}
          className="absolute left-2 sm:left-6 z-20 text-white/55 hover:text-white transition-colors p-2"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
      )}

      <div
        className="relative max-h-[90vh] max-w-[92vw] px-10 sm:px-14 cursor-pointer"
        onClick={handleImageClick}
        onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchStart === null) {
            return;
          }

          const diff = e.changedTouches[0].clientX - touchStart;
          if (Math.abs(diff) > 50) {
            diff > 0 ? prev() : next();
          }
          setTouchStart(null);
        }}
      >
        <img
          src={images[index].src}
          alt={images[index].alt}
          className="max-h-[90vh] max-w-full object-contain rounded-xl select-none shadow-2xl"
          draggable={false}
        />

        {images.length > 1 && (
          <>
            <div className="absolute inset-y-0 left-0 w-1/2" aria-hidden="true" />
            <div className="absolute inset-y-0 right-0 w-1/2" aria-hidden="true" />
          </>
        )}
      </div>

      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            next();
          }}
          className="absolute right-2 sm:right-6 z-20 text-white/55 hover:text-white transition-colors p-2"
          aria-label="Next image"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      )}

      {images.length > 1 && (
        <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/65 text-xs font-body tracking-[0.18em] uppercase">
          {index + 1} / {images.length}
        </p>
      )}
    </div>
  );
};

export default PhotoLightbox;
