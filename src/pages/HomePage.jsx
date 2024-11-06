import axios from "axios";
import React, { useEffect, useState } from "react";
import Categories from "../components/Categories";
import ListingCard from "../components/ListingCard";
import SearchBar from "../components/SearchBar";

const HomePage = () => {
  const [listItems, setListItems] = useState([]);
  const [selCategory, setSelCategory] = useState("");

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
      <SearchBar />
      <Categories setSelCategory={setSelCategory} />
      <ListingCard listItems={listItems} />
    </>
  );
};

export default HomePage;
