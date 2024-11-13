import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ListingDetails from "./pages/ListingDetails";
import BookingPage from "./pages/BookingPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/listings/:id" element={<ListingDetails />} />
        <Route exact path="/book/:id" element={<BookingPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
