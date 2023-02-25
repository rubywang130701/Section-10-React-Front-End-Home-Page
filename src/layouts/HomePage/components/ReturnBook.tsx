import React from "react";
// TODO This is a component called ReturnBook. It returns a div containing an image of a book, the book's title, and an option to reserve the book. The book's image is loaded from the ./../../Images/BooksImages/book-luv2code-1000.png path. The component is also utilizing Bootstrap classes for styling.
export const ReturnBook = () => {
  return (
    <div className="col-xs-6 clo-sm-6 col-md-4 col-lg-3 mb-3">
      <div className="text-center">
        <img
          src={require("./../../Images/BooksImages/book-luv2code-1000.png")}
          width="151"
          height="233"
          alt="book"
        />
        <h6 className="mt-2">Book</h6>
        <p>Luv2Code</p>
        <a className="btn main-color text-white" href="#">
          Reserve
        </a>
      </div>
    </div>
  );
};
