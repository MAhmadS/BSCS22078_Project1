import axios from "axios";
import React, { useEffect, useState } from "react";
import Categories from "../components/Categories";
import ListingCard from "../components/ListingCard";
import SearchBar from "../components/SearchBar";
import Loading from "../components/UI components/Loading";

const HomePage = () => {
  const [listItems, setListItems] = useState([]);
  const [selCategory, setSelCategory] = useState("");
  const [searchText, setSearchText] = useState("");

  const handleSearch = (input) => {
    setSearchText(input);
  };

  useEffect(() => {
    const getListItems = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/listings/search?query=" + searchText
        );
        console.log(response.data);
        setListItems(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getListItems();
  }, [searchText]);

  useEffect(() => {
    const updatedData = listItems.filter((item) => item.id % 2 === 0);
    setListItems(updatedData);
  }, [selCategory]);

  useEffect(() => {
    const getListItems = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/listings");
        console.log(response.data);
        setListItems(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getListItems();
  }, []);

  return (
    <>
      <SearchBar setSearchText={handleSearch} />
      <Categories setSelCategory={setSelCategory} />
      {!listItems && listItems.length === 0 && <Loading />}
      {listItems && <ListingCard listItems={listItems} />}
    </>
  );
};

export default HomePage;
