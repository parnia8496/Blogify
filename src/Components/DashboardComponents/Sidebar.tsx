const Sidebar = ({
  setPage,
  page,
}: {
  setPage: (page: string) => void;
  page: string;
}) => {
  const menuItems = [
    {
      name: "dashboard",
      label: "Dashboard",
      icon: "fa-house",
    },
    {
      name: "add-blog",
      label: "Add Blogs",
      icon: "fa-square-plus",
    },
    {
      name: "list-blog",
      label: "Blog Lists",
      icon: "fa-square-check",
    },
    {
      name: "comments",
      label: "Comments",
      icon: "fa-comment-dots",
    },
  ];

  return (
    <aside className="w-64 min-h-screen bg-gray-900 border-r border-r-gray-600 py-10">
      <nav className="flex flex-col gap-4">
        {menuItems.map((item) => (
          <button
            key={item.name}
            onClick={() => setPage(item.name)}
            className={`flex items-center gap-3 p-3 w-full pl-10 text-lg transition
              ${
                page === item.name
                  ? "bg-gray-800 text-white border-r-4 border-gray-500"
                  : "text-gray-400"
              }
            `}
          >
            <i className={`fa-regular ${item.icon} text-gray-300`}></i>

            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
