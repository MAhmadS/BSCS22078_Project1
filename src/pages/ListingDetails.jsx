import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../components/UI components/Loading";

const ListingDetails = () => {
  console.log("ListingDetails.jsx");
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const [listItem, setListItem] = useState(null);
  const id = useParams().id;

  useEffect(() => {
    const getItem = async () => {
      try {
        const response = await axios.get(
          BACKEND_URL + `/api/listings/${id}`
        );
        console.log(response.data);
        setListItem(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getItem();
  }, []);

  console.log(listItem);

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
      {!listItem && <Loading />}
      {listItem && (
        <div className="grid md:grid-cols-2 py-5 justify-center items-center gap-5">
          <img
            className="border-sky-500 border-2 p-0.5 ml-auto justify-self-right h-full max-h-96"
            src={BACKEND_URL + "/" + listItem.img}
            alt={listItem.title + "'s Icon"}
          />
          <div className="m-auto w-full xl:w-3/4">
            <div className="text-2xl xl:text-3xl">{listItem.type} </div>
            <div className="font-bold xl:text-lg">
              in {listItem.title}, {listItem.location}
            </div>
            <div className="text-lg">⭐ {listItem.rating} <span className="text-sm">/ 5</span></div>
            <ul className="font-bold xl:text-2xl p-2 bg-gray-200 my-3">
              Details:
              <li className="font-normal text-sm xl:text-lg list-disc py-0.5 mx-5">
                {listItem.info.bedrooms} Bedrooms
              </li>
              <li className="font-normal text-sm xl:text-lg list-disc py-0.5 mx-5">
                {listItem.info.bathrooms} Bathrooms
              </li>
              <li className="font-normal text-sm xl:text-lg list-disc py-0.5 mx-5">
                {listItem.info.guests} Guests Allowed
              </li>
            </ul>
            <div className="">
              <div className="text-2xl xl:text-3xl flex gap-1 items-center py-3">
                {listItem.pricePerNight}
                <div className="text-sm">/night</div>
              </div>
              <div className="w-max bg-sky-500 font-bold my-1 text-gray-50 xl:text-xl hover:bg-gray-300 hover:text-gray-950 shadow-sm shadow-gray-400 p-2 box-border">
                <Link
                  to={`/book/${listItem.id}`}
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ListingDetails;
