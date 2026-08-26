const ActionButton = () => {
  return (
    <div className="flex gap-2
    ">
      <button className="flex items-center gap-2 text-gray-400 border p-2 border-gray-600 rounded-[2px]">
        Unpublish{" "}
      </button>
      <div className=" bg-black py-1 px-2 flex items-center rounded-full">
        <i className="fa-solid fa-xmark text-green-500"></i>
      </div>
    </div>
  );
};

export default ActionButton;
