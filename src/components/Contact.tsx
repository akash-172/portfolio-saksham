import { Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-primary-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-display font-medium text-center mb-16">
          Get in Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-display font-medium mb-4">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 hover:text-warm-600 transition-colors">
                <Phone className="text-warm-600" />
                <span className="text-primary-700">+91 8359057230</span>
              </div>
              <div className="flex items-center space-x-3 hover:text-warm-600 transition-colors">
                <Mail className="text-warm-600" />
                <span className="text-primary-700">kali.lali@gili.com</span>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="font-display font-medium mb-2">Office Hours</h4>
              <p className="text-primary-600">
                Monday - Friday: 9:00 AM - 5:00 PM
                <br />
                Saturday: By appointment
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-primary-700 mb-1">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-primary-200 rounded-lg focus:ring-2 focus:ring-warm-500 focus:border-transparent transition-shadow"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-primary-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-primary-200 rounded-lg focus:ring-2 focus:ring-warm-500 focus:border-transparent transition-shadow"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-primary-700 mb-1">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border border-primary-200 rounded-lg focus:ring-2 focus:ring-warm-500 focus:border-transparent transition-shadow"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-warm-600 text-white px-6 py-3 rounded-lg hover:bg-warm-700 transition-all hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
