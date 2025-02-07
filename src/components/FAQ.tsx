import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-display font-medium text-center mb-16">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {[
            {
              question: "What services do you offer for small businesses?",
              answer:
                "We offer comprehensive financial services including tax planning, bookkeeping, financial analysis, business advisory, and growth strategy development. Our approach is tailored to each business's unique needs and goals.",
            },
            {
              question: "How do you charge for your services?",
              answer:
                "Our fees are structured based on the complexity and scope of services required. We offer both project-based and retainer pricing models. During our initial consultation, we'll discuss your needs and provide a transparent pricing proposal.",
            },
            {
              question: "What makes your approach different?",
              answer:
                "We combine technical expertise with a personalized approach. Unlike larger firms, we provide dedicated attention to each client, ensuring strategies are tailored to your specific goals and circumstances. We also emphasize proactive planning rather than reactive solutions.",
            },
            {
              question: "How often should we meet to review my financial plan?",
              answer:
                "We typically recommend quarterly reviews for most clients, with more frequent meetings during significant life changes or business transitions. However, we'll customize the meeting frequency based on your specific needs and preferences.",
            },
          ].map((faq, index) => (
            <div key={index} className="border-b border-primary-200 pb-4">
              <button
                className="w-full flex justify-between items-center text-left"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-display font-medium text-primary-800">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-warm-600 transform transition-transform ${
                    openFaq === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`mt-2 text-primary-600 transition-all duration-300 ${
                  openFaq === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
