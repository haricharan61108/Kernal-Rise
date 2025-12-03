import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 md:mb-6 tracking-tight">
              Privacy Policy for ClipToon
            </h1>
            <div className="text-sm md:text-base text-blue-100 space-y-2">
              <p><strong>Effective Date:</strong> December 3, 2025</p>
              <p><strong>Last Updated:</strong> December 3, 2025</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        <div className="bg-white/95 backdrop-blur-lg rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden">
          <div className="p-6 sm:p-8 md:p-12 lg:p-16">

            <section className="mb-10 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 pb-3 border-b-4 border-blue-500">
                1. Introduction
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                Welcome to ClipToon ("we," "our," or "us"). ClipToon is a mobile application that allows users to search, view, download,
                and share animated stickers and video clips created from YouTube videos. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you use our mobile application.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                By using ClipToon, you agree to the collection and use of information in accordance with this policy. If you do not agree
                with our policies and practices, please do not use our application.
              </p>
            </section>

            <section className="mb-10 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 pb-3 border-b-4 border-purple-500">
                2. Information We Collect
              </h2>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 md:p-6 rounded-xl">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3 md:mb-4">2.1 Information You Provide</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 text-xl">•</span>
                      <div><strong className="text-gray-900">Search Queries:</strong> When you search for stickers within the app, we may temporarily process your search terms to deliver relevant results.</div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 text-xl">•</span>
                      <div><strong className="text-gray-900">Created Content:</strong> Memes and stickers you create within the app are stored locally on your device.</div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 text-xl">•</span>
                      <div><strong className="text-gray-900">User Preferences:</strong> App settings and configuration choices you make.</div>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 md:p-6 rounded-xl">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3 md:mb-4">2.2 Automatically Collected Information</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-3 text-xl">•</span>
                      <div><strong className="text-gray-900">Usage Data:</strong> Information about how you interact with the app, including stickers viewed, downloaded, or shared.</div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-3 text-xl">•</span>
                      <div><strong className="text-gray-900">Device Information:</strong> Device type, operating system version, unique device identifiers, and mobile network information.</div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-3 text-xl">•</span>
                      <div><strong className="text-gray-900">Performance Data:</strong> App performance metrics, crash reports, and error logs to improve app functionality.</div>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-4 md:p-6 rounded-xl">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3 md:mb-4">2.3 Local Storage</h3>
                  <p className="text-gray-700 mb-3">The app uses local storage (Hive database) to store:</p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-3 text-xl">•</span>
                      <div>Your downloaded stickers</div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-3 text-xl">•</span>
                      <div>Created memes and templates</div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-3 text-xl">•</span>
                      <div>App preferences and settings</div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-3 text-xl">•</span>
                      <div>Favorite stickers</div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-3 text-xl">•</span>
                      <div>Search history</div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-10 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 pb-3 border-b-4 border-indigo-500">
                3. How We Use Your Information
              </h2>
              <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6">We use the collected information for the following purposes:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 md:p-5 rounded-xl border-l-4 border-blue-500">
                  <h4 className="font-bold text-gray-900 mb-2">Service Delivery</h4>
                  <p className="text-sm md:text-base text-gray-700">To provide, maintain, and improve ClipToon's core functionality</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 md:p-5 rounded-xl border-l-4 border-purple-500">
                  <h4 className="font-bold text-gray-900 mb-2">Search Functionality</h4>
                  <p className="text-sm md:text-base text-gray-700">To deliver relevant sticker search results through our Typesense search service</p>
                </div>
                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-4 md:p-5 rounded-xl border-l-4 border-indigo-500">
                  <h4 className="font-bold text-gray-900 mb-2">Content Storage & Delivery</h4>
                  <p className="text-sm md:text-base text-gray-700">To store and serve sticker files via Cloudflare R2 storage</p>
                </div>
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-4 md:p-5 rounded-xl border-l-4 border-pink-500">
                  <h4 className="font-bold text-gray-900 mb-2">Personalization</h4>
                  <p className="text-sm md:text-base text-gray-700">To remember your preferences and provide a customized experience</p>
                </div>
                <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-4 md:p-5 rounded-xl border-l-4 border-teal-500">
                  <h4 className="font-bold text-gray-900 mb-2">App Improvement</h4>
                  <p className="text-sm md:text-base text-gray-700">To analyze usage patterns and improve app performance</p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 md:p-5 rounded-xl border-l-4 border-orange-500">
                  <h4 className="font-bold text-gray-900 mb-2">Technical Support</h4>
                  <p className="text-sm md:text-base text-gray-700">To diagnose and fix technical issues</p>
                </div>
              </div>
            </section>

            <section className="mb-10 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 pb-3 border-b-4 border-pink-500">
                4. Third-Party Services
              </h2>
              <p className="text-base md:text-lg text-gray-700 mb-6">ClipToon integrates with the following third-party services:</p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                <div className="bg-white border-2 border-blue-200 hover:border-blue-400 rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-lg md:text-xl font-bold text-blue-700 mb-3 md:mb-4">4.1 Cloudflare R2 Storage</h3>
                  <div className="space-y-2 text-sm md:text-base text-gray-700">
                    <p><strong>Purpose:</strong> Hosts and delivers sticker files (GIFs, WebP, MP4 videos)</p>
                    <p><strong>Data Shared:</strong> File access requests, download activity</p>
                    <p><strong>Privacy Policy:</strong> <a href="https://www.cloudflare.com/privacypolicy/" className="text-blue-600 hover:text-blue-800 underline font-medium" target="_blank" rel="noopener noreferrer">View Policy</a></p>
                  </div>
                </div>

                <div className="bg-white border-2 border-purple-200 hover:border-purple-400 rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-lg md:text-xl font-bold text-purple-700 mb-3 md:mb-4">4.2 Typesense Search</h3>
                  <div className="space-y-2 text-sm md:text-base text-gray-700">
                    <p><strong>Purpose:</strong> Provides search functionality for finding stickers</p>
                    <p><strong>Data Shared:</strong> Search queries, filter preferences</p>
                    <p><strong>Privacy Policy:</strong> <a href="https://typesense.org/privacy/" className="text-purple-600 hover:text-purple-800 underline font-medium" target="_blank" rel="noopener noreferrer">View Policy</a></p>
                  </div>
                </div>

                <div className="bg-white border-2 border-red-200 hover:border-red-400 rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-lg md:text-xl font-bold text-red-700 mb-3 md:mb-4">4.3 YouTube</h3>
                  <div className="space-y-2 text-sm md:text-base text-gray-700">
                    <p><strong>Purpose:</strong> Source content is derived from publicly available YouTube videos</p>
                    <p><strong>Data Shared:</strong> None directly; users may access original YouTube videos via links</p>
                    <p><strong>Privacy Policy:</strong> <a href="https://policies.google.com/privacy" className="text-red-600 hover:text-red-800 underline font-medium" target="_blank" rel="noopener noreferrer">View Policy</a></p>
                  </div>
                </div>

                <div className="bg-white border-2 border-green-200 hover:border-green-400 rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-lg md:text-xl font-bold text-green-700 mb-3 md:mb-4">4.4 Google Fonts</h3>
                  <div className="space-y-2 text-sm md:text-base text-gray-700">
                    <p><strong>Purpose:</strong> Typography and visual presentation</p>
                    <p><strong>Privacy Policy:</strong> <a href="https://developers.google.com/fonts/faq/privacy" className="text-green-600 hover:text-green-800 underline font-medium" target="_blank" rel="noopener noreferrer">View Policy</a></p>
                  </div>
                </div>

                <div className="bg-white border-2 border-yellow-200 hover:border-yellow-400 rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-lg md:text-xl font-bold text-yellow-700 mb-3 md:mb-4">4.5 Google AdMob</h3>
                  <div className="space-y-2 text-sm md:text-base text-gray-700">
                    <p><strong>Purpose:</strong> Serves advertisements within the app to support free access</p>
                    <p><strong>Data Shared:</strong> Device identifiers, IP address, usage data, ad interaction metrics, and other information for personalized advertising</p>
                    <p><strong>Privacy Policy:</strong> <a href="https://policies.google.com/privacy" className="text-yellow-600 hover:text-yellow-800 underline font-medium" target="_blank" rel="noopener noreferrer">View Policy</a></p>
                    <p><strong>Ad Choices:</strong> <a href="https://www.google.com/settings/ads" className="text-yellow-600 hover:text-yellow-800 underline font-medium" target="_blank" rel="noopener noreferrer">Manage Ad Settings</a></p>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-500 p-4 md:p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                  <span className="mr-2 text-xl">📢</span>
                  Advertising Information
                </h4>
                <p className="text-sm md:text-base text-gray-700 mb-3">
                  ClipToon uses Google AdMob to display advertisements. AdMob may collect and use data to provide personalized ads. This includes:
                </p>
                <ul className="space-y-2 text-sm md:text-base text-gray-700">
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <span>Advertising identifiers (such as Google Advertising ID or IDFA)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <span>IP address and general location information</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <span>Device information and operating system details</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <span>Ad interaction and viewing data</span>
                  </li>
                </ul>
                <p className="text-sm md:text-base text-gray-700 mt-3">
                  You can opt-out of personalized advertising by adjusting your device settings or visiting Google's Ad Settings page.
                </p>
              </div>
            </section>

            <section className="mb-10 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 pb-3 border-b-4 border-teal-500">
                5. Data Storage and Security
              </h2>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 md:p-6 rounded-xl">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3 md:mb-4">5.1 Local Storage</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✓</span>
                      <div>Most of your data is stored locally on your device and is not transmitted to our servers</div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✓</span>
                      <div>You maintain full control over locally stored data</div>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 md:p-6 rounded-xl">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3 md:mb-4">5.2 Cloud Storage</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 text-xl">✓</span>
                      <div>Sticker files are hosted on Cloudflare R2 storage with secure access protocols</div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 text-xl">✓</span>
                      <div>We implement industry-standard security measures including encryption and signed URL authentication</div>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-4 md:p-6 rounded-xl">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3 md:mb-4">5.3 Security Measures</h3>
                  <p className="text-gray-700 mb-3">We implement reasonable security measures to protect your information, including:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex items-center bg-white p-3 rounded-lg">
                      <span className="text-purple-600 mr-2 text-lg">🔒</span>
                      <span className="text-sm md:text-base">Encrypted connections (HTTPS/TLS)</span>
                    </div>
                    <div className="flex items-center bg-white p-3 rounded-lg">
                      <span className="text-purple-600 mr-2 text-lg">🔑</span>
                      <span className="text-sm md:text-base">Secure API authentication</span>
                    </div>
                    <div className="flex items-center bg-white p-3 rounded-lg">
                      <span className="text-purple-600 mr-2 text-lg">🛡️</span>
                      <span className="text-sm md:text-base">Access control mechanisms</span>
                    </div>
                    <div className="flex items-center bg-white p-3 rounded-lg">
                      <span className="text-purple-600 mr-2 text-lg">🔍</span>
                      <span className="text-sm md:text-base">Regular security assessments</span>
                    </div>
                  </div>
                  <p className="text-sm md:text-base text-gray-600 italic mt-4 bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow-400">
                    However, no method of electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-10 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 pb-3 border-b-4 border-orange-500">
                6. Data Sharing and Disclosure
              </h2>
              <div className="bg-gradient-to-r from-red-50 to-orange-50 p-4 md:p-6 rounded-xl mb-4">
                <p className="text-base md:text-lg text-gray-800 font-semibold mb-4">
                  We do not sell, trade, or rent your personal information to third parties.
                </p>
                <p className="text-gray-700 mb-3">We may share information in the following circumstances:</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white border-l-4 border-blue-500 p-4 rounded-lg shadow">
                  <h4 className="font-bold text-gray-900 mb-2">With Your Consent</h4>
                  <p className="text-sm md:text-base text-gray-700">When you explicitly authorize us to share information</p>
                </div>
                <div className="bg-white border-l-4 border-purple-500 p-4 rounded-lg shadow">
                  <h4 className="font-bold text-gray-900 mb-2">Service Providers</h4>
                  <p className="text-sm md:text-base text-gray-700">With trusted third-party services (Cloudflare, Typesense) necessary for app functionality</p>
                </div>
                <div className="bg-white border-l-4 border-red-500 p-4 rounded-lg shadow">
                  <h4 className="font-bold text-gray-900 mb-2">Legal Requirements</h4>
                  <p className="text-sm md:text-base text-gray-700">When required by law, court order, or government regulation</p>
                </div>
                <div className="bg-white border-l-4 border-green-500 p-4 rounded-lg shadow">
                  <h4 className="font-bold text-gray-900 mb-2">Protection of Rights</h4>
                  <p className="text-sm md:text-base text-gray-700">To protect our rights, privacy, safety, or property, and that of our users</p>
                </div>
              </div>
            </section>

            <section className="mb-10 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 pb-3 border-b-4 border-green-500">
                7. Your Data Rights and Choices
              </h2>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 md:p-6 rounded-xl">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3 md:mb-4">7.1 Access and Control</h3>
                  <p className="text-gray-700 mb-3">You have the right to:</p>
                  <div className="space-y-2">
                    <div className="flex items-start bg-white p-3 rounded-lg">
                      <span className="text-blue-600 mr-3 text-xl">✓</span>
                      <div className="text-gray-700">Access information stored locally on your device</div>
                    </div>
                    <div className="flex items-start bg-white p-3 rounded-lg">
                      <span className="text-blue-600 mr-3 text-xl">✓</span>
                      <div className="text-gray-700">Delete your created memes and downloaded stickers</div>
                    </div>
                    <div className="flex items-start bg-white p-3 rounded-lg">
                      <span className="text-blue-600 mr-3 text-xl">✓</span>
                      <div className="text-gray-700">Clear your search history</div>
                    </div>
                    <div className="flex items-start bg-white p-3 rounded-lg">
                      <span className="text-blue-600 mr-3 text-xl">✓</span>
                      <div className="text-gray-700">Adjust app settings and preferences</div>
                    </div>
                    <div className="flex items-start bg-white p-3 rounded-lg">
                      <span className="text-blue-600 mr-3 text-xl">✓</span>
                      <div className="text-gray-700">Uninstall the app to remove all local data</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 md:p-6 rounded-xl">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3 md:mb-4">7.2 Opt-Out Options</h3>
                  <ul className="space-y-2">
                    <div className="flex items-start bg-white p-3 rounded-lg">
                      <span className="text-purple-600 mr-3 text-xl">•</span>
                      <div className="text-gray-700">You can choose not to share certain information by not using specific features</div>
                    </div>
                    <div className="flex items-start bg-white p-3 rounded-lg">
                      <span className="text-purple-600 mr-3 text-xl">•</span>
                      <div className="text-gray-700">Device permissions can be managed through your device settings</div>
                    </div>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-10 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 pb-3 border-b-4 border-yellow-500">
                8. Children's Privacy
              </h2>
              <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-4 md:p-6 rounded-xl border-2 border-yellow-300">
                <p className="text-base md:text-lg text-gray-700 mb-4">
                  ClipToon is not intended for children under the age of 13. We do not knowingly collect personal information from children
                  under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact
                  us so we can delete such information.
                </p>
                <div className="bg-yellow-100 p-4 rounded-lg inline-block">
                  <p className="text-lg md:text-xl font-bold text-gray-900">Age Recommendation: 13+</p>
                </div>
              </div>
            </section>

            <section className="mb-10 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 pb-3 border-b-4 border-cyan-500">
                9. International Data Transfers
              </h2>
              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-4 md:p-6 rounded-xl">
                <p className="text-base md:text-lg text-gray-700">
                  Your information may be transferred to and processed in countries other than your country of residence. These countries may
                  have data protection laws different from those in your country. By using ClipToon, you consent to the transfer of your
                  information to our servers and third-party service providers.
                </p>
              </div>
            </section>

            <section className="mb-10 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 pb-3 border-b-4 border-red-500">
                10. Content and Copyright
              </h2>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-red-50 to-pink-50 p-4 md:p-6 rounded-xl">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3 md:mb-4">10.1 Source Content</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 text-xl">•</span>
                      <div className="text-gray-700">All stickers are created from publicly available YouTube videos</div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 text-xl">•</span>
                      <div className="text-gray-700">Original video content remains the property of respective copyright holders</div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 text-xl">•</span>
                      <div className="text-gray-700">ClipToon is for personal, non-commercial use</div>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-4 md:p-6 rounded-xl">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3 md:mb-4">10.2 Fair Use</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-3 text-xl">•</span>
                      <div className="text-gray-700">Stickers are transformative excerpts intended for commentary, parody, and personal expression</div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-3 text-xl">•</span>
                      <div className="text-gray-700">Users are responsible for complying with applicable copyright laws when sharing content</div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-10 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 pb-3 border-b-4 border-indigo-500">
                11. Cookies and Tracking Technologies
              </h2>
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 md:p-6 rounded-xl">
                <p className="text-base md:text-lg text-gray-700">
                  ClipToon does not use cookies. However, third-party services integrated into the app may use similar tracking technologies.
                  Please refer to the privacy policies of those services for more information.
                </p>
              </div>
            </section>

            <section className="mb-10 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 pb-3 border-b-4 border-teal-500">
                12. Data Retention
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-4 md:p-5 rounded-xl border-t-4 border-teal-500">
                  <h4 className="font-bold text-gray-900 mb-2">Local Data</h4>
                  <p className="text-sm md:text-base text-gray-700">Retained on your device until you delete it or uninstall the app</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 md:p-5 rounded-xl border-t-4 border-blue-500">
                  <h4 className="font-bold text-gray-900 mb-2">Search Data</h4>
                  <p className="text-sm md:text-base text-gray-700">Temporarily processed and not permanently stored</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 md:p-5 rounded-xl border-t-4 border-purple-500">
                  <h4 className="font-bold text-gray-900 mb-2">Usage Analytics</h4>
                  <p className="text-sm md:text-base text-gray-700">Retained for a reasonable period to improve app performance</p>
                </div>
              </div>
            </section>

            <section className="mb-10 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 pb-3 border-b-4 border-blue-500">
                13. Changes to This Privacy Policy
              </h2>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 md:p-6 rounded-xl">
                <p className="text-base md:text-lg text-gray-700 mb-4">We may update this Privacy Policy from time to time. We will notify you of any material changes by:</p>
                <div className="space-y-3">
                  <div className="flex items-start bg-white p-3 rounded-lg">
                    <span className="text-blue-600 mr-3 text-xl">📱</span>
                    <div className="text-gray-700">Posting the new Privacy Policy in the app</div>
                  </div>
                  <div className="flex items-start bg-white p-3 rounded-lg">
                    <span className="text-blue-600 mr-3 text-xl">📅</span>
                    <div className="text-gray-700">Updating the "Last Updated" date</div>
                  </div>
                  <div className="flex items-start bg-white p-3 rounded-lg">
                    <span className="text-blue-600 mr-3 text-xl">🔔</span>
                    <div className="text-gray-700">Sending a notification through the app (for significant changes)</div>
                  </div>
                </div>
                <p className="text-gray-700 mt-4 bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow-400">
                  Your continued use of ClipToon after changes constitutes acceptance of the updated policy.
                </p>
              </div>
            </section>

            <section className="mb-10 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 pb-3 border-b-4 border-purple-500">
                14. Contact Us
              </h2>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 md:p-6 rounded-xl">
                <p className="text-base md:text-lg text-gray-700 mb-4">
                  If you have questions, concerns, or requests regarding this Privacy Policy or your data, please contact us:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 md:p-6 rounded-lg shadow-md border-l-4 border-purple-500">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-2">📧</span>
                      <h4 className="font-bold text-gray-900">Email</h4>
                    </div>
                    <p className="text-sm md:text-base text-gray-700">kernalrise@gmail.com</p>
                  </div>
                  <div className="bg-white p-4 md:p-6 rounded-lg shadow-md border-l-4 border-pink-500">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-2">📍</span>
                      <h4 className="font-bold text-gray-900">Address</h4>
                    </div>
                    <p className="text-sm md:text-base text-gray-700">Hyderabad, Telangana, India</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-10 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 pb-3 border-b-4 border-green-500">
                15. Additional Information for Specific Regions
              </h2>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 md:p-6 rounded-xl border-2 border-blue-300">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3 md:mb-4 flex items-center">
                    <span className="mr-3 text-2xl">🇪🇺</span>
                    15.1 For European Users (GDPR)
                  </h3>
                  <p className="text-gray-700 mb-3">
                    If you are located in the European Economic Area (EEA), you have additional rights under GDPR:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="bg-white p-3 rounded-lg flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span className="text-sm md:text-base text-gray-700">Right to access your personal data</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span className="text-sm md:text-base text-gray-700">Right to rectification</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span className="text-sm md:text-base text-gray-700">Right to erasure ("right to be forgotten")</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span className="text-sm md:text-base text-gray-700">Right to data portability</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span className="text-sm md:text-base text-gray-700">Right to object to processing</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span className="text-sm md:text-base text-gray-700">Right to withdraw consent</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-50 to-orange-50 p-4 md:p-6 rounded-xl border-2 border-red-300">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3 md:mb-4 flex items-center">
                    <span className="mr-3 text-2xl">🇺🇸</span>
                    15.2 For California Users (CCPA)
                  </h3>
                  <p className="text-gray-700 mb-3">California residents have the right to:</p>
                  <div className="space-y-2">
                    <div className="bg-white p-3 rounded-lg flex items-start">
                      <span className="text-red-600 mr-2">✓</span>
                      <span className="text-sm md:text-base text-gray-700">Know what personal information is collected</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg flex items-start">
                      <span className="text-red-600 mr-2">✓</span>
                      <span className="text-sm md:text-base text-gray-700">Know if personal information is sold or disclosed</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg flex items-start">
                      <span className="text-red-600 mr-2">✓</span>
                      <span className="text-sm md:text-base text-gray-700">Opt-out of the sale of personal information</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg flex items-start">
                      <span className="text-red-600 mr-2">✓</span>
                      <span className="text-sm md:text-base text-gray-700">Access their personal information</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg flex items-start">
                      <span className="text-red-600 mr-2">✓</span>
                      <span className="text-sm md:text-base text-gray-700">Request deletion of personal information</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg flex items-start">
                      <span className="text-red-600 mr-2">✓</span>
                      <span className="text-sm md:text-base text-gray-700">Non-discrimination for exercising privacy rights</span>
                    </div>
                  </div>
                  <div className="mt-4 bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
                    <p className="text-sm md:text-base font-semibold text-gray-800">Note: ClipToon does not sell personal information.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 pb-3 border-b-4 border-pink-500">
                16. Consent
              </h2>
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-4 md:p-6 rounded-xl border-2 border-pink-300">
                <p className="text-base md:text-lg text-gray-700 text-center font-medium">
                  By using ClipToon, you hereby consent to our Privacy Policy and agree to its terms.
                </p>
              </div>
            </section>

            <div className="border-t-4 border-gradient-to-r from-blue-500 via-purple-500 to-pink-500 pt-6 mt-8">
              <div className="bg-gray-50 p-4 md:p-6 rounded-xl text-center">
                <p className="text-sm md:text-base text-gray-600 italic">
                  This privacy policy was last updated on December 3, 2025 and is effective as of December 3, 2025.
                </p>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-8 md:mt-12 text-center">
          <div className="bg-white/20 backdrop-blur-lg rounded-xl p-4 md:p-6">
            <p className="text-white text-sm md:text-base font-medium">
              &copy; {new Date().getFullYear()} ClipToon. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
