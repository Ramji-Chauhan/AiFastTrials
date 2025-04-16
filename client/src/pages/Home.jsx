import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const Home = () => {
  const features = [
    {
      title: 'AI-Powered Patient Recruitment',
      description: 'Leverage artificial intelligence to identify and match ideal candidates for your clinical trials.',
      icon: '👥'
    },
    {
      title: 'Patient Screening Using AI Voice Agent',
      description: 'Automate initial eligibility checks through natural conversation with our intelligent voice agent.',
      icon: '🎤'
    },
    {
      title: 'Real-time Trial Analytics',
      description: 'Track recruitment progress and optimize strategies with detailed insights and metrics.',
      icon: '📊'
    }
  ];

  const testimonials = [
    {
      quote: 'AI Fast Trials reduced our patient recruitment time by 50% and improved screening accuracy significantly.',
      author: 'Dr. Sarah Johnson',
      role: 'Clinical Research Director',
      company: 'PharmaCorp'
    },
    {
      quote: 'The AI voice agent has transformed how we conduct initial patient screenings. It\'s efficient and accurate.',
      author: 'Michael Chen',
      role: 'Trial Manager',
      company: 'MediTech Solutions'
    },
    {
      quote: 'We\'ve seen a 40% increase in patient enrollment since implementing AI Fast Trials\' solutions.',
      author: 'Elizabeth Martinez',
      role: 'Research Coordinator',
      company: 'HealthCare Research'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-teal-400 via-teal-500 to-teal-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            #1 Award-Winning eClinical Platform
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-light text-teal-100 mb-8"
          >
            Redefining Clinical Trials With AI
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 mb-12 max-w-3xl mx-auto"
          >
            AI Fast Trials delivers full-service AI solutions for CROs and sponsors, streamlining 
            patient recruitment, screening, site selection, and management.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              to="/voice-agent"
              className="bg-teal-400 hover:bg-teal-300 text-white px-8 py-4 rounded-full font-medium text-lg transition-all transform hover:scale-105"
            >
              Try AI Voice Agent
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-white/10 transition-all transform hover:scale-105"
            >
              Request Demo
            </Link>
          </motion.div>
        </div>
        {/* Wave SVG */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="white"/>
          </svg>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How We Help Clinical Trials
          </h2>
          <p className="text-xl text-gray-600">
            Our AI-powered solutions streamline every aspect of clinical research
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by leading pharmaceutical companies and research organizations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <p className="text-gray-600 mb-4">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-500">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Clinical Trials?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Join leading research organizations using AI Fast Trials
            </p>
            <Link
              to="/recruitment"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-medium hover:bg-indigo-50 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home; 