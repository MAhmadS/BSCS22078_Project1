import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Categories from "../components/Categories";
import ListingCard from "../components/ListingCard";
import SearchBar from "../components/SearchBar";

const HomePage = () => {
  return (
    <>
      <Header />
      <SearchBar />
      <Categories />
      <ListingCard />
      <Footer />
    </>
  );
};

export default HomePage;
