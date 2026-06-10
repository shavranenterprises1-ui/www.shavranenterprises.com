function Gallery() {
  const images = [
    "/gallery/gallery1.jpg.jpeg",
    "/gallery/gallery2.jpg.jpeg",
    "/gallery/gallery3.jpg.jpeg",
    "/gallery/gallery4.jpg.jpeg",
    "/gallery/gallery5.jpg.jpeg",
    "/gallery/gallery6.jpg.jpeg",
    "/gallery/gallery7.jpg.jpeg",
    "/gallery/gallery8.jpg.jpeg",
    "/gallery/gallery9.jpg.jpeg",
    "/gallery/gallery10.jpg.jpeg",
  ];

  const products = [
  "/product-gallery/product1.jpeg",
  "/product-gallery/product2.jpeg",
  "/product-gallery/product3.jpeg",
  "/product-gallery/product4.jpeg",
  "/product-gallery/product5.jpeg",
  "/product-gallery/product6.jpeg",
  "/product-gallery/product7.jpeg",
  "/product-gallery/product8.jpeg",
];

  return (
    <div id="gallery" className="gallery-page">

       <h1>Our Products</h1>

<div className="gallery-grid">
  {products.map((img, index) => (
    <div className="gallery-card" key={index}>
      <img src={img} alt={`Product ${index + 1}`} />
    </div>
  ))}
</div>

      <h1>Service Images</h1>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <div className="gallery-card" key={index}>
            <img src={img} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;