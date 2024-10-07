import React from "react";

const Card = (props) => {
  // img: "/public/imgs/card_imgs/1.webp",
  // title: "Mashobra, India",
  // type: "Entire Home",
  // info: { guests: 5, bedrooms: 3, bathrooms: 2 },
  // pricePerNight: "$190",
  // rating: "3",
  return (
    <div className="flex flex-col w-max">
      <img
        className="rounded-2xl w-screen sm:w-60 sm:h-60 h-full object-cover"
        src={props.item.img}
        alt={props.item.title + " icon"}
      />
      <div className="flex flex-col w-max px-2">
        <span className="font-bold text-sm sm:text-base flex justify-between items-center mt-2">
          {props.item.title}
        </span>
        <span className="font-normal text-xs flex items-center">{`⭐${props.item.rating}/5`}</span>
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
    </div>
  );
};

export default Card;
