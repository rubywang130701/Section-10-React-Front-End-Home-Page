/* eslint-disable jsx-a11y/anchor-is-valid */
import { ReturnBook } from "./ReturnBook";
// TODO
//  The Carousel component seems to be a React component that displays a carousel of books. It uses Bootstrap classes to create the layout of the component.
//  The component has a container element with a fixed height and a title. Inside the container, there is a Bootstrap carousel that displays the books. Each book is displayed using the ReturnBook component, which is not shown in the code provided.
//  The carousel has previous and next buttons that allow the user to navigate through the books. There is also a mobile version of the component that displays only one book at a time.
//  At the bottom of the component, there is a button to view more books, although its functionality is not implemented in the code provided.
export const Carousel = () => {
  return (
    <div className="container mt-5" style={{ height: 550 }}>
      <div className="homepage-carousel-title">
        <h3>Find your text "I stayed up too late reading" book.</h3>
      </div>
      <div
        id="carouselExampleControls"
        className="carousel carousel-dark slide mt-5 d-none d-lg-block"
        data-bs-interval="false"
      >
        {/* Desktop  */}
        <div className="carousle-inner">
          <div className="carousel-item active">
            <div className="row d-flex justify-content-center align-items-center">
            <ReturnBook/>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row d-flex justify-conten-center align-items-center">
              <ReturnBook/>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row d-flex justify-conten-center align-items-center">
              <ReturnBook/>
            </div>
          </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouseIExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouseIExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        {/* Mobile */}
        <div className="d-lg-none mt-3">
          <div className="row d-flex justify-content-center align-items-center">
            <ReturnBook/>
        </div>
      </div>
      <div className="homepage-carousel-title mt-3">
        <a className="btn btn-outline-secondary btn=lg" href="#">
          View More
        </a>
      </div>
    </div>
  );
}