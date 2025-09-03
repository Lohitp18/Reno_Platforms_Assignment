import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { School, PlusCircle, GraduationCap, Menu, X } from 'lucide-react';
import AddSchool from './pages/AddSchool';
import ShowSchools from './pages/ShowSchools';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Navigation Header */}
        <nav className="bg-white shadow-lg border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo and Title */}
              <div className="flex items-center space-x-3">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <h1 className="text-xl font-bold text-gray-900">SchoolHub</h1>
              </div>

              {/* Desktop Nav Links */}
              <div className="hidden md:flex items-center space-x-4">
                <Link
                  to="/"
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  <School className="h-4 w-4" />
                  <span>View Schools</span>
                </Link>
                <Link
                  to="/add-school"
                  className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <PlusCircle className="h-4 w-4" />
                  <span>Add School</span>
                </Link>
              </div>

              {/* Mobile Hamburger Button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-700 hover:text-gray-900 focus:outline-none"
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center space-x-2 px-4 py-3 border-b border-gray-100 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <School className="h-5 w-5" />
                <span>View Schools</span>
              </Link>
              <Link
                to="/add-school"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center space-x-2 px-4 py-3 bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                <PlusCircle className="h-5 w-5" />
                <span>Add School</span>
              </Link>
            </div>
          )}
        </nav>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<ShowSchools />} />
            <Route path="/add-school" element={<AddSchool />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
