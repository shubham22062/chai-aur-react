import { useState } from "react";
import ImageCard from "./ImageCard";

const images = [
  { id: 1, src: "https://i.pinimg.com/1200x/79/6f/93/796f9310b55ce32f0fb35e90031b67ea.jpg", alt: "Random 1" },
  { id: 2, src: "https://i.pinimg.com/736x/1b/bd/e5/1bbde5bb2c98f501e4c00d6502e8f385.jpg", alt: "Random 2" },
  { id: 3, src: "https://i.pinimg.com/1200x/e0/52/b8/e052b895357b402f66a26a4efd8d2553.jpg", alt: "Random 3" },
  { id: 4, src: "https://i.pinimg.com/736x/8c/c9/3e/8cc93e00b0fc563fadf9343f5fc3d060.jpg", alt: "Random 4" },
  { id: 5, src: "https://i.pinimg.com/736x/97/c2/65/97c265863efd4b410ce6e2f27a089693.jpg", alt: "Random 5" },
  { id: 6, src: "https://i.pinimg.com/736x/2d/3e/1d/2d3e1de066af315cd949f5553b1f898f.jpg", alt: "Random 6" },
  { id: 7, src: "https://i.pinimg.com/736x/9b/2b/86/9b2b8622100ffef30e1f9b54adec84ce.jpg", alt: "Random 7" },
  { id: 8, src: "https://i.pinimg.com/originals/5a/83/72/5a8372c5106061aceb05de165645a38d.png", alt: "Random 8" },
];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  const closeLightbox = () => setSelectedImg(null);

  return (
    <div className="w-full min-h-screen bg-gray-100">
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {images.map((img) => (
          <div key={img.id} onClick={() => setSelectedImg(img)}>
            <ImageCard src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImg && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white text-3xl font-bold hover:text-red-400"
          >
            ✕
          </button>

          {/* Large Image */}
          <img
            src={selectedImg.src}
            alt={selectedImg.alt}
            className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-lg"
          />

          {/* Download Button */}
          <a
            href={selectedImg.src}
            download
            className="mt-6 bg-black hover:bg-grey-100 text-white px-6 py-2 rounded-lg shadow-lg transition"
          >
            ⬇ Download
          </a>
        </div>
      )}
    </div>
  );
}
