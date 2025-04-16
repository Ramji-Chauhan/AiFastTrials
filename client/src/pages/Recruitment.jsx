import { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';

const Recruitment = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const challenges = [
    {
      title: "Patient Recruitment and Retention",
      items: [
        "Maintaining patient engagement",
        "Cultural and logistical factors",
        "Overcoming cultural biases"
      ]
    },
    {
      title: "Public Awareness and Trust",
      items: [
        "Safety and ethical conduct",
        "Maintaining data security",
        "Patient confidentiality"
      ]
    },
    {
      title: "Talent and Infrastructure",
      items: [
        "Building experienced investigator pools",
        "Regulatory complexity and timelines",
        "Technology infrastructure"
      ]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
          <div className="text-center">
            <h1 className="text-4xl font-semibold text-[#1e3a8a] mb-6">
              AI-Powered Patient Recruitment
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our AI solutions revolutionize patient recruitment for clinical trials, significantly reducing timelines
              while enhancing diversity and participation.
            </p>
          </div>
        </div>

        {/* Challenges Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-semibold text-[#1e3a8a] mb-6">
                Clinical Trial Recruitment Challenges
              </h2>
              <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
                <p className="text-gray-600">
                  CROs face the critical challenge of balancing efficient patient recruitment and retention with the complexities of regulatory compliance and public trust
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {challenges.map((challenge, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-xl font-medium text-[#00BCD4] mb-6">
                    {challenge.title}
                  </h3>
                  <ul className="space-y-4">
                    {challenge.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center space-x-3">
                        <svg 
                          className="h-5 w-5 text-gray-400 flex-shrink-0" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor"
                        >
                          <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                          <path d="M12 8v8M8 12h8" strokeWidth="2"/>
                        </svg>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Solutions Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-gray-800 text-center mb-12">
              Fast Track AI Recruitment Solutions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* AI-Powered Patient Recruitment */}
              <div className="bg-[#E0F7FA] rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[#00ACC1] mb-6">
                  AI-Powered Patient Recruitment
                </h3>
                <ul className="space-y-4">
                  <li>
                    <p className="font-medium text-[#00838F] mb-2">Data Analysis:</p>
                    <p className="text-gray-600 text-sm">Analyzes vast datasets (EHRs, social media) to identify ideal trial candidates, minimizing screening failures.</p>
                  </li>
                  <li>
                    <p className="font-medium text-[#00838F] mb-2">Predictive Modeling:</p>
                    <p className="text-gray-600 text-sm">Uses advanced algorithms to identify candidates most likely to qualify and complete trials.</p>
                  </li>
                  <li>
                    <p className="font-medium text-[#00838F] mb-2">Automated Outreach:</p>
                    <p className="text-gray-600 text-sm">Streamlines recruitment communication through personalized, timely messaging.</p>
                  </li>
                  <li>
                    <p className="font-medium text-[#00838F] mb-2">Diversity Enhancement:</p>
                    <p className="text-gray-600 text-sm">Helps reach and engage underrepresented populations, ensuring trials reflect real-world patient demographics.</p>
                  </li>
                </ul>
              </div>

              {/* Patient Screening Using AI Voice Agent */}
              <div className="bg-[#E0F7FA] rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[#00ACC1] mb-6">
                  Patient Screening Using AI Voice Agent
                </h3>
                <ul className="space-y-4">
                  <li>
                    <p className="font-medium text-[#00838F] mb-2">Automated Screening:</p>
                    <p className="text-gray-600 text-sm">Conducts initial eligibility checks via conversational AI voice agents available 24/7.</p>
                  </li>
                  <li>
                    <p className="font-medium text-[#00838F] mb-2">Data Capture:</p>
                    <p className="text-gray-600 text-sm">Records patient responses and automatically populates secure database fields.</p>
                  </li>
                  <li>
                    <p className="font-medium text-[#00838F] mb-2">Multi-language Support:</p>
                    <p className="text-gray-600 text-sm">Speaks multiple languages, improving diversity and accessibility.</p>
                  </li>
                  <li>
                    <p className="font-medium text-[#00838F] mb-2">Follow-up Management:</p>
                    <p className="text-gray-600 text-sm">Schedules appointments and answers FAQs, improving engagement rates.</p>
                  </li>
                </ul>
              </div>

              {/* Enhanced Public Awareness and Trust */}
              <div className="bg-[#E0F7FA] rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[#00ACC1] mb-6">
                  Enhanced Public Awareness and Trust
                </h3>
                <ul className="space-y-4">
                  <li>
                    <p className="font-medium text-[#00838F] mb-2">Tailored Materials:</p>
                    <p className="text-gray-600 text-sm">AI creates personalized content explaining clinical trials in accessible language.</p>
                  </li>
                  <li>
                    <p className="font-medium text-[#00838F] mb-2">Interactive Chatbots:</p>
                    <p className="text-gray-600 text-sm">Provide instant, reliable answers to public inquiries about trial safety, ethics, and procedures.</p>
                  </li>
                  <li>
                    <p className="font-medium text-[#00838F] mb-2">Sentiment Analysis:</p>
                    <p className="text-gray-600 text-sm">Monitors public perception to address concerns and misconceptions proactively.</p>
                  </li>
                  <li>
                    <p className="font-medium text-[#00838F] mb-2">Educational Resources:</p>
                    <p className="text-gray-600 text-sm">Generates culturally sensitive educational content for diverse audiences.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Proven Impact Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-semibold text-[#1e3a8a] mb-6">
                Proven Impact on Clinical Trial Recruitment
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our AI solutions deliver measurable improvements across all recruitment metrics
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Faster Recruitment */}
              <div className="text-center">
                <p className="text-5xl font-bold text-[#00BCD4] mb-2">25%</p>
                <p className="text-gray-600">Faster Recruitment</p>
              </div>

              {/* Reduced Screening Failures */}
              <div className="text-center">
                <p className="text-5xl font-bold text-[#00BCD4] mb-2">40%</p>
                <p className="text-gray-600">Reduced Screening Failures</p>
              </div>

              {/* Increased Diversity */}
              <div className="text-center">
                <p className="text-5xl font-bold text-[#00BCD4] mb-2">35%</p>
                <p className="text-gray-600">Increased Diversity</p>
              </div>

              {/* Improved Retention */}
              <div className="text-center">
                <p className="text-5xl font-bold text-[#00BCD4] mb-2">22%</p>
                <p className="text-gray-600">Improved Retention</p>
              </div>
            </div>
          </div>
        </div>

        {/* Case Studies Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                Case Studies
              </h2>
              <p className="text-lg text-gray-600">
                See how our AI recruitment tools have transformed clinical trials
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* OPA1 Mutation Trial Case Study */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    OPA1 Mutation Trial Recruitment
                  </h3>
                  <div className="flex gap-2 mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Rare Disease
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                      Phase II
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      12 Sites
                    </span>
                  </div>
                  <button className="inline-flex items-center px-4 py-2 bg-[#00BCD4] text-white rounded-md text-sm font-medium mb-4">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Listen to Voice Agent Demo
                  </button>
                  <p className="text-gray-600 mb-6">
                    A leading pharmaceutical company was struggling to recruit patients for their OPA1 mutation (haploinsufficiency) associated ADOA clinical trial. Traditional recruitment methods had yielded only 15% of the target patient population after 6 months.
                  </p>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Our Solution:</h4>
                      <p className="text-gray-600">
                        We deployed our AI voice agent specifically trained on OPA1 mutation criteria to conduct preliminary screenings. Our data analytics platform identified potential candidates from anonymized EHR data and genetic testing databases.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Reached 100% recruitment target within 3 months</li>
                        <li>Reduced screening failures by 62%</li>
                        <li>Identified previously overlooked patient populations</li>
                        <li>Improved geographic diversity of participants</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* ICH-GCP Case Study */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Use Case 1: ICH-GCP E6 (R3) Regulations
                  </h3>
                  <div className="flex gap-2 mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Regulatory
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                      Compliance
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Global
                    </span>
                  </div>
                  <button className="inline-flex items-center px-4 py-2 bg-[#00BCD4] text-white rounded-md text-sm font-medium mb-4">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Listen to Voice Agent Demo
                  </button>
                  <p className="text-gray-600 mb-6">
                    AI voice agent trained on complex regulatory guidelines to provide instant, accurate guidance on compliance requirements. It can navigate complex clauses, clarify ambiguities, and answer specific queries related to the updated guidelines, ensuring clinical trial professionals stay informed and compliant.
                  </p>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Our Solution:</h4>
                      <p className="text-gray-600">
                        We developed a specialized AI voice agent trained on the complete ICH-GCP E6 (R3) regulations and related documentation. The system was designed to understand complex regulatory queries and provide instant, authoritative guidance to clinical trial professionals.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>99.2% accuracy in regulatory guidance interpretation</li>
                        <li>72% reduction in compliance-related queries to regulatory teams</li>
                        <li>85% faster response times for urgent compliance questions</li>
                        <li>46% improvement in staff confidence regarding regulatory requirements</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ready to Transform CTA Section */}
        <div className="bg-[#40E0D0] py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Ready to Transform Your Clinical Trial Recruitment?
            </h2>
            <p className="text-lg text-gray-800 mb-8">
              Schedule a personalized demo to see how our AI solutions can accelerate your patient recruitment and screening processes.
            </p>
            <button className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-medium rounded-md hover:bg-gray-50 transition-colors">
              Request Demo
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Recruitment; 