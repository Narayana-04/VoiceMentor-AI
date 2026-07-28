export default function StatCard({ title, value, icon }) {
  return (
    <div className="bg-[#1E293B] rounded-xl p-6">

      <div className="text-4xl mb-3">
        {icon}
      </div>

      <h3 className="text-gray-400">
        {title}
      </h3>

      <p className="text-3xl font-bold mt-2">
        {value}
      </p>

    </div>
  );
}