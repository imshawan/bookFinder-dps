import React from "react";

const Homepage = () => {

    return(
        <div className="mt-20" style={{margin: '0px auto'}}>
            <header className="w3-container w3-red w3-center" style={{padding:'128px 16px'}}>
            <h1 className="w3-margin w3-jumbo">Hello Readers!</h1>
            <p className="w3-xlarge">Welcome to bookfinder, your online book store.</p>
            <a href="/about">
                <button className="w3-button w3-black w3-padding-large w3-large w3-margin-top">Get Started</button>
            </a>
            </header>
        </div>
    );
}

export default Homepage;