const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-primary-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-display font-medium text-center mb-16">
          Client Testimonials
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "John Smith",
              role: "Business Owner",
              image:
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
              text: "Saksham's expertise in tax planning saved our business thousands of dollars. His strategic approach to financial planning has been invaluable.",
            },
            {
              name: "Emily Johnson",
              role: "Entrepreneur",
              image:
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
              text: "Working with Saksham has transformed our company's financial strategy. His insights and dedication to our success have been exceptional.",
            },
            {
              name: "Michael Chen",
              role: "Tech Executive",
              image:
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
              text: "Saksham's wealth management advice has been crucial in helping me plan for retirement. His attention to detail and personalized approach sets him apart.",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-display font-medium">
                    {testimonial.name}
                  </div>
                  <div className="text-primary-500 text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
              <p className="text-primary-600 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
