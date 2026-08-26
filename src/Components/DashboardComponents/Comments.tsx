import { useState } from "react";

const Comments = () => {
  const [comments, setComments] = useState([
    {
      blog: "Learning new technology to boost your career in software",
      name: "Jack London",
      comment: "Hi this blog is must to read",
      date: "4/22/2025",
      status: "Approved",
    },
    {
      blog: "Enhancing your skills and capturing memorable moments",
      name: "Peter Lawrence",
      comment:
        "Honestly, I did not expect this to work, but it totally did. Saved my project!",
      date: "4/22/2025",
      status: "Approved",
    },
    {
      blog: "A detailed step by step guide to manage your lifestyle",
      name: "Michael Scott",
      comment: "This is my new comment",
      date: "4/30/2025",
      status: "Not Approved",
    },
    {
      blog: "How to create an effective startup roadmap or ideas",
      name: "John Doe",
      comment: "This is a nice blog",
      date: "4/29/2025",
      status: "Not Approved",
    },
    {
      blog: "Tips for getting the most out of apps and software",
      name: "Sam Smith",
      comment: "This is the best blog, everybody should read it",
      date: "4/22/2025",
      status: "Not Approved",
    },
  ]);
  const handleDelete = (index) => {
    const confirmDelete = window.confirm("Do you want to delete this comment?");

    if (confirmDelete) {
      setComments((prev) => prev.filter((_, i) => i !== index));
    }
  };
  const [activeTab, setActiveTab] = useState("Approved");

  const filteredComments = comments.filter((item) =>
    activeTab === "Approved"
      ? item.status === "Approved"
      : item.status === "Not Approved",
  );

  return (
    <div className="min-h-screen bg-[#111827] p-8 text-white">
      {/* Tabs */}
      <div className="flex gap-6 border-b border-gray-700 mb-6">
        <button
          onClick={() => setActiveTab("Approved")}
          className={`pb-3 ${
            activeTab === "Approved"
              ? "text-green-400 border-b-2 border-green-400"
              : "text-gray-400"
          }`}
        >
          Approved
        </button>

        <button
          onClick={() => setActiveTab("Not Approved")}
          className={`pb-3 ${
            activeTab === "Not Approved"
              ? "text-green-400 border-b-2 border-green-400"
              : "text-gray-400"
          }`}
        >
          Not Approved
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-gray-800 rounded-lg">
        <table className="w-full">
          <thead>
            <tr className="text-gray-400 border-b border-gray-700">
              <th className="p-4 text-left">Blog Title & Comment</th>

              <th className="p-4">Date</th>

              <th className="p-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredComments.map((comment, index) => (
              <tr key={index} className="border-b border-gray-700">
                <td className="p-4">
                  <p>
                    <span className="font-bold">Blog :</span> {comment.blog}
                  </p>

                  <p className="mt-3">
                    <span className="font-bold">Name :</span> {comment.name}
                  </p>

                  <p className="mt-3">
                    <span className="font-bold">Comment :</span>{" "}
                    {comment.comment}
                  </p>
                </td>

                <td className="p-4 text-gray-400">{comment.date}</td>

                <td className="p-4">
                  <div className="flex gap-3">
                    <button className="bg-green-600 p-2 rounded-full">✓</button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="bg-red-600 p-2 rounded-full"
                    >
                      🗑
                    </button>{" "}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Comments;
