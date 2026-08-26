import BlogRow from "./BlogRow";
const blogs = [
  {
    id: 1,
    title: "A detailed step by step guide to manage your lifestyle",
    date: "Mon Apr 21 2025",
    status: "Published",
  },
  {
    id: 2,
    title: "How to create an effective startup roadmap or ideas",
    date: "Mon Apr 21 2025",
    status: "Published",
  },
  {
    id: 3,
    title: "Learning new technology to boost your career in software",
    date: "Mon Apr 21 2025",
    status: "Published",
  },
  {
    id: 4,
    title: "Tips for getting the most out of apps and software",
    date: "Mon Apr 21 2025",
    status: "Published",
  },
  {
    id: 5,
    title: "Enhancing your skills and capturing memorable moments",
    date: "Mon Apr 21 2025",
    status: "Published",
  },
  {
    id: 6,
    title: "Maximizing returns by minimizing resources in your startup",
    date: "Mon Apr 21 2025",
    status: "Published",
  },
  {
    id: 7,
    title: "Taxes on Luxury Houses",
    date: "Mon Apr 21 2025",
    status: "Published",
  },
  {
    id: 8,
    title: "The New Way of Study",
    date: "Thu Apr 24 2025",
    status: "Published",
  },
  {
    id: 9,
    title: "Importance of Tourism",
    date: "Tue Apr 29 2025",
    status: "Published",
  },
  {
    id: 10,
    title: "AI best practices in healthcare",
    date: "Tue Apr 29 2025",
    status: "Published",
  },
];

const BlogTable = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-5 text-gray-300">Latest Blogs</h2>

      <div className="bg-gray-800 rounded-xl p-6 mt-8">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-300 border-b">
                <th className="py-4">#</th>
                <th className="py-4">Blog Title</th>
                <th className="py-4">Date</th>
                <th className="py-4">Status</th>
                <th className="py-4">Actions</th>
              </tr>
            </thead>

            <tbody>
              {blogs.map((blog) => (
                <BlogRow key={blog.id} blog={blog} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BlogTable;
