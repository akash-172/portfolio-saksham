const HeroSection = () => {
  return (
    <>
      <header className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
            alt="Office workspace"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary-900/80"></div>
        </div>

        <nav className="relative z-10 px-6 py-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="text-white text-2xl font-display font-medium">
              SAKSHAM SHARMA
            </div>
            <div className="hidden md:flex space-x-6">
              <a
                href="#services"
                className="text-white hover:text-primary-200 transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-white hover:text-primary-200 transition-colors"
              >
                About
              </a>
              <a
                href="#testimonials"
                className="text-white hover:text-primary-200 transition-colors"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="text-white hover:text-primary-200 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </nav>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32">
          <div className="opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
            <h1 className="text-5xl font-display font-medium text-white mb-6">
              Expert Financial Consulting
              <br />
              for Your Success
            </h1>
            <p className="hidden md:block text-xl text-primary-100 mb-8 max-w-2xl">
              Certified Financial Consultant with 3+ years of experience helping
              individuals and businesses optimize their financial strategies and
              tax positions.
            </p>
            <a
              href="#contact"
              className="bg-warm-600 text-white px-8 py-3 rounded-lg hover:bg-warm-700 transition-all hover:scale-105 inline-block"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeroSection;
