import {
  FaGoogle,
  FaMicrosoft,
  FaAmazon,
  FaApple,
} from "react-icons/fa";

function Trusted() {
  const companies = [
    {
      icon: <FaGoogle className="text-5xl text-red-500" />,
      name: "Google",
    },
    {
      icon: <FaMicrosoft className="text-5xl text-blue-500" />,
      name: "Microsoft",
    },
    {
      icon: <FaAmazon className="text-5xl text-yellow-500" />,
      name: "Amazon",
    },
    {
      icon: <FaApple className="text-5xl text-gray-300" />,
      name: "Apple",
    },
  ];

  return (
    <section className="bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-4xl font-bold text-white">
          Trusted by Learners Worldwide
        </h2>

        <p className="text-center text-gray-400 mt-4 text-lg">
          Thousands of learners improve their English every day with VoiceMentor AI.
        </p>

        <div className="grid md:grid-cols-4 gap-8 mt-16">

          {companies.map((company, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-2xl p-8 text-center border border-slate-700 hover:border-cyan-400 transition duration-300"
            >
              <div className="flex justify-center">
                {company.icon}
              </div>

              <h3 className="mt-5 text-xl font-semibold text-white">
                {company.name}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Trusted;