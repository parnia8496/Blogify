import { useState } from "react";
import DashboardHeader from "./DashboardHeader";
import Sidebar from "./Sidebar";
import StatCard from "./Statcard";
import BlogTable from "./BlogTable";
import DashboardBlogList from "./DashboardBlogList";
import AddBlog from "./AddBlog";
import Comments from "./Comments";
const Dashboard = ({ setPage }: { setPage: (page: string) => void }) => {
  const [activePage, setActivePage] = useState("dashboard");

  return (
    <div>
      <DashboardHeader />

      <div className="flex">
        <Sidebar setPage={setActivePage} page={activePage} />
        <main className="flex-1 px-10 py-10">
          {activePage === "dashboard" && (
            <>
              <div className="grid grid-cols-3 gap-10">
                <StatCard
                  icon={
                    <div className="bg-white p-5 rounded-2xl">
                      <i className="fa-regular fa-square-check text-3xl"></i>
                    </div>
                  }
                  number="10"
                  title="Blogs"
                />

                <StatCard
                  icon={
                    <div className="bg-white p-5 rounded-2xl">
                      <i className="fa-regular fa-comment-dots text-3xl"></i>
                    </div>
                  }
                  number="27"
                  title="Comments"
                />

                <StatCard
                  icon={
                    <div className="bg-white p-5 rounded-2xl">
                      <i className="fa-regular fa-pen-to-square text-3xl"></i>
                    </div>
                  }
                  number="4"
                  title="Drafts"
                />
              </div>

              <BlogTable />
            </>
          )}
          {activePage === "list-blog" && <DashboardBlogList />}{" "}
          {activePage === "add-blog" && <AddBlog />}{" "}
          {activePage === "comments" && <Comments />}{" "}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
