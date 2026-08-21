import { useState } from "react";
import Header from "./Header";
import LandingPage from "./LandingPage";
import BlogList from "./BlogList";
import Footer from "./Footer";
import BlogCategory from "./BlogCategory";
import Subsribe from "./Subsribe";
function App() {
 const [searchInput, setSearchInput] = useState("");
 const [search, setSearch] = useState("");
const [category, setCategory] = useState("All");
  return (
    <>
      <Header />
      <LandingPage
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        onSearch={() => setSearch(searchInput)}
      />
      <BlogList category={category} setCategory={setCategory} />{" "}
      <BlogCategory search={search} category={category} /> <Subsribe />
      <Footer />
    </>
  );
}

export default App;
