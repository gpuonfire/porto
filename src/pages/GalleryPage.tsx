import imageData from "../assets/projects-data.json"

export default function GalleryPage() {
  const images = imageData.images

  return (
    <>
      <h1 className="m-5" >Gallery Page</h1>
      <section>
        <h2 className="text-center m-4" >Sketches</h2>
        <div className=" p-2 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {images.map((image) => (
              <div
                key={image.id}
                className={`${image.className} overflow-hidden`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:opacity-70 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
