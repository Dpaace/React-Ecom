import React from "react";
import Contact from "./Contact";
import Gallery from "./Gallery";
import About from "./About";
import "../../style/home.css";

const Home = () => {
  return (
    <>
      <section className="home pb-5" style={{ backgroundColor: "#75C2F6 " }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 mt-5 py-3">
              <h1 className="text-danger ms-5 fw-bold">
                Find Out Which{" "}
                <span className="text-dark">Products Are the Best</span>
              </h1>
              <br />
              <p className="text-light ms-5 fs-5 fst-italic">
                Are you interested in purchasing or selling some goods? Join us
                right away.
              </p>
              <br />
            </div>
            <div className="col-md-5 text-center">
              <img
                src="https://cache.quantocustaviajar.com/blog/wp-content/uploads/2017/11/compras-online.gif"
                alt=""
                style={{ width: "40rem", height: "25rem" }}
                className="py-2 img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      <div
        className="container-fluid rgbs shadow-lg p-3 pt-5 mb-5 bg-orange rounded"
        style={{ color: "white", backgroundColor: "#0B666A" }}
      >
        <div className="row">
          <div className="col-md-6">
            <p className="fs-5">Do you need assistance?</p>
            <h1>Contact Us Directly to Dispel Your Doubts.</h1>
            <p className="fs-5">You Can Count on Us to Help You Out.</p>
          </div>
          <div className="col-md-6 mt-5 py-5 text-center">
            <a
              href="#contact-form"
              className="btn btn-warning ms-2 fw-bold fs-5"
              type="submit"
            >
              Contact Now
            </a>
          </div>
        </div>
      </div>

      <About />
      <Gallery />
      <Contact />
    </>
  );
};

export default Home;
