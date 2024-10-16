import React from 'react';
import { Rocket } from 'lucide-react';

interface HeaderProps {
  onLoginClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLoginClick }) => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Rocket className="w-8 h-8 text-blue-600 mr-2" />
          <span className="text-2xl font-bold text-blue-600">Clickraken</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Dienstleistungen</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Über uns</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Kontakt</a></li>
            <li>
              <button onClick={onLoginClick} className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                Login
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;