import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useClerk, useUser } from '@clerk/clerk-react';

const Navbar: React.FC = () => {
  const { user } = useUser();
  const { signOut } = useClerk();
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-md py-4 px-4 md:px-8 sticky top-0 z-10" aria-label="Main navigation">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600" aria-label="GenDoc Home">
          GenDoc
        </Link>
        <div className="flex gap-4 items-center">
          <Link to="#why-gendoc" className="text-gray-600 hover:text-blue-600" aria-label="Why GenDoc">
            Why GenDoc
          </Link>
          <Link to="#use-cases" className="text-gray-600 hover:text-blue-600" aria-label="Use Cases">
            Use Cases
          </Link>
          <Link to="#blog" className="text-gray-600 hover:text-blue-600" aria-label="Blog">
            Blog
          </Link>
          <Link to="#contact" className="text-gray-600 hover:text-blue-600" aria-label="Contact">
            Contact
          </Link>
          {user ? (
            <>
              <Link to="/dashboard" className="text-gray-600 hover:text-blue-600" aria-label="Dashboard">
                Dashboard
              </Link>
              <button
                onClick={() => signOut(() => navigate('/sign-in'))}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-label="Sign out"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link
                to="/sign-in"
                className="text-gray-600 hover:text-blue-600"
                aria-label="Sign in"
              >
                Sign In
              </Link>
              <Link
                to="/sign-up"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-label="Sign up"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;