import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-start items-center h-16">
            <div className="flex space-x-8">
              <a href="#" className="text-gray-900 font-medium hover:text-blue-600 transition-colors">
                Home
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                CV
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Profile Photo - moved slightly to the left */}
              <div className="flex justify-center lg:justify-start lg:-ml-2">
                <div className="w-32 h-32 rounded-full overflow-hidden">
                  <Image
                    src="/profile-photo.jpg"
                    alt="Nidhish Nerur"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Name and Title */}
              <div className="text-center lg:text-left">
                <h2 className="text-2xl font-bold text-gray-900">Nidhish Nerur</h2>
                <p className="text-gray-600 mt-1">PhD Student in Information Systems</p>
              </div>

              {/* Contact Information with aligned text */}
              <div className="space-y-4">
                {/* University */}
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 flex-shrink-0">
                    <Image
                      src="/ut-longhorn.png"
                      alt="UT Austin Longhorn Logo"
                      width={20}
                      height={20}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-gray-700 text-sm">University of Texas at Austin</span>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:nidhishnerur@gmail.com" className="text-gray-700 hover:text-blue-600 transition-colors text-sm">
                    nidhishnerur@gmail.com
                  </a>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <a href="https://linkedin.com/in/nidhishnerur" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors text-sm">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            <div className="prose prose-lg max-w-none">
              <h1 className="text-3xl font-bold text-gray-900 mb-6">
                Nidhish Nerur - PhD Student in Information Systems
              </h1>
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  I am a researcher at the intersection of artificial intelligence, healthcare, and operational efficiency. 
                  My work centers on leveraging robust machine learning models, causal inference techniques, and statistics 
                  methods to improve decision-making. I'm particularly interested in how data and AI can enhance 
                  patient-centric medical care and delivery.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Education
                </h2>

                <ul className="space-y-3 text-gray-700 text-sm">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Ph.D. Student, Information Systems</strong> - The University of Texas at Austin McCombs School of Business, In Progress</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Master of Business Analytics</strong> - Massachusetts Institute of Technology (MIT)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Bachelor of Business Administration (B.B.A.)</strong> - Business Honors & Business Analytics, The University of Texas at Austin, <em>2024</em></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Bachelor of Science and Arts (B.S.A.) in Mathematics</strong> - The University of Texas at Austin, <em>2024</em></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
