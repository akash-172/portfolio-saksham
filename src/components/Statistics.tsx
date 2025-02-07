const Statistics = () => {
  return (
    <section className="py-12 bg-primary-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 text-white text-center">
          {[
            { number: "3+", label: "Years Experience" },
            { number: "500+", label: "Clients Served" },
            { number: "$100M+", label: "Assets Managed" },
            { number: "98%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <div
              key={index}
              className="opacity-0 animate-[fadeIn_1s_ease-out_forwards]"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-4xl font-display font-medium mb-2">
                {stat.number}
              </div>
              <div className="text-primary-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
