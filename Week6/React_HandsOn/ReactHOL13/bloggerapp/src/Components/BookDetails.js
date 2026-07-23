import React from "react";

function BookDetails() {

  const books = [
    {
      id: 1,
      title: "React in Action",
      author: "Mark Tielens",
      price: "₹650"
    },
    {
      id: 2,
      title: "Learning JavaScript",
      author: "Ethan Brown",
      price: "₹540"
    },
    {
      id: 3,
      title: "Spring Boot Guide",
      author: "Craig Walls",
      price: "₹720"
    }
  ];

  return (
    <div className="card">
      <h2>📚 Book Details</h2>

      {
        books.map(book => (
          <div key={book.id} className="item">
            <h3>{book.title}</h3>
            <p>Author : {book.author}</p>
            <p>Price : {book.price}</p>
          </div>
        ))
      }

    </div>
  );
}

export default BookDetails;