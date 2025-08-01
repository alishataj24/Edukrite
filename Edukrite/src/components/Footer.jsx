import React from 'react';
import EdukriteLogo from '../assets/edukrite-logo.svg'; 

const Footer = () => {
  return (
    <footer className="bg-charcoal-black text-pure-white py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-y-10 md:gap-x-12 mb-12 border-b border-medium-gray pb-10">
          
          {/* Column 1: Logo and Tagline */}
          <div className="md:col-span-2 flex flex-col items-start">
            <a href="/" className="mb-4">
              <img src={EdukriteLogo} alt="Edukrite Logo" className="h-10" />
            </a>
            <p className="font-satoshi text-medium-gray text-sm leading-relaxed">
              Master the skills schools skip.<br />Your personal OS for real-world success.
            </p>
          </div>

          {/* Navigation Links Columns (Grid within the main grid) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:col-span-3 gap-y-10 sm:gap-x-12">
            
            {/* Column 2: Company */}
            <div>
              <h3 className="font-satoshi text-lg font-bold mb-4">Company</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="/about-us" className="font-satoshi text-medium-gray hover:text-pure-white transition-colors duration-200">About Us</a></li>
                <li><a href="/creators" className="font-satoshi text-medium-gray hover:text-pure-white transition-colors duration-200">Creators</a></li>
                <li><a href="/blog" className="font-satoshi text-medium-gray hover:text-pure-white transition-colors duration-200">Blog</a></li>
              </ul>
            </div>

            {/* Column 3: Learn */}
            <div>
              <h3 className="font-satoshi text-lg font-bold mb-4">Learn</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="/how-it-works" className="font-satoshi text-medium-gray hover:text-pure-white transition-colors duration-200">How It Works</a></li>
                <li><a href="/skills" className="font-satoshi text-medium-gray hover:text-pure-white transition-colors duration-200">Skills</a></li>
                <li><a href="/pricing" className="font-satoshi text-medium-gray hover:text-pure-white transition-colors duration-200">Pricing</a></li>
              </ul>
            </div>

            {/* Column 4: Support */}
            <div>
              <h3 className="font-satoshi text-lg font-bold mb-4">Support</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="/faq" className="font-satoshi text-medium-gray hover:text-pure-white transition-colors duration-200">FAQ</a></li>
                <li><a href="/contact" className="font-satoshi text-medium-gray hover:text-pure-white transition-colors duration-200">Contact Us</a></li>
              </ul>
            </div>

            {/* Column 5: Legal & Connect (Refactored to align horizontally on desktop) */}
            <div className="grid grid-cols-1 md:grid-cols-2 mt-8 md:mt-0 gap-8">
              <div>
                  <h3 className="font-satoshi text-lg font-bold mb-4">Legal</h3>
                  <ul className="space-y-3 text-sm">
                    <li><a href="/privacy-policy" className="font-satoshi text-medium-gray hover:text-pure-white transition-colors duration-200">Privacy Policy</a></li>
                    <li><a href="/terms-of-service" className="font-satoshi text-medium-gray hover:text-pure-white transition-colors duration-200">Terms of Service</a></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-satoshi text-lg font-bold mb-4">Connect</h3>
                  <div className="flex space-x-4">
                    {/* Social media icons with consistent sizing */}
                    <a href="https://instagram.com/your-edukrite" target="_blank" rel="noopener noreferrer" className="text-pure-white hover:text-medium-gray transition-colors duration-200">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.717.01 3.654.047 1.001.032 1.5.155 1.854.385.344.22.628.5.848.848.23.354.353.853.385 1.854.037.937.047 1.224.047 3.654s-.01 2.717-.047 3.654c-.032 1.001-.155 1.5-.385 1.854-.22.344-.5.628-.848.848-.354.23-.853.353-1.854.385-.937.037-1.224.047-3.654.047s-2.717-.01-3.654-.047c-1.001-.032-1.5-.155-1.854-.385-.344-.22-.628-.5-.848-.848-.23-.354-.353-.853-.385-1.854-.037-.937-.047-1.224-.047-3.654s.01-2.717.047-3.654c.032-1.001.155-1.5.385-1.854.22-.344.5-.628.848-.848.354-.23.853-.353 1.854-.385.937-.037 1.224-.047 3.654-.047ZM12 2.16c-2.719 0-3.04.01-4.12.057-1.119.043-1.82.195-2.324.463-.61.325-1.11.762-1.612 1.264-.502.502-.939 1.002-1.264 1.612-.268.504-.42 1.205-.463 2.324C2.17 8.96 2.16 9.281 2.16 12s.01 3.04.057 4.12c.043 1.119.195 1.82.463 2.324.325.61.762 1.11 1.264 1.612.502.502 1.002.939 1.612 1.264.504.268 1.205.42 2.324.463C8.96 21.83 9.281 21.84 12 21.84s3.04-.01 4.12-.057c1.119-.043 1.82-.195 2.324-.463.325-.61.762-1.11 1.264-1.612.502-.502.939-1.002 1.612-1.264.504-.268 1.205-.42 2.324-.463C21.83 15.04 21.84 14.719 21.84 12s-.01-3.04-.057-4.12c-.043-1.119-.195-1.82-.463-2.324-.325-.61-.762-1.11-1.264-1.612-.502-.502-1.002-.939-1.612-1.264-.504-.268-1.205-.42-2.324-.463C15.04 2.17 14.719 2.16 12 2.16Zm.937 4.86a.94.94 0 1 0 0 1.88.94.94 0 0 0 0-1.88ZM12 8.568a3.432 3.432 0 1 0 0 6.864 3.432 3.432 0 0 0 0-6.864Zm0 1.88a1.552 1.552 0 1 1 0 3.104 1.552 1.552 0 0 1 0-3.104Z" clipRule="evenodd" /></svg>
                    </a>
                    <a href="https://linkedin.com/company/your-edukrite" target="_blank" rel="noopener noreferrer" className="text-pure-white hover:text-medium-gray transition-colors duration-200">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                    </a>
                    <a href="https://twitter.com/your-edukrite" target="_blank" rel="noopener noreferrer" className="text-pure-white hover:text-medium-gray transition-colors duration-200">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.261 8.849 10.089H16.884l-5.606-6.398L6.22 21.75H2.912l7.186-8.19L2.836 2.25H6.15L11.549 9.173 18.244 2.25Zm-4.99 1.554L6.109 20.25H4.15L12.003 3.804h2.25Z" /></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="text-center text-sm font-satoshi text-medium-gray">
          <p>&copy; {new Date().getFullYear()} Edukrite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;