import { Clock, FileText, Trophy, User } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="transform hover:scale-105 transition-transform duration-300">
            <img
              src="/saksham1-crop.jpeg"
              alt="Professional portrait"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-display font-medium mb-6">About Me</h2>
            <p className="text-primary-600 mb-6">
              With over 3 years of experience in financial consulting and tax
              planning, I've helped hundreds of clients achieve their financial
              goals and optimize their tax positions. My approach combines
              technical expertise with a deep understanding of each client's
              unique needs.
            </p>
            <p className="text-primary-600 mb-6">
              As a Experienced Financial Planner, I bring a wealth of knowledge
              and professional expertise to every client relationship. My
              mission is to help you build and preserve wealth while navigating
              complex financial landscapes.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Trophy />, text: "3+ Years Experience" },
                { icon: <User />, text: "500+ Clients Served" },
                { icon: <FileText />, text: "Experienced Consultant" },
                { icon: <Clock />, text: "24/7 Support" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 hover:text-warm-600 transition-colors"
                >
                  <div className="text-warm-600">{item.icon}</div>
                  <span className="text-primary-700">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
