import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ListingDetails = () => {
  const [listItem, setListItem] = useState(null);
  const id = useParams().id;

  useEffect(() => {
    const getItem = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/listings/${id}`
        );
        console.log(response.data);
        setListItem(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getItem();
  }, []);

  console.log(listItem)

  return (
    // id: 9,
    // img: "/imgs/card_imgs/9.webp",
    // title: "Bora Bora",
    // location: "French Polynesia",
    // type: "Overwater Bungalow",
    // info: { guests: 2, bedrooms: 1, bathrooms: 1 },
    // pricePerNight: "$500",
    // rating: "5",
    <>
      {listItem && (
        <div>
          <img src={listItem.img} alt={listItem.title + "'s Icon"} />
          <div>{listItem.type} in {listItem.title}, {listItem.location}</div>
          <div>{listItem.info.guests} guests · {listItem.info.bedrooms} bedrooms · {listItem.info.bathrooms} bathrooms</div>
          <div>{listItem.rating} stars</div>
          <div>{listItem.pricePerNight} night</div>
          <Link to="/book/:id">Book Now</Link>
        </div>
      )}
    </>
  );
};

export default ListingDetails;
