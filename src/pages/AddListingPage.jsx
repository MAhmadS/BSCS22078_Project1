import React, { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const AddListingPage = () => {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const BACKEND_URL = "http://localhost:5000";
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    type: "",
    info: { guests: "", bedrooms: "", bathrooms: "" },
    pricePerNight: "",
    rating: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name in formData.info) {
      setFormData({
        ...formData,
        info: { ...formData.info, [name]: value },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("location", formData.location);
    formDataToSend.append("type", formData.type);

    formDataToSend.append("info", JSON.stringify(formData.info));
    formDataToSend.append("pricePerNight", "Rs. " + formData.pricePerNight);
    formDataToSend.append("rating", formData.rating);
    formDataToSend.append("img", formData.image);

    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/listings/`,
        formDataToSend,
        {
          headers: {
            Authorization: "Bearer " + authContext.token,
          },
        }
      );
      console.log("Listing added successfully:", response.data);
      alert("Listing added successfully!");
      navigate("/listings/user/" + authContext.user.userId);
    } catch (error) {
      console.error("Error adding listing:", error);
    }
  };

  return (
    <div className="max-w-2xl my-10 mx-auto p-4">
      <h1 className="text-2xl font-semibold text-center text-sky-500 mb-4">
        Rent a New Place
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            name="title"
            maxLength={30}
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        <div>
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700"
          >
            Location
          </label>
          <input
            type="text"
            name="location"
            maxLength={30}
            value={formData.location}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        <div>
          <label
            htmlFor="type"
            className="block text-sm font-medium text-gray-700"
          >
            Type
          </label>
          <input
            type="text"
            name="type"
            maxLength={30}
            value={formData.type}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label
              htmlFor="guests"
              className="block text-sm font-medium text-gray-700"
            >
              Guests
            </label>
            <input
              type="number"
              name="guests"
              min={1}
              max={999999}
              value={formData.info.guests}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          <div>
            <label
              htmlFor="bedrooms"
              className="block text-sm font-medium text-gray-700"
            >
              Bedrooms
            </label>
            <input
              type="number"
              name="bedrooms"
              min={1}
              max={999999}
              value={formData.info.bedrooms}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          <div>
            <label
              htmlFor="bathrooms"
              className="block text-sm font-medium text-gray-700"
            >
              Bathrooms
            </label>
            <input
              type="number"
              name="bathrooms"
              min={1}
              max={999999}
              value={formData.info.bathrooms}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="pricePerNight"
            className="block text-sm font-medium text-gray-700"
          >
            Price Per Night
          </label>
          <input
            type="number"
            name="pricePerNight"
            min={1}
            max={999999}
            value={formData.pricePerNight}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        <div>
          <label
            htmlFor="rating"
            className="block text-sm font-medium text-gray-700"
          >
            Rating
          </label>
          <input
            type="number"
            min={0}
            max={5}
            step={0.1}
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        <div>
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700"
          >
            Image
          </label>
          <input
            type="file"
            name="image"
            onChange={handleFileChange}
            accept=".jpg,.jpeg,.png"
            required
            className="w-full p-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-sky-500 text-white p-2 rounded-md hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
        >
          Rent It
        </button>
      </form>
    </div>
  );
};

export default AddListingPage;