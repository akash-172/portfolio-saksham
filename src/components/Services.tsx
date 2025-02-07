import {
  Calculator,
  BarChart as ChartBar,
  Shield,
  Briefcase,
  Building,
  PieChart,
} from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="py-20 bg-primary-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-display font-medium text-center mb-16">
          Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Calculator className="w-8 h-8 text-warm-600" />,
              title: "Tax Planning & Preparation",
              description:
                "Strategic tax planning and accurate preparation for individuals and businesses. Maximize deductions and minimize tax liability.",
            },
            {
              icon: <ChartBar className="w-8 h-8 text-warm-600" />,
              title: "Financial Analysis",
              description:
                "Comprehensive financial analysis and forecasting to guide your decisions. Data-driven insights for better financial outcomes.",
            },
            {
              icon: <Shield className="w-8 h-8 text-warm-600" />,
              title: "Risk Management",
              description:
                "Identify and mitigate financial risks to protect your assets. Comprehensive insurance and investment risk analysis.",
            },
            {
              icon: <Briefcase className="w-8 h-8 text-warm-600" />,
              title: "Investment Planning",
              description:
                "Strategic investment planning aligned with your goals. Portfolio optimization and retirement planning.",
            },
            {
              icon: <Building className="w-8 h-8 text-warm-600" />,
              title: "Business Advisory",
              description:
                "Expert business financial advisory services. Growth strategies and operational efficiency optimization.",
            },
            {
              icon: <PieChart className="w-8 h-8 text-warm-600" />,
              title: "Wealth Management",
              description:
                "Comprehensive wealth management solutions. Long-term wealth preservation and growth strategies.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-all duration-100 transform hover:-translate-y-1"
            >
              {service.icon}
              <h3 className="text-xl font-display font-medium mt-4 mb-2">
                {service.title}
              </h3>
              <p className="text-primary-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
