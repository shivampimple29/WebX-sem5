import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinkClasses = ({ isActive }) =>
    `px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-200 ${
      isActive
        ? 'text-indigo-600 bg-indigo-50 font-semibold'
        : 'text-gray-600 hover:text-indigo-600 hover:bg-gray-50'
    }`

  const mobileNavLinkClasses = ({ isActive }) =>
    `block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
      isActive
        ? 'text-indigo-600 bg-indigo-50 font-semibold'
        : 'text-gray-600 hover:text-indigo-600 hover:bg-gray-50'
    }`

  return (
    <nav className="bg-white border-b border-gray-100 flex-shrink-0 z-50 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Brand Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 text-lg font-bold text-gray-900 group">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-600 text-white shadow-xs group-hover:bg-indigo-700 transition">
                <i className="fa-solid fa-cubes text-sm"></i>
              </span>
              <span className="tracking-tight">
                Nova<span className="text-indigo-600">Stack</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <NavLink to="/" end className={navLinkClasses}>
              <i className="fa-solid fa-house mr-1.5 text-xs"></i>
              Home
            </NavLink>
            <NavLink to="/about" className={navLinkClasses}>
              <i className="fa-solid fa-circle-info mr-1.5 text-xs"></i>
              About
            </NavLink>
            <NavLink to="/support" className={navLinkClasses}>
              <i className="fa-solid fa-headset mr-1.5 text-xs"></i>
              Support
            </NavLink>
          </div>

          {/* Action Button */}
          <div className="hidden md:flex items-center">
            <Link
              to="/support"
              className="inline-flex items-center justify-center px-3.5 py-1.5 text-xs font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition shadow-xs"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-1.5 rounded-md text-gray-600 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-base`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-2 space-y-1 shadow-sm absolute left-0 right-0 top-14 z-50">
          <NavLink
            to="/"
            end
            className={mobileNavLinkClasses}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <i className="fa-solid fa-house mr-2 text-xs"></i>
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={mobileNavLinkClasses}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <i className="fa-solid fa-circle-info mr-2 text-xs"></i>
            About
          </NavLink>
          <NavLink
            to="/support"
            className={mobileNavLinkClasses}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <i className="fa-solid fa-headset mr-2 text-xs"></i>
            Support
          </NavLink>
        </div>
      )}
    </nav>
  )
}
