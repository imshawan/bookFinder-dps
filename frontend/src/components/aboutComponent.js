import React from "react";

const Aboutpage = () => {

    return(
        <div style={{margin: '0px auto'}}>
            <header className="w3-container w3-red w3-center" style={{padding:'40px 16px'}}>
                <h2 className="w3-margin w3-jumbo">About.</h2>
            </header>
            
            <div class="w3-row-padding w3-light-grey w3-padding-64 w3-container">
            <div class="w3-content">
                <div class="w3-third w3-center">
                <i class="fa fa-book w3-padding-64 w3-text-red w3-margin-right" style={{fontSize: '200px'}}></i>
                </div>

                <div class="w3-twothird">
                <h1>What is BookFinder about?</h1>
                <h5 class="w3-padding-32">BookFinder is a full-stack application that can store, retrive and search for book information safely to a mongo database and can be used to store book informations with its meta contents.</h5>
                <h1>Usage?</h1>
                <ul className="mt-4">
                    <li><a href="/">Visit</a> Homepage</li>
                    <li><a href="/about">Read</a> about</li>
                    <li><a href="/books">View</a> all the avaliable books present on the database</li>
                    <li><a href="/addBooks">Add</a> books information to the database with its meta data</li>
                    <li><a href="/search">Search</a> for a book present on the database</li>
                </ul>

                </div>
            </div>
            </div>
        </div>
    );
}

export default Aboutpage;