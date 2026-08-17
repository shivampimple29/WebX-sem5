import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="h-full flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div>
          <h2 className="text-xs font-bold text-indigo-600 uppercase tracking-widest">Our Story</h2>
          <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            Designed by developers, for developers
          </h3>
          <p className="mt-4 text-gray-600 leading-relaxed text-sm sm:text-base">
            Modern web development should feel effortless. Too often, engineering teams spend countless hours wrestling with deployment configurations, server orchestration, and complex networking.
          </p>
          <p className="mt-3 text-gray-600 leading-relaxed text-sm sm:text-base">
            NovaStack abstracts the heavy lifting behind seamless interfaces and high-speed edge networks, so you can focus entirely on what matters: building unforgettable applications.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <Link
              to="/support"
              className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-700"
            >
              Have questions? Connect with our team <i className="fa-solid fa-arrow-right ml-1.5 text-xs"></i>
            </Link>
          </div>
        </div>

        {/* Visual Card / Highlights */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs">
          <h4 className="text-lg font-bold text-gray-900">Key Focus Areas</h4>
          <div className="space-y-4">
            <div className="flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-md bg-indigo-600 text-white flex items-center justify-center shrink-0-sm">
                <i className="fa-solid fa-rocket"></i>
              </div>
              <div>
                <h5 className="text-sm font-semibold text-gray-900">Zero-Config Deployment</h5>
                <p className="text-xs text-gray-600 mt-0.5">Automated building and distribution from source code to edge.</p>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-md bg-indigo-600 text-white flex items-center justify-center shrink-0 text-sm">
                <i className="fa-solid fa-server"></i>
              </div>
              <div>
                <h5 className="text-sm font-semibold text-gray-900">Global Edge Compute</h5>
                <p className="text-xs text-gray-600 mt-0.5">Microsecond runtime orchestration nearest to your end users.</p>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-md bg-indigo-600 text-white flex items-center justify-center shrink-0 text-sm">
                <i className="fa-solid fa-shield"></i>
              </div>
              <div>
                <h5 className="text-sm font-semibold text-gray-900">Ironclad Infrastructure</h5>
                <p className="text-xs text-gray-600 mt-0.5">Enterprise security protocols baked into every single layer.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
