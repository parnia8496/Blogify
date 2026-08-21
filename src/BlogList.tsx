type Props = {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
};

const BlogList = ({ setCategory }: Props) => {
  const categories = ["All", "Technology", "Startup", "Lifestyle", "Finance"];

  return (
    <div className="flex justify-evenly gap-1 text-gray-300 mt-10">
      {categories.map((item) => (
        <span
          key={item}
          onClick={() => setCategory(item)}
          className="cursor-pointer hover:text-white"
        >
          {item}
        </span>
      ))}
    </div>
  );
};

export default BlogList;
