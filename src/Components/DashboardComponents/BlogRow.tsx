import StatusBadge from "./StatusBadge";
import ActionButton from "./ActionButton";

const BlogRow = ({ blog }: any) => {
  return (
    <tr className="border-b">
      <td className="py-5 text-gray-300">{blog.id}</td>

      <td className="py-5 max-w-md text-gray-300">{blog.title}</td>

      <td className="py-5 text-gray-300">{blog.date}</td>

      <td className="py-8">
        <StatusBadge status={blog.status} />
      </td>

      <td className="py-4">
        <ActionButton />
      </td>
    </tr>
  );
};

export default BlogRow;
