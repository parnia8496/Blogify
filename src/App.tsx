import Header from "./Components/Home/Header";
import LandingPage from "./Components/Home/LandingPage";
import BlogList from "./Components/Home/BlogList";
import Footer from "./Components/Home/Footer";
import BlogCategory from "./Components/Home/BlogCategory";
import Subsribe from "./Components/Home/Subsribe";
import { useState } from "react";
import Dashboard from "./Components/DashboardComponents/Dashboard";
import DashboardHeader from "./Components/DashboardComponents/DashboardHeader";
function Home({ setPage }: { setPage: (page: string) => void }) {
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  return (
    <>
      <Header setPage={setPage} />

      <LandingPage
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        onSearch={() => setSearch(searchInput)}
      />

      <BlogList category={category} setCategory={setCategory} />

      <BlogCategory search={search} category={category} />

      <Subsribe />
      <Footer />
    </>
  );
}

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      {page === "home" && <Home setPage={setPage} />}

      {page === "dashboard" && <Dashboard setPage={setPage} />}
    </>
  );
}
export default App;
