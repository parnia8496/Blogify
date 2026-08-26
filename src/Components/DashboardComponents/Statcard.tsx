const StatCard = ({ icon, number, title }: any) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 mb-5 flex items-center gap-5 shadow-sm hover:scale-110 transition-all">
      <div>{icon}</div>

      <div>
        <h2 className="text-2xl font-bold text-gray-300">{number}</h2>

        <p className="text-gray-400 text-lg">{title}</p>
      </div>
    </div>
  );
};

export default StatCard;
