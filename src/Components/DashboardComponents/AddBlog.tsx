const AddBlog = () => {
  return (
    <div className="bg-gray-800 rounded-2xl p-10 mr-110">
      <h2 className="text-2xl font-bold mb-8 text-gray-300">Add Blog</h2>

      <div className="mb-6">
        <p className="mb-3 text-gray-300">Upload thumbnail</p>

        <div className="text-gray-300 border border-dashed rounded-xl p-8 flex justify-center">
          <img src="12336" className="w-full" />
        </div>
      </div>

      <label className="block mb-2 text-gray-300">Blog title</label>

      <input
        className="text-gray-300 border rounded-lg p-3 mb-5 w-100 bg-gray-900"
        placeholder="Enter title"
      />

      <button className="mb-5 flex items-center gap-2 text-gray-300 border border-gray-300 p-2 rounded-2xl hover:bg-gray-500 bg-gray-900">
        <i className="fa-solid fa-wand-magic-sparkles"></i>
        AI Generate
      </button>

      <label className="text-gray-300 block mb-2 ">Sub title</label>

      <input
        className="border text-gray-300 border-gray-300 rounded-lg p-3 mb-5 w-100 bg-gray-900"
        placeholder="Type here"
      />

      <label className="block mb-2 text-gray-300">Blog Description</label>

      <textarea className="border rounded-lg p-3 h-40 mb-5" />
      <div className="flex flex-col gap-2 items-start">
        <label className="block mb-2 text-gray-300 ">Blog category</label>

        <select className="border rounded-lg p-3 mb-8 border border-gray-300 text-gray-300">
          <option>All</option>
          <option>Technology</option>
          <option>Startup</option>
          <option>Lifestyle</option>
          <option>Finance</option>
        </select>

        <button className="bg-white px-8 py-3 rounded-lg">Add Blog</button>
      </div>
    </div>
  );
};

export default AddBlog;