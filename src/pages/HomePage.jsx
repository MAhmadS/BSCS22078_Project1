import axios from "axios";
import React, { useEffect, useState } from "react";
import Categories from "../components/Categories";
import ListingCard from "../components/ListingCard";
import SearchBar from "../components/SearchBar";
import Loading from "../components/UI components/Loading";
import NothingToShow from "../components/UI components/NothingToShow";
import Error from "../components/UI components/Error";

const HomePage = () => {
  const BACKEND_URL = "http://localhost:5000";
  const [listItems, setListItems] = useState(null);
  const [selCategory, setSelCategory] = useState("");
  const [searchText, setSearchText] = useState("");
  const [error, setError] = useState(false);

  const handleSearch = (input) => {
    setSearchText(input);
  };

  useEffect(() => {
    if (searchText === "") return;
    const getListItems = async () => {
      try {
        const response = await axios.get(
          BACKEND_URL + "/api/listings/search?query=" + searchText
        );
        console.log(response.data);
        setListItems(response.data);
      } catch (error) {
        console.error(error);
        setError(error);
      }
    };
    getListItems();
  }, [searchText]);

  useEffect(() => {
    if (listItems === null) return;
    const updatedData = listItems.filter((item) => item.id % 2 === 0);
    setListItems(updatedData);
  }, [selCategory]);

  useEffect(() => {
    const getListItems = async () => {
      try {
        const response = await axios.get(BACKEND_URL + "/api/listings");
        console.log(response.data);
        setListItems(response.data);
      } catch (error) {
        console.error(error);
        setError(error);
      }
    };
    getListItems();
  }, []);

  return (
    <>
      <SearchBar setSearchText={handleSearch} />
      <Categories setSelCategory={setSelCategory} />
      {!listItems && error && <Error />}
      {!listItems && !error && <Loading />}
      {listItems && listItems.length === 0 && <NothingToShow />}
      {listItems && listItems.length > 0 && (
        <ListingCard listItems={listItems} />
      )}
    </>
  );
};

export default HomePage;
