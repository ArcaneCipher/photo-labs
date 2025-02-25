import { useState } from "react";

/**
 * SearchBar Component - Allows users to search photos by username, city, or country.
 * @param {Function} onSearch - Function to handle search queries.
 */
const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("name"); // Default to searching by username

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchTerm.trim() === "") return;
    onSearch(searchType, searchTerm); // Trigger search with selected type and term
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <select value={searchType} onChange={(e) => setSearchType(e.target.value)}>
        <option value="fullname">Name</option>
        <option value="city">City</option>
        <option value="country">Country</option>
      </select>

      <input
        type="text"
        placeholder="Search photos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
