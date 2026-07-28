export default function Topbar() {
  return (
    <div className="h-20 bg-[#1E293B] flex items-center justify-between px-8">

      <h2 className="text-2xl font-bold">
        Dashboard
      </h2>

      <div className="flex items-center gap-4">

        <img
          src="https://i.pravatar.cc/100"
          alt=""
          className="w-12 h-12 rounded-full"
        />

        <div>
          <h3>Sharath</h3>
          <p className="text-sm text-gray-400">
            English Learner
          </p>
        </div>

      </div>

    </div>
  );
}