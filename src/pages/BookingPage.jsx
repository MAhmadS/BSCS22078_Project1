import React from "react";
import { useParams } from "react-router-dom";

const BookingPage = () => {
  const id = useParams().id;
  return <div>BookingPage of {id}</div>;
};

export default BookingPage;
