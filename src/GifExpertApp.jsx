import { useState } from "react";
import AddCategory from "./components/AddCategory";
import Footer from "./components/Footer";
import GifGrid from "./components/GifGrid";
import Header from "./components/Header";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([""]);

  return (
    <>
      <Header />
      <AddCategory setCategories={setCategories} />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
      <Footer />
    </>
  );
};

export default GifExpertApp;
