import React from 'react'
import "./Searchbox.css"

const searchResults = () => {
    //fetch and display search results
}

const searchOnEnter = (event) => {
    if(event.key==='Enter'){
        searchResults();
    }
    else {
    }
}

const Searchbox = () => {
    return (
        <div className = "Container">
            <p id="tagLine" className="TagLine">Latest Reviews, Lowest Prices</p>
            <textarea id="searchTextBox" className = "SearchBox" 
                onKeyPress={searchOnEnter} 
                placeholder="Search Hotels, Restaurants, and More"/>
            <button id="Search" className = "SearchButton" 
                onClick={searchResults}>Search</button>
        </div>
    )
}

export default Searchbox