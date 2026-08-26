const StatusBadge = ({ status }: any) => {
  return (
    <span className=" text-green-600 px-4 py-1 rounded-full text-sm">
      {status}
    </span>
  );
};

export default StatusBadge;
