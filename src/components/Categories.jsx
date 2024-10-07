import React, { useState } from "react";
import Tabs from "./UI components/Tabs";

const Categories = () => {
    const [selCategory, setSelCategory] = useState("");
  const tabItems = [
    { name: "Icons", img: "/imgs/cat_icons/1.webp" },
    { name: "Rooms", img: "/imgs/cat_icons/2.jpg" },
    { name: "Top cities", img: "/imgs/cat_icons/3.jpg" },
    { name: "Amazing views", img: "/imgs/cat_icons/4.jpg" },
    { name: "Historic homes", img: "/imgs/cat_icons/5.jpg" },
  ];
  return <Tabs tabItems={tabItems} />;
};

export default Categories;
