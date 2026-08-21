export interface Blog {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  createdAt: string;
  author: string;
}

export const BlogData: Blog[] = [
  {
    id: "1",
    title: "A Simple Step-by-Step Guide to Managing Your Lifestyle",
    description: "A detailed step by step guide to manage your lifestyle",
    category: "Lifestyle",
    image: "/blog_pic_1-Vndvg-NA.png",
    createdAt: "2025-01-15",
    author: "Admin",
  },
  {
    id: "2",
    title: "Creating an Effective Startup Roadmap",
    description: "How to create an effective startup roadmap or ideas",
    category: "Startup",
    image: "/blog_pic_2-CubA8WLf.png",
    createdAt: "2025-01-20",
    author: "Admin",
  },
  {
    id: "3",
    title: "Learning New Tech to Boost Your Software Career",
    description: "Learning new technology to boost your career in software",
    category: "Technology",
    image: "/blog_pic_3-VOQeV7e1.png",
    createdAt: "2025-01-25",
    author: "Admin",
  },
  {
    id: "4",
    title: "Tips for Getting the Most Out of Apps and Software",
    description: "Tips for getting the most out of apps and software",
    category: "Technology",
    image: "/blog_pic_4-BsTv5AMX.png",
    createdAt: "2025-02-01",
    author: "Admin",
  },
  {
    id: "5",
    title: "Enhancing Your Skills and Capturing Memorable Moments",
    description: "Enhancing your skills and capturing memorable moments",
    category: "Lifestyle",
    image: "/blog_pic_5-ClPSSpD9.png",
    createdAt: "2025-02-05",
    author: "Admin",
  },
  {
    id: "6",
    title: "Maximizing Returns by Minimizing Resources in Your Startup",
    description: "Maximizing returns by minimizing resources in your startup",
    category: "Startup",
    image: "/blog_pic_6.png",
    createdAt: "2025-02-10",
    author: "Admin",
  },
  {
    id: "7",
    title:
      "Luxury Home Taxes: Are They Fair, and What Do They Mean for the Market?",
    description: "Taxes on Luxury Houses",
    category: "Finance",
    image: "/blog_pic_7-Dfn1t5km.png",
    createdAt: "2025-02-15",
    author: "Admin",
  },
  {
    id: "8",
    title: "The New Way of Study: Ditching the Old, Embracing the Now",
    description: "The New Way of Study",
    category: "Startup",
    image: "/blog_pic_8-BxvldwTw.png",
    createdAt: "2025-02-20",
    author: "Admin",
  },
  {
    id: "9",
    title: "Beyond Postcards: Why Tourism Matters More Than You Think",
    description: "Importance of Tourism",
    category: "Lifestyle",
    image: "/blog_pic_9-moSXhuWk.png",
    createdAt: "2025-02-25",
    author: "Admin",
  },
  {
    id: "10",
    title: "The Rise of Artificial Intelligence in Modern Technology",
    description: "AI is Everywhere: How Artificial Intelligence is Taking Over",
    category: "Technology",
    image: "/blog_pic_10-DLw5xdDp.png",
    createdAt: "2025-03-01",
    author: "Admin",
  },
];

export default function BlogList() {
  return (
    <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-10">
      {BlogData.map((blog) => (
        <article
          key={blog.id}
          className="overflow-hidden rounded-xl border bg-gray-800 shadow-sm"
        >
          <img
            src={blog.image}
            alt={blog.title}
            className="h-56 w-full object-cover"
          />

          <div className="p-5">
            <span className="rounded bg-gray-600 px-3 py-1 text-sm text-gray-300">
              {blog.category}
            </span>

            <h2 className="mt-3 text-xl font-semibold text-white">{blog.title}</h2>

            <p className="mt-2 text-gray-300">{blog.description}</p>

            <div className="mt-4 flex justify-between text-sm text-gray-500">
              <span>{blog.author}</span>
              <span>{blog.createdAt}</span>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
