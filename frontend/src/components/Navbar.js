import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bugReportOpen, setBugReportOpen] = useState(false);
  const [bugDescription, setBugDescription] = useState('');
  const [submitStatus, setSubmitStatus] = useState('');
  const [menuVisible, setMenuVisible] = useState(false);
  const fileInputRef = useRef(null);
  const menuRef = useRef(null);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
    setMenuVisible(false);
  }, [location]);

  // Handle clicks outside menu to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.closest('button[aria-label="Toggle menu"]')) {
        setMenuOpen(false);
        setTimeout(() => setMenuVisible(false), 300);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle visibility with delay for animations
  useEffect(() => {
    if (menuOpen) {
      setMenuVisible(true);
    } else {
      const timer = setTimeout(() => {
        setMenuVisible(false);
      }, 300); // Match this with CSS transition duration
      return () => clearTimeout(timer);
    }
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const openBugReport = () => {
    setMenuOpen(false);
    setBugReportOpen(true);
  };

  const closeBugReport = () => {
    setBugReportOpen(false);
    setBugDescription('');
    setSubmitStatus('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmitBug = async (e) => {
    e.preventDefault();
    
    if (!bugDescription.trim()) {
      setSubmitStatus('Please provide a bug description');
      return;
    }
    
    setSubmitStatus('Sending...');
    
    try {
      // Create email subject and body
      const subject = encodeURIComponent('InterSTORY Bug Report');
      const body = encodeURIComponent(bugDescription);
      
      // Open default email client
      window.location.href = `mailto:red40667@gmail.com?subject=${subject}&body=${body}`;
      
      // Show success message
      setTimeout(() => {
        setSubmitStatus('Bug report email prepared. Please send from your email client.');
        setTimeout(() => {
          closeBugReport();
        }, 3000);
      }, 1000);
      
    } catch (error) {
      console.error('Error preparing bug report email:', error);
      setSubmitStatus('Failed to prepare bug report email. Please try again.');
    }
  };

  return (
    <div className="w-full" style={{ backgroundColor: 'rgb(71, 88, 76)', padding: '20px', position: 'relative', zIndex: 1000 }}>
      <div className="flex justify-between items-center ml-32">
        <div className="flex-1">
          <Link to="/Home" className="text-3xl font-bold" style={{ color: 'rgb(233, 226, 207)' }}>InterSTORY</Link>
        </div>
        <div className="flex-1 flex justify-end">
          <div className="hidden lg:flex space-x-6 mr-32">
            <Link 
              className="text-xl font-medium hover:opacity-80 transition-opacity duration-200" 
              style={{ color: 'rgb(233, 226, 207)', position: 'relative', zIndex: 1001 }} 
              to="/about"
            >
              About
            </Link>
            <button 
              className="text-xl font-medium hover:opacity-80 transition-opacity duration-200" 
              style={{ color: 'rgb(233, 226, 207)', position: 'relative', zIndex: 1001 }} 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              Menu
            </button>
          </div>
        </div>
      </div>
      
      {menuVisible && (
        <div 
          ref={menuRef}
          className={`absolute top-20 right-32 rounded-lg shadow-lg p-4 transition-all duration-300 ease-in-out ${menuOpen ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-2'}`} 
          style={{ 
            backgroundColor: 'rgb(71, 88, 76)', 
            width: '250px',
            position: 'absolute',
            zIndex: 1002
          }}
        >
          <Link 
            className="block px-4 py-2 text-lg hover:bg-opacity-20 hover:bg-white transition-colors duration-200 rounded" 
            style={{ color: 'rgb(233, 226, 207)', position: 'relative', zIndex: 1003 }} 
            to="/sources"
          >
            Sources
          </Link>
          <hr className="my-2 border-t border-gray-200 opacity-30" style={{ marginLeft: '16px', marginRight: '16px' }} />
          <button 
            className="block w-full text-left px-4 py-2 text-lg hover:bg-opacity-20 hover:bg-white transition-colors duration-200 rounded" 
            style={{ color: 'rgb(233, 226, 207)', position: 'relative', zIndex: 1003 }} 
            onClick={openBugReport}
          >
            Report a bug
          </button>
        </div>
      )}
      
      {bugReportOpen && (
        <div 
          className="fixed inset-0 flex items-center justify-center transition-opacity duration-300"
          style={{ 
            backgroundColor: 'rgba(0, 0, 0, 0.5)', 
            position: 'fixed', 
            zIndex: 2000,
            opacity: bugReportOpen ? 1 : 0
          }}
        >
          <div 
            className="relative bg-white rounded-lg shadow-xl p-6 m-4 transition-transform duration-300 transform"
            style={{ 
              backgroundColor: 'rgb(200, 193, 174)',
              maxWidth: '600px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              scrollbarWidth: 'thin',
              scrollbarColor: 'rgba(71, 88, 76, 0.3) transparent',
              position: 'relative',
              zIndex: 2001,
              transform: bugReportOpen ? 'scale(1)' : 'scale(0.95)'
            }}
          >
            <div className="flex justify-between items-center mb-4 border-b pb-2" style={{ borderColor: 'rgb(71, 88, 76)', position: 'relative', zIndex: 2002 }}>
              <h2 className="text-2xl font-semibold" style={{ color: 'rgb(71, 88, 76)' }}>Report a Bug</h2>
              <button 
                onClick={closeBugReport}
                className="text-xl font-bold hover:opacity-70 transition-opacity duration-200"
                style={{ color: 'rgb(71, 88, 76)', position: 'relative', zIndex: 2003 }}
              >
                &times;
              </button>
            </div>
            
            <form onSubmit={handleSubmitBug} style={{ position: 'relative', zIndex: 2002 }}>
              <div className="mb-4">
                <label className="block mb-2 text-lg font-medium" style={{ color: 'rgb(71, 88, 76)' }}>
                  Describe the bug:
                </label>
                <textarea
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors duration-200"
                  style={{ 
                    borderColor: 'rgb(71, 88, 76)', 
                    minHeight: '150px',
                    color: 'rgb(71, 88, 76)',
                    backgroundColor: 'rgb(233, 226, 207)'
                  }}
                  value={bugDescription}
                  onChange={(e) => setBugDescription(e.target.value)}
                  placeholder="Please describe what happened and how to reproduce the issue..."
                ></textarea>
              </div>
              
              <div className="mb-4">
                <p className="text-sm italic" style={{ color: 'rgb(71, 88, 76)' }}>
                  Note: Clicking "Send Report" will open your email client with the report pre-filled. 
                  You'll need to attach any screenshots manually before sending.
                </p>
              </div>
              
              {submitStatus && (
                <div 
                  className="mb-4 p-2 text-center rounded transition-all duration-300" 
                  style={{ 
                    backgroundColor: submitStatus.includes('success') || submitStatus.includes('prepared') ? 'rgba(0, 128, 0, 0.2)' : 'rgba(255, 0, 0, 0.2)',
                    opacity: submitStatus ? 1 : 0
                  }}
                >
                  {submitStatus}
                </div>
              )}
              
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2 text-lg font-medium rounded-lg transition-all duration-200 hover:shadow-md"
                  style={{ 
                    backgroundColor: 'rgb(71, 88, 76)',
                    color: 'rgb(233, 226, 207)',
                    border: '2px solid rgb(71, 88, 76)',
                    position: 'relative', 
                    zIndex: 2003
                  }}
                >
                  Send Report
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;