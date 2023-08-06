import React from "react";
import "../../style/Gallery.css";
const Gallery = () => {
  return (
    <>
      <section id="Gallery">
        <div class="container-fluid">
          <h1 class="text-center fst-bold">Our Gallery</h1>
          <div class="d-flex flex-row flex-wrap justify-content-center">
            <div class="d-flex flex-column">
              <img src="image.png" class="img-fluid" />
              <img src="image1.png" class="img-fluid" />
            </div>

            <div class="d-flex flex-column">
              <img src="image2.png" class="img-fluid" />

              <img src="image3.png" class="img-fluid scale" />
            </div>

            <div class="d-flex flex-column">
              <img
                src="image4.png"
                class="img-fluid scale mb-2"
              />
              <img
                src="image5.png"
                class="img-fluid"
              />
            </div>

            <div class="d-flex flex-column">
              <img
                src="image6.png"
                class="img-fluid m-1 p-1"
              />
              <img
                src="image7.png"
                class="img-fluid image m-1 p-1"
              />
            </div>
            <div class="d-flex flex-column">
              <img
                src="image8.png"
                class="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
