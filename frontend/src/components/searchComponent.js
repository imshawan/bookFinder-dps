import React from "react";
import { useEffect, useState } from "react";

const Search = () => {
    const [books, setBooks] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    const [query, setQuery] = useState('');
    const [search, setSearch] = useState('');

    useEffect(() => {
        SearchForBooks();
      }, [query]);

    const SearchForBooks = async () => {
        const resp = await fetch(`http://localhost:3001/api/findBooks`, {
            method: 'POST',
            headers: {
                'Origin': '*',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({"tags": query})
        });
        const data = await resp.json();
        if (data.books) {setBooks(data.books); setisLoading(false);}  
    }

    const updateSearch = e => {
        setSearch(e.target.value);
      }

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('')
    }

    return(
        <div>
           <header className="w3-container w3-red w3-center" style={{padding:'40px 16px'}}>
                <h3 className="w3-margin w3-jumbo">Search for Books.</h3>
            </header>

            <form onSubmit={getSearch} className="search-form mt-4">
                <input className="search-bar" type="text" value={search} onChange={updateSearch} />
                <button className="search-button" type="submit">Search</button>
            </form>
            <div className="container mt-5">
                <div className="row">

                        {isLoading ? (search ? (<h3 className='loader' style={{margin: '0px auto'}}>Hang on, Loading content...</h3>) : (
                            <h3 className='loader' style={{margin: '0px auto'}}>Search using tags...</h3>
                        ) ) : (
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

export default Search;