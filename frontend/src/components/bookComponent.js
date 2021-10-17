import React from "react";
import { useEffect, useState } from "react";

const Books = () => {
    const [books, setBooks] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {
        console.log("effect has been run");
        getBooks();
      }, []);

    const getBooks = async () => {
        const response = await fetch(`http://localhost:3001/api/books`);
        const data = await response.json();
        setBooks(data)
        setisLoading(false)
    }

    return(
        <div className="container mt-4">
            <div className="row">
                
                    {isLoading ? (<h3 className='loader' style={{margin: '0px auto'}}>Loading, Please wait...</h3>) : (
                        books.map((book, index) => (
                            <div className="col-auto mb-3" style={{margin: '0px auto'}}>
                                <div key={index} className="card" style={{width: '20rem', height: '12rem'}}>
                                    <div class="card-body">
                                        <h5 class="card-title mt-3">{book.title}</h5>
                                        <h6 class="card-subtitle mb-2 text-muted">By {book.author}</h6>
                                        <p class="card-text mt-4">Publishing date: {book.pub_date}</p>
                                    </div>
                                </div>
                            </div>
                            )
                        )
                    )}
            </div>
        </div>
    );
}

export default Books;