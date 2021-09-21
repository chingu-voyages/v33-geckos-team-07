import React from 'react'

const SearchBar = () => (
 <form action="/" method="get">
     <label htmlFor='hashtag-search'>
        {/* <span className="visually-hidden">Search photos</span> */}
     </label>
    <input
        type="text"
        id="hashtag-search"
        placeholder="Search photos"
        name="s"
    />
    <button type="submit">Search</button>
 </form>
);

export default SearchBar
