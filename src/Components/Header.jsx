// import { useEffect } from "react";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import useOnlineStatus from "../utils/useOnlineStatus";

// const Header = () => {
//   const [islogged, setislogged] = useState(false);
//   const onlineStatus = useOnlineStatus();

//   useEffect(() => {
//     console.log("UseEffect Called");
//   }, [islogged]);

//   return (
//     <div className="flex justify-between items-center my-8 p-4 bg-amber-100 shadow-lg">
//       <div className="flex items-center justify-between">
//         <Link to="/">
//           <img className="h-30 w-70 p-2" src="src\assets\Food.png"></img>
//         </Link>
//       </div>
//       <div className="flex items-center p-4">
//         <ul className="flex p-4 m-4 items-center space-x-6">
//           <li className=" px-4 rounded-md border border-amber-700 text-sm items-center">
//             Online Status : {onlineStatus === true ? "🟢" : "🔴"}
//           </li>
//           <li className="px-4 rounded-md border border-amber-700">
//             <Link to="/">Home</Link>
//           </li>
//           <li className="px-4 rounded-md border border-amber-700">
//             <Link to="/about">About Us</Link>
//           </li>
//           <li className="px-4 rounded-md border border-amber-700">
//             <Link to="/contact">Contact Us</Link>
//           </li>
//           <li className="px-4 rounded-md border border-amber-700">Cart</li>
//           <button 
//             className="px-4"
//             onClick={() => {
//               setislogged(!islogged);
//             }}
//           >
//             {islogged ? "LogOut" : "Login"}
//           </button>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Header;


import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [islogged, setislogged] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    console.log("UseEffect Called");
  }, [islogged]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                {/* <img 
                  className="h-12 w-auto transition-transform duration-300 group-hover:scale-110" 
                  src="src/assets/Food.png" 
                  alt="Food King Logo"
                /> */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-300"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  Food King
                </h1>
                <p className="text-xs text-gray-600">Delicious delivered</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {/* Online Status */}
            <div className="flex items-center bg-gray-50 rounded-full px-4 py-2 mr-4">
              <div className={`w-3 h-3 rounded-full mr-2 ${onlineStatus ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
              <span className="text-sm font-medium text-gray-700">
                {onlineStatus ? "Online" : "Offline"}
              </span>
            </div>

            {/* Navigation Links */}
            <Link 
              to="/" 
              className="px-4 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-200 font-medium"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="px-4 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-200 font-medium"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="px-4 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-200 font-medium"
            >
              Contact
            </Link>

            {/* Cart Button */}
            <button className="relative px-4 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-200 font-medium">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.8 5H19M7 13v8a2 2 0 002 2h6a2 2 0 002-2v-8m-8 0V9a2 2 0 012-2h4a2 2 0 012 2v4.01" />
                </svg>
                <span>Cart</span>
              </div>
              {/* Cart badge */}
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                0
              </div>
            </button>

            {/* Login/Logout Button */}
            <button
              onClick={() => setislogged(!islogged)}
              className={`ml-4 px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-md ${
                islogged
                  ? "bg-red-500 hover:bg-red-600 text-white shadow-red-200"
                  : "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-orange-200"
              }`}
            >
              {islogged ? (
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  <span>Logout</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                  <span>Login</span>
                </div>
              )}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-6 space-y-4">
              {/* Online Status Mobile */}
              <div className="flex items-center justify-center bg-gray-50 rounded-lg px-4 py-3">
                <div className={`w-3 h-3 rounded-full mr-2 ${onlineStatus ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
                <span className="text-sm font-medium text-gray-700">
                  Status: {onlineStatus ? "Online" : "Offline"}
                </span>
              </div>

              {/* Mobile Navigation Links */}
              <div className="space-y-2">
                <Link 
                  to="/" 
                  className="block px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors duration-200 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  🏠 Home
                </Link>
                <Link 
                  to="/about" 
                  className="block px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors duration-200 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  ℹ️ About Us
                </Link>
                <Link 
                  to="/contact" 
                  className="block px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors duration-200 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  📞 Contact Us
                </Link>
                <button className="w-full text-left px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors duration-200 font-medium">
                  🛒 Cart (0)
                </button>
              </div>

              {/* Mobile Login/Logout Button */}
              <button
                onClick={() => {
                  setislogged(!islogged);
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  islogged
                    ? "bg-red-500 hover:bg-red-600 text-white"
                    : "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
                }`}
              >
                {islogged ? "🚪 Logout" : "🔑 Login"}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;