import React from "react";
import NavBar from "../../Components/NavBar/NavBar.jsx";
import { TextField } from "@mui/material";
import BookCard from "../../Components/BookCard/BookCard.jsx";
import { useEffect, useState } from "react";
import axios from "axios";

const AdminHomePage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const fetchBooks = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URI}/books/`
      );
      console.log(response.data);
      setBooks(response.data.data || []); // Access data correctly from response
    } catch (error) {
      setError(error.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchBooks();
  }, []);

  const filteredBooks = books.filter((book) => {
    const searchTerm = search.toLowerCase();
    return (
      book.Title.toLowerCase().includes(searchTerm) ||
      book.Author.toLowerCase().includes(searchTerm) ||
      book.PublishYear.toString().includes(searchTerm)
    );
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className="SearchBar">
        <TextField
          onChange={(event) => setSearch(event.target.value)}
          id="standard-basic"
          label="SEARCH"
          variant="standard"
          sx={{
            width: {
              xs: "80%",
              md: "70%",
              lg: "30%",
            },
            "& .MuiInputBase-input": {
              color: "white", // Text color
            },
            "& .MuiInput-underline:before": {
              borderBottomColor: "white", // Bottom border color before focus
            },
            "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
              borderBottomColor: "white", // Bottom border color on hover
            },
            "& .MuiInput-underline:after": {
              borderBottomColor: "white", // Bottom border color after focus
            },
          }}
          InputLabelProps={{
            style: { color: "white" }, // Label color
          }}
          InputProps={{
            style: { color: "white" }, // Text color
          }}
        />
      </div>
      <div className="BookContainer">
        {filteredBooks.length > 0 ? (
          filteredBooks
            .reverse()
            .map((bookdata) => (
              <BookCard
                reload={fetchBooks}
                admin={true}
                key={bookdata.ISBN}
                data={bookdata}
              />
            ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default AdminHomePage;
