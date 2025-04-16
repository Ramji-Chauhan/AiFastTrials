import { motion } from 'framer-motion';
import Layout from '../components/Layout';

const About = () => {
  const team = [
    {
      name: 'Ekta Gandhi',
      role: 'Founder & CEO',
      bio: 'Visionary leader driving digital transformation. Passionate about leveraging AI to solve complex business challenges. Ex-Citigroup JPMC, Blackrock.',
      image: '/team/ekta.jpg'
    },
    {
      name: 'Dechefini Lahrmann',
      role: 'Founder & CTO',
      bio: 'US Army veteran and passionate technologist. Combining discipline and strategic thinking to deliver impactful AI solutions.',
      image: '/team/dechefini.jpg'
    },
    {
      name: 'Kathir Kuppan',
      role: 'Salesforce Specialist',
      bio: 'Salesforce and CRM strategist. Designing and implementing solutions to maximize sales effectiveness and customer satisfaction.',
      image: '/team/kathir.jpg'
    }
  ];

  const milestones = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'AI Fast Trials was established with a vision to revolutionize clinical trials through AI.'
    },
    {
      year: '2021',
      title: 'First Product Launch',
      description: 'Released our initial AI-powered patient recruitment platform.'
    },
    {
      year: '2022',
      title: 'Series A Funding',
      description: 'Secured $10M in funding to expand our technology and team.'
    },
    {
      year: '2023',
      title: 'Global Expansion',
      description: 'Expanded operations to Europe and Asia, serving clients worldwide.'
    }
  ];

  const whyChooseFeatures = [
    {
      title: "Speed & Efficiency",
      description: "Our AI solutions have been proven to reduce trial timelines by up to 25%, primarily through streamlined patient recruitment and automated screening.",
      icon: (
        <svg className="w-6 h-6 text-[#00BCD4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Improved Patient Engagement",
      description: "Our voice-enabled AI creates a more personalized experience for potential trial participants, leading to higher engagement and retention rates.",
      icon: (
        <svg className="w-6 h-6 text-[#00BCD4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      title: "Regulatory Expertise",
      description: "Our systems are built with compliance at their core, ensuring all interactions adhere to ICH-GCP E6 (R3) regulations and other relevant standards.",
      icon: (
        <svg className="w-6 h-6 text-[#00BCD4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Data-Driven Insights",
      description: "Our real-time analytics dashboards provide visibility into every aspect of your trials, helping you make informed decisions quickly.",
      icon: (
        <svg className="w-6 h-6 text-[#00BCD4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16"
        >
          <div className="text-center">
            <h1 className="text-4xl font-semibold text-gray-900 mb-6">
              About Fast Track Clinical Trials
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're transforming clinical trials with AI-powered solutions that accelerate recruitment, improve
              patient engagement, and streamline data management.
            </p>
          </div>
        </motion.div>

        {/* Main Content Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16"
            >
              {/* Left Column: Mission and Vision */}
              <motion.div variants={itemVariants} className="space-y-12 pr-8">
                {/* Mission */}
                <div>
                  <h2 className="text-3xl font-semibold text-gray-900 mb-6">
                    Our Mission
                  </h2>
                  <div className="space-y-4">
                    <p className="text-gray-600 text-lg leading-relaxed">
                      At Fast Track Clinical Trials, our mission is to accelerate medical innovation by removing
                      the barriers that slow down clinical research. We believe that AI technology can transform
                      the clinical trial process, making it more efficient, accessible, and patient-centered.
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      By reducing the time and cost of clinical trials, we're helping to bring life-changing
                      treatments to patients faster while maintaining the highest standards of safety and
                      regulatory compliance.
                    </p>
                  </div>
                </div>

                {/* Vision */}
                <div>
                  <h2 className="text-3xl font-semibold text-gray-900 mb-6">
                    Our Vision
                  </h2>
                  <div className="space-y-6">
                    <p className="text-gray-600 text-lg leading-relaxed">
                      We envision a future where clinical trials are no longer bottlenecks in bringing medical
                      innovations to market. Our technology will help create a world where:
                    </p>
                    <ul className="space-y-4 text-lg text-gray-600">
                      <li className="flex items-center space-x-3">
                        <svg className="h-6 w-6 text-[#00BCD4] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="leading-relaxed">Patient recruitment takes days, not months</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <svg className="h-6 w-6 text-[#00BCD4] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="leading-relaxed">Trial participants reflect the true diversity of the population</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <svg className="h-6 w-6 text-[#00BCD4] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="leading-relaxed">Data collection and analysis happen in real-time</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <svg className="h-6 w-6 text-[#00BCD4] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="leading-relaxed">Regulatory compliance is seamlessly integrated into every step</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <svg className="h-6 w-6 text-[#00BCD4] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="leading-relaxed">Researchers can focus on science, not administrative burdens</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Why Choose Section */}
              <motion.div variants={itemVariants} className="pl-8">
                <h2 className="text-3xl font-semibold text-gray-900 mb-8">
                  Why Choose Fast Track Clinical Trials?
                </h2>
                <div className="space-y-10">
                  {whyChooseFeatures.map((feature, index) => (
                    <div key={index} className="space-y-3">
                      <h3 className="text-xl font-medium text-gray-900">
                        {feature.title}
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* AI Technology Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-semibold text-gray-900 text-center mb-16"
            >
              Our AI Technology
            </motion.h2>
            
            <div className="relative">
              {/* Timeline content remains the same but wrapped in motion.div */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
                className="space-y-24"
              >
                {/* Each timeline item wrapped in motion.div */}
                {/* Data Analysis & Predictive Modeling */}
                <div className="relative flex items-center justify-end md:justify-start md:pl-1/2">
                  <div className="absolute left-1/2 transform -translate-x-1/2">
                    <div className="w-4 h-4 rounded-full bg-[#00BCD4]" />
                  </div>
                  <div className="w-5/12 md:w-5/12 bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Data Analysis & Predictive Modeling
                    </h3>
                    <p className="text-gray-600">
                      Our AI algorithms analyze vast datasets from electronic health records, clinical databases, and other sources to identify ideal candidates for specific trials. This predictive modeling significantly reduces screening failures and accelerates recruitment.
                    </p>
                  </div>
                </div>

                {/* Natural Language Processing */}
                <div className="relative flex items-center justify-start md:justify-end md:pr-1/2">
                  <div className="absolute left-1/2 transform -translate-x-1/2">
                    <div className="w-4 h-4 rounded-full bg-[#00BCD4]" />
                  </div>
                  <div className="w-5/12 md:w-5/12 bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Natural Language Processing
                    </h3>
                    <p className="text-gray-600">
                      Our voice agents utilize advanced NLP capabilities to conduct natural, conversational interactions with potential trial participants. The system can understand context, process complex medical terminology, and adapt to different communication styles.
                    </p>
                  </div>
                </div>

                {/* Machine Learning Algorithms */}
                <div className="relative flex items-center justify-end md:justify-start md:pl-1/2">
                  <div className="absolute left-1/2 transform -translate-x-1/2">
                    <div className="w-4 h-4 rounded-full bg-[#00BCD4]" />
                  </div>
                  <div className="w-5/12 md:w-5/12 bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Machine Learning Algorithms
                    </h3>
                    <p className="text-gray-600">
                      Our platforms continuously learn and improve from each interaction. As more patients are screened and enrolled, the system becomes increasingly accurate at predicting eligibility and identifying optimal trial matches.
                    </p>
                  </div>
                </div>

                {/* Secure Cloud Infrastructure */}
                <div className="relative flex items-center justify-start md:justify-end md:pr-1/2">
                  <div className="absolute left-1/2 transform -translate-x-1/2">
                    <div className="w-4 h-4 rounded-full bg-[#00BCD4]" />
                  </div>
                  <div className="w-5/12 md:w-5/12 bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Secure Cloud Infrastructure
                    </h3>
                    <p className="text-gray-600">
                      All our AI services operate on HIPAA-compliant, secure cloud infrastructure with end-to-end encryption. This ensures patient data is protected while remaining accessible to authorized personnel across multiple sites.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-gray-50 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <h2 className="text-3xl font-semibold text-center mb-4">Meet The Founders</h2>
            <p className="text-lg text-gray-600 text-center mb-16">The visionary team behind AI Fast Tracker</p>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4"
            >
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 ease-out"
                >
                  <div className="aspect-w-1 aspect-h-1 overflow-hidden">
                    <motion.div
                      className="w-full h-full"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-center"
                      />
                    </motion.div>
                  </div>
                  <motion.div 
                    className="p-6 relative z-10 bg-white group-hover:transform group-hover:-translate-y-2 transition-transform duration-500 ease-out"
                  >
                    <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-[#00BCD4] font-medium mb-4">{member.role}</p>
                    <p className="text-gray-600 text-sm leading-relaxed opacity-90">{member.bio}</p>
                  </motion.div>
                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Milestones Section */}
        <div className="bg-indigo-600 rounded-lg shadow-sm p-8 text-white">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-indigo-100">
                We constantly push the boundaries of what's possible in clinical research through cutting-edge AI technology.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Integrity</h3>
              <p className="text-indigo-100">
                We maintain the highest ethical standards in all our operations and data handling practices.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Impact</h3>
              <p className="text-indigo-100">
                We measure our success by the positive impact we make on patients' lives and the advancement of medical research.
              </p>
            </div>
          </div>
        </div>

        {/* Ready to Transform Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#40E0D0] py-16 text-center"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-white mb-6">
              Ready to transform your clinical trials?
            </h2>
            <p className="text-white text-lg mb-8">
              Schedule a demo to see how our AI solutions can accelerate your research.
            </p>
            <button className="bg-white text-[#40E0D0] px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors duration-300">
              Contact Us Today
            </button>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default About; 