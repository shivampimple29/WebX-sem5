import { useState } from 'react'

export default function Support() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true)
    }
  }

  return (
    <div className="h-full flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Contact Form */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">Submit a Support Ticket</h2>
          <p className="text-xs sm:text-sm text-gray-500 mb-5">
            Our support team typically responds within 1 to 2 business hours.
          </p>

          {submitted ? (
            <div className="p-6 rounded-xl bg-green-50 border border-green-200 text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                <i className="fa-solid fa-check text-xl"></i>
              </div>
              <h3 className="text-base font-bold text-green-800">Message Dispatched!</h3>
              <p className="text-xs sm:text-sm text-green-700">
                Thank you, <span className="font-semibold">{formData.name}</span>. We have received your inquiry and our support team will reach out to <span className="font-semibold">{formData.email}</span> shortly.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false)
                  setFormData({ name: '', email: '', subject: 'general', message: '' })
                }}
                className="mt-3 px-4 py-2 bg-green-600 text-white rounded-lg text-xs font-semibold hover:bg-green-700 transition"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Shivam Pimple"
                    className="w-full px-3.5 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full px-3.5 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Inquiry Type</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition bg-white"
                >
                  <option value="general">General Support</option>
                  <option value="technical">Routing &amp; Build Questions</option>
                  <option value="billing">Cloud &amp; Deployment Queries</option>
                  <option value="other">Other Inquiries</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Message</label>
                <textarea
                  rows={3}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your question or issue in detail..."
                  className="w-full px-3.5 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg text-sm transition shadow-xs"
              >
                Submit Support Ticket
              </button>
            </form>
          )}
        </div>

        {/* Direct Contact Info */}
        <div className="lg:col-span-5 space-y-5">
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs space-y-4">
            <h3 className="text-base font-bold text-gray-900">Direct Contact Channels</h3>

            <div className="flex items-start gap-3 text-sm text-gray-600">
              <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
                <i className="fa-solid fa-envelope text-xs"></i>
              </div>
              <div>
                <div className="font-semibold text-gray-900 text-xs">Email Desk</div>
                <div className="text-xs text-gray-500">support@novastack.dev</div>
              </div>
            </div>

            <div className="flex items-start gap-3 text-sm text-gray-600">
              <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
                <i className="fa-brands fa-discord text-xs"></i>
              </div>
              <div>
                <div className="font-semibold text-gray-900 text-xs">Discord Server</div>
                <div className="text-xs text-gray-500">discord.gg/novastack-dev</div>
              </div>
            </div>

            <div className="flex items-start gap-3 text-sm text-gray-600">
              <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
                <i className="fa-solid fa-clock text-xs"></i>
              </div>
              <div>
                <div className="font-semibold text-gray-900 text-xs">Support Hours</div>
                <div className="text-xs text-gray-500">24/7 Automated Monitoring &amp; Live Chat</div>
              </div>
            </div>
          </div>

          {/* Status card */}
          <div className="p-4 rounded-xl bg-indigo-50/80 border border-indigo-100 flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-medium text-indigo-900">
              All Systems Operational &mdash; 100% Core APIs Healthy
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
