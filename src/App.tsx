import BlogList from "./BlogList";
import Header from "./Header";
import LandingPage from "./LandingPage";
import BlogCategory from "./BlogCategory";


const App = () => {
  return (
    <div>
      <Header />
      <LandingPage />
      <BlogList />
      <BlogCategory/>
    </div>
  );
};

export default App;
