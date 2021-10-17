import React, { Component } from "react";
import { Media } from 'reactstrap';
import { useEffect, useState } from "react";


const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        console.log("effect has been run");
        getBooks();
      }, []);

    const getBooks = async () => {
        const response = await fetch(`http://localhost:3001/books`);
        const data = await response.json();
        setBooks(data)
    }
    return(
        <div className="container">
            <div className="row">
            <Media list>
                {books.map((book) => {
                    <div key={book._id} className="col-12 mt-5">
                    <Media tag="li">
                        <Media body>
                            <Media heading>
                                {book.title}
                            </Media>
                            <p>{book.author}</p>
                            <p>{book.pub_date}</p>
                        </Media>
                    </Media>
                </div>
                })}
            </Media>
            </div>
        </div>
    );
}

export default Books;