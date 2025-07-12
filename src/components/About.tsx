import React from "react";
const About: React.FC = () => {
  
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 mb-6">
              I'm a passionate full-stack developer with over 5 years of
              experience building web applications that combine beautiful design
              with robust functionality. I love turning complex problems into
              simple, elegant solutions.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or enjoying a good cup of
              coffee while reading about the latest industry trends.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "JavaScript",
                "TypeScript",
                "React",
                "Node.js",
                "Python",
                "AWS",
                "Docker",
                "MongoDB",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=400&fit=crop"
              alt="Coding workspace"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
