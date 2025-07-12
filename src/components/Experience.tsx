import React from "react";
const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description:
        "Led development of scalable web applications using React, Node.js, and cloud technologies. Mentored junior developers and improved team productivity by 40%.",
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency Co.",
      period: "2020 - 2022",
      description:
        "Built responsive websites and web applications for clients across various industries. Specialized in React, TypeScript, and modern CSS frameworks.",
    },
    {
      title: "Junior Developer",
      company: "StartupXYZ",
      period: "2019 - 2020",
      description:
        "Contributed to product development using JavaScript, HTML, and CSS. Collaborated with designers to implement pixel-perfect user interfaces.",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {exp.title}
                  </h3>
                  <p className="text-blue-600 font-medium">{exp.company}</p>
                </div>
                <span className="text-gray-500 text-sm mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>
              <p className="text-gray-600">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
