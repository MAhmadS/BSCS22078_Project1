import React from "react";
import Card from "./UI components/Card";

const ListingCard = () => {
  const listItems = [
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

  return (
    // <div className="grid gri gap-6">
    <div className="my-5 flex justify-center gap-6 flex-wrap">
      {listItems.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ListingCard;
