
type Props = {
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
  onSearch: () => void;
};

const LandingPage = ({ searchInput, setSearchInput, onSearch }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center mt-30">
      <div className="bg-gray-800 rounded-2xl border-1 border-gray-300 py-1 px-5 flex justify-between items-center gap-2">
        <h2 className="text-white">New: AI feature integrated</h2>
        <img src="download.svg" alt="" />
      </div>

      <div className="flex flex-col text-center mt-5 gap-10">
        <h1 className="text-white text-3xl sm:text-6xl font-bold text-center sm:max-w-2xl mx-auto">
          Your own blogging platform
        </h1>

        <p className="text-gray-500 text-[13px]">
          This is your space to think out loud, to share what matters, and to
          write without filters. Whether it's one word or a thousand, your story
          starts right here.
        </p>
      </div>

      <div className="bg-gray-800 h-15 px-5 rounded-xl min-w-[500px] flex justify-between items-center mt-5">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="text-gray-300 w-full h-full border-none outline-none"
          placeholder="Search For Blogs"
        />
        <button onClick={onSearch} className="bg-white px-3 h-10 rounded-xl">
          Search
        </button>{" "}
      </div>
    </div>
  );
};

export default LandingPage;
