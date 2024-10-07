import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Categories from "../components/Categories";
import ListingCard from "../components/ListingCard";
import SearchBar from "../components/SearchBar";

const HomePage = () => {
  const [listItems, setListItems] = useState([]);
  const [selCategory, setSelCategory] = useState("");

   
  useEffect(() => {
    const updatedData = listItems.filter(item => item.id % 2 === 0);
    setListItems(updatedData);
  }, [selCategory]);

  useEffect(() => {  
    //mocking fetching data
    const mockData = [
      {
        id: 1,
        img: "/imgs/card_imgs/1.webp",
        title: "Mashobra, India",
        type: "Entire Home",
        info: { guests: 5, bedrooms: 3, bathrooms: 2 },
        pricePerNight: "$190",
        rating: "3",
      },
      {
        id: 2,
        img: "/imgs/card_imgs/2.webp",
        title: "Santorini, Greece",
        type: "Villa",
        info: { guests: 4, bedrooms: 2, bathrooms: 2 },
        pricePerNight: "$250",
        rating: "4.5",
      },
      {
        id: 3,
        img: "/imgs/card_imgs/3.webp",
        title: "Kyoto, Japan",
        type: "Traditional House",
        info: { guests: 3, bedrooms: 1, bathrooms: 1 },
        pricePerNight: "$130",
        rating: "4.7",
      },
      {
        id: 4,
        img: "/imgs/card_imgs/4.webp",
        title: "Reykjavik, Iceland",
        type: "Apartment",
        info: { guests: 2, bedrooms: 1, bathrooms: 1 },
        pricePerNight: "$170",
        rating: "4.8",
      },
      {
        id: 5,
        img: "/imgs/card_imgs/5.webp",
        title: "Cape Town, South Africa",
        type: "Beach House",
        info: { guests: 6, bedrooms: 4, bathrooms: 3 },
        pricePerNight: "$300",
        rating: "5",
      },
    ];
    setListItems(mockData);
  }, []);

  return (
    <>
      <Header />
      <SearchBar />
      <Categories setSelCategory={setSelCategory} />
      <ListingCard listItems={listItems} />
      <Footer />
    </>
  );
};

export default HomePage;
