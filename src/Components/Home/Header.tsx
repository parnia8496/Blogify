const Header = ({ setPage }: { setPage: (page: string) => void }) => {
  return (
    <div>
      <header className="flex justify-between px-10">
        <img src="logo_light-DzgmMZ9Z.svg" alt="" />
        <div className="flex items-center gap-5">
          <i className="fa-regular fa-sun text-yellow-400"></i>
          <div className="py-2 px-10 bg-white rounded-3xl flex justify-between gap-2 items-center">
            <button onClick={() => setPage("dashboard")}>Dashboard</button>
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
