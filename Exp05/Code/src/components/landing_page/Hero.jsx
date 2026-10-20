import { Link } from 'react-router-dom'

export default function Hero() {
  const _features = [
    {
      icon: 'fa-bolt-lightning',
      title: 'Lightning Deployments',
      description: 'Ship your web apps in seconds with automatic Git CI/CD triggers and instant rollbacks.',
    },
    {
      icon: 'fa-shield-halved',
      title: 'Enterprise Security',
      description: 'Built-in DDoS protection, automatic SSL certificates, and granular access controls.',
    },
    {
      icon: 'fa-chart-pie',
      title: 'Real-Time Insights',
      description: 'Deep telemetry, live request logs, and anomaly detection right in your console.',
    },
    {
      icon: 'fa-globe',
      title: 'Global Edge Network',
      description: 'Deliver ultra-low latency experiences to users across 300+ edge nodes worldwide.',
    },
  ]

  const stats = [
    { value: '99.99%', label: 'Uptime SLA' },
    { value: '< 20ms', label: 'Global Edge Latency' },
    { value: '250K+', label: 'Active Builds Monthly' },
    { value: '4.9 / 5', label: 'Developer Rating' },
  ]

  return (
    <div className="h-full flex flex-col justify-center items-center py-6 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center overflow-hidden">
      {/* Pill Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mb-4">
        <i className="fa-solid fa-wand-magic-sparkles text-indigo-500"></i>
        Next-Gen Cloud Platform
      </div>

      {/* Headline */}
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight sm:leading-tight">
        Build, Deploy &amp; Scale Modern Apps at{' '}
        <span className="text-indigo-600">Warp Speed</span>
      </h1>

      {/* Subtitle */}
      <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
        NovaStack gives modern engineering teams high-performance compute, zero-configuration edge deployments, and instant global CDN infrastructure.
      </p>

      {/* CTA Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          to="/about"
          className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition shadow-sm"
        >
          Learn More About Us
          <i className="fa-solid fa-arrow-right ml-2 text-sm"></i>
        </Link>
        <Link
          to="/support"
          className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg text-base font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition"
        >
          <i className="fa-solid fa-headset mr-2 text-sm text-indigo-600"></i>
          Contact Support
        </Link>
      </div>

      {/* Quick Stats Grid */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 shadow-xs w-full max-w-4xl">
        {stats.map((stat, idx) => (
          <div key={idx} className="text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-indigo-600">{stat.value}</div>
            <div className="text-xs sm:text-sm font-medium text-gray-500 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
