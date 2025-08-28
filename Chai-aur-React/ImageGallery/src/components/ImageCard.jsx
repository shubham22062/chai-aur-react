export default function ImageCard({ src, alt }) {
    return (
        <div className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
            <img src={src} alt={alt} className="w-full h-60 object-cover" />
        </div>
    );
}