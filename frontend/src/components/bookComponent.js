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
        <div>
            <header className="w3-container w3-red w3-center" style={{padding:'40px 16px'}}>
                <h2 className="w3-margin w3-jumbo">Viewing all books.</h2>
            </header>
            <div className="container mt-5">
                <div className="row">
                    
                        {isLoading ? (<h3 className='loader' style={{margin: '0px auto'}}>Loading, Please wait...</h3>) : (
                            books.map((book, index) => (
                                <div className="col-auto mb-5 card-view">
                                    <div key={index} className="card" style={{width: '20rem', height: '12rem', border: 'none'}}>
                                        <div class="card-body">
                                            <h4 class="card-title mt-3">{book.title}</h4>
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
        </div>
    );
}

export default Books;