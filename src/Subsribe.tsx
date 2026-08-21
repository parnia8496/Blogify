import { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    console.log("clicked");

    if (email === "") {
      alert("Please enter your email");
      return;
    }

    alert("You have been subscribed!");
    setEmail("");
  };
  return (
    <div className="mt-10 flex flex-col">
      <h3 className="text-white text-3xl font-bold text-center">
        Never Miss a Blog!
      </h3>

      <p className="text-gray-500 text-center">
        Subscribe to get the latest blog, new tech, and exclusive news.
      </p>

      <div className="bg-gray-800 h-15 pl-5 rounded-xl flex justify-between items-center mt-5">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="text-gray-300 w-full h-full border-none outline-none"
          placeholder="Enter Your Email Id"
        />

        <button
          onClick={handleSubscribe}
          className="bg-white px-10 h-15 rounded-r-xl text-center"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
