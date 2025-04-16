import { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';

const VoiceAgent = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [activeQuestion, setActiveQuestion] = useState(0); // Track active FAQ
  
  // ROI Calculator states
  const [agents, setAgents] = useState(15);
  const [hourlyRate, setHourlyRate] = useState(22);
  const [callsPerMonth, setCallsPerMonth] = useState(210);

  // Calculate ROI values
  const calculateROI = () => {
    const annualLaborCost = agents * hourlyRate * 2080; // 2080 = 40 hours * 52 weeks
    const aiSolutionCost = 24960; // Base cost
    const laborSavings = annualLaborCost * 0.34; // 34% efficiency gain
    const netAnnualSavings = laborSavings - aiSolutionCost;
    const roiPercentage = Math.round((netAnnualSavings / aiSolutionCost) * 100);

    return {
      annualLaborCost: annualLaborCost.toFixed(0),
      aiSolutionCost: aiSolutionCost.toFixed(0),
      laborSavings: laborSavings.toFixed(0),
      netAnnualSavings: netAnnualSavings.toFixed(0),
      roiPercentage
    };
  };

  const handleInputChange = (setter) => (e) => {
    const value = parseInt(e.target.value) || 0;
    setter(value);
  };

  const roi = calculateROI();

  const samplePhrases = [
    "I'm 45 years old and have been experiencing progressive vision loss for about 5 years.",
    "My mother and grandmother both had similar vision problems. I've noticed issues with my peripheral vision."
  ];

  const tasks = [
    {
      title: 'Patient Interaction',
      description: 'Conducts natural, conversational screenings that feel personal and engaging.',
      icon: '🗣️',
      color: 'text-cyan-500'
    },
    {
      title: 'Call-forwarding',
      description: 'Transfers complex cases to human specialists for additional assessment.',
      icon: '📞',
      color: 'text-green-500'
    },
    {
      title: 'Eligibility Screening',
      description: 'Analyzes responses against trial criteria to determine preliminary eligibility.',
      icon: '✓',
      color: 'text-cyan-500'
    },
    {
      title: 'Appointment Scheduling',
      description: 'Books follow-up appointments for qualified candidates with appropriate staff.',
      icon: '📅',
      color: 'text-cyan-500'
    },
    {
      title: 'Update CRM Data',
      description: 'Automatically captures and stores patient information in our secure database.',
      icon: '💾',
      color: 'text-cyan-500'
    }
  ];

  const handleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      setTranscript('');
    }
  };

  // FAQ data
  const faqs = [
    {
      question: "How does the AI voice agent protect patient privacy?",
      answer: "Our AI voice agent is built with HIPAA compliance as a core principle. All data is encrypted both in transit and at rest, and we implement strict access controls. Patient information is only used for the specific purposes approved by the patient, and all processing adheres to healthcare privacy regulations."
    },
    {
      question: "Can the voice agent support multiple languages?",
      answer: "Yes, our voice agent supports multiple languages and can conduct screening interviews in the patient's preferred language, ensuring accurate communication and broader accessibility."
    },
    {
      question: "How accurate is the eligibility screening?",
      answer: "Our eligibility screening achieves high accuracy through advanced natural language processing and continuous learning from validated outcomes. The system is regularly updated with the latest trial criteria."
    },
    {
      question: "How is the voice agent trained on medical regulations?",
      answer: "The voice agent undergoes rigorous training on medical regulations, including HIPAA, GCP, and trial-specific protocols. Regular updates ensure compliance with evolving healthcare standards."
    }
  ];

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? -1 : index);
  };

  return (
    <Layout>
      <div className="min-h-screen">
        <div className="bg-white pb-8">
          <div className="max-w-3xl mx-auto pt-16 px-4">
            {/* Header Section */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-semibold text-gray-900 mb-4">
                AI Voice Agent for Patient Screening
              </h1>
              <p className="text-gray-600 text-lg">
                Experience our AI-powered voice agent designed to streamline the patient screening process for clinical trials.
              </p>
            </div>

            {/* Main Card */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
              {/* Trial Info */}
              <div className="text-center mb-8">
                <h2 className="text-2xl font-medium text-gray-900 mb-2">
                  OPA1 Mutation Trial Eligibility Screening
                </h2>
                <p className="text-gray-600 text-sm">
                  This demo shows how our AI voice agent conducts initial eligibility screening for the 
                  OPA1 mutation (haploinsufficiency) associated ADOA clinical trial.
                </p>
              </div>

              {/* How to Use Section */}
              <div className="mb-8">
                <div className="flex items-start space-x-3 mb-6">
                  <div className="w-6 h-6 rounded-full bg-cyan-400 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">i</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">How to Use</h3>
                    <p className="text-gray-600 text-sm">
                      Click the microphone button and describe your vision symptoms, family 
                      history, age, and general health information. The AI will analyze your 
                      responses to determine potential eligibility.
                    </p>
                  </div>
                </div>
              </div>

              {/* Sample Phrases */}
              <div className="mb-8">
                <h3 className="font-medium text-gray-900 mb-3">Sample phrases you can try:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {samplePhrases.map((phrase, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-600 text-sm italic">"{phrase}"</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recording Interface */}
              <div className="text-center">
                <button
                  onClick={handleRecording}
                  className="w-16 h-16 rounded-full bg-cyan-400 hover:bg-cyan-500 transition-colors flex items-center justify-center mx-auto mb-4"
                >
                  <span className="text-white text-2xl">
                    {isRecording ? '⬛' : '🎤'}
                  </span>
                </button>
                <p className="text-sm text-gray-500">Click to speak</p>
              </div>

              {/* Response Section */}
              <div className="mt-8">
                <h3 className="font-medium text-gray-900 mb-2">Your response:</h3>
                <div className="bg-gray-50 p-4 rounded-lg min-h-[100px]">
                  <p className="text-gray-600">
                    {transcript || 'Your spoken response will appear here...'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tasks Section with gray background */}
        <div className="bg-gray-50 py-8">
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
              <h2 className="text-xl font-medium text-gray-900 mb-6">
                Tasks the AI Voice Agent Performs
              </h2>
              <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                {tasks.map((task, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-3">
                      <div className="w-6 h-6 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center flex-shrink-0">
                        <span className={`text-base ${task.color}`}>{task.icon}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-900 mb-1">{task.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{task.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ROI Calculator Section */}
        <div className="bg-white py-12">
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-6">
              <h2 className="text-xl font-medium text-[#2563eb] mb-2">
                ROI Calculator
              </h2>
              <p className="text-sm text-gray-500">
                Estimate your potential savings with our AI automation solutions
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
              <div className="grid grid-cols-2 gap-8">
                {/* Left Column - Inputs */}
                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-sm text-gray-600">Support Agents</label>
                      <span className="text-sm font-medium text-gray-900">{agents}</span>
                    </div>
                    <div className="flex items-center">
                      <input 
                        type="range" 
                        value={agents}
                        onChange={handleInputChange(setAgents)}
                        min="1"
                        max="50"
                        step="1"
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#2563eb] [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-[#2563eb] [&::-moz-range-thumb]:cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, #2563eb ${(agents - 1) / 49 * 100}%, #e5e7eb ${(agents - 1) / 49 * 100}%)`
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-sm text-gray-600">Hourly Rate ($/hr)</label>
                      <span className="text-sm font-medium text-gray-900">${hourlyRate}</span>
                    </div>
                    <div className="flex items-center">
                      <input 
                        type="range" 
                        value={hourlyRate}
                        onChange={handleInputChange(setHourlyRate)}
                        min="10"
                        max="100"
                        step="1"
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#2563eb] [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-[#2563eb] [&::-moz-range-thumb]:cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, #2563eb ${(hourlyRate - 10) / 90 * 100}%, #e5e7eb ${(hourlyRate - 10) / 90 * 100}%)`
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-sm text-gray-600">Calls per Month</label>
                      <span className="text-sm font-medium text-gray-900">{callsPerMonth}</span>
                    </div>
                    <div className="flex items-center">
                      <input 
                        type="range" 
                        value={callsPerMonth}
                        onChange={handleInputChange(setCallsPerMonth)}
                        min="50"
                        max="1000"
                        step="10"
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#2563eb] [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-[#2563eb] [&::-moz-range-thumb]:cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, #2563eb ${(callsPerMonth - 50) / 950 * 100}%, #e5e7eb ${(callsPerMonth - 50) / 950 * 100}%)`
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Right Column - Results */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Your Estimated ROI</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Annual Labor Cost</span>
                      <span className="text-sm font-medium text-gray-900">
                        ${new Intl.NumberFormat().format(roi.annualLaborCost)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">AI Solution Cost</span>
                      <span className="text-sm font-medium text-gray-900">
                        ${new Intl.NumberFormat().format(roi.aiSolutionCost)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Labor Savings</span>
                      <span className="text-sm font-medium text-gray-900">
                        ${new Intl.NumberFormat().format(roi.laborSavings)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                      <span className="text-sm text-gray-600">Net Annual Savings</span>
                      <span className="text-sm font-medium text-gray-900">
                        ${new Intl.NumberFormat().format(roi.netAnnualSavings)}
                      </span>
                    </div>
                    <div className="text-center mt-6">
                      <div className="text-4xl font-bold text-[#2563eb]">{roi.roiPercentage}%</div>
                      <div className="text-sm text-gray-500">Return on Investment</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-50 py-12">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div 
                  key={index} 
                  initial={false}
                  className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100"
                >
                  <button 
                    onClick={() => toggleQuestion(index)}
                    className={`w-full px-6 py-5 text-left flex items-center justify-between transition-colors ${
                      activeQuestion === index ? 'bg-blue-50' : 'bg-white'
                    }`}
                  >
                    <span className="text-base font-medium text-gray-900">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: activeQuestion === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg 
                        className="w-5 h-5 text-gray-500" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.div>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: activeQuestion === index ? 'auto' : 0,
                      opacity: activeQuestion === index ? 1 : 0
                    }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden border-t border-gray-100"
                    style={{
                      display: activeQuestion === index ? 'block' : 'none'
                    }}
                  >
                    <div className="px-6 py-5 bg-white">
                      <p className="text-base text-gray-600">{faq.answer}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VoiceAgent; 