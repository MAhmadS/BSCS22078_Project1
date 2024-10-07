import React from "react";
import Card from "./UI components/Card";

const ListingCard = (props) => {

  return (
    // <div className="grid gri gap-6">
    <div className="my-5 flex justify-center gap-6 flex-wrap">
      {props.listItems.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ListingCard;
