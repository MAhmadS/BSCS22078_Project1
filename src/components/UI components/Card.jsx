import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  // img: "/public/imgs/card_imgs/1.webp",
  // title: "Mashobra, India",
  // type: "Entire Home",
  // info: { guests: 5, bedrooms: 3, bathrooms: 2 },
  // pricePerNight: "$190",
  // rating: "3",
  return (
    <Link className="flex flex-col w-full" to={`/listings/${props.item.id}`}>
      <img
        className="rounded-2xl w-screen md:h-60 h-full object-center object-cover"
        src={props.item.img}
        alt={props.item.title + " icon"}
      />
      <div className="flex flex-col w-max px-2">
        <span className="font-bold text-lg sm:text-lg flex justify-between items-center mt-2">
          {props.item.title}, {props.item.location}
        </span>
        <span className="font-normal text-xs flex items-center">{`⭐${props.item.rating} / 5`}</span>
        <span className="text-xs sm:text-sm font-bold mt-1">
          Type: <span className="font-normal">{props.item.type}</span>
        </span>
        <span className="text-xs sm:text-sm ">{`${props.item.info.bedrooms} bedrooms, ${props.item.info.bathrooms} bathrooms,`}</span>
        <span className="text-xs sm:text-sm ">{`${props.item.info.guests} guests allowed`}</span>
        <span className=" mt-1">
          <span className="font-bold text-sm sm:text-base">
            {props.item.pricePerNight}
          </span>{" "}
          per night
        </span>
      </div>
    </Link>
  );
};

export default Card;
