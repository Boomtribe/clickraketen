import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Über Clickraken</h3>
            <p className="text-sm">Wir sind Ihr Partner für erfolgreiches B2B Online Marketing im deutschsprachigen Raum.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Dienstleistungen</h3>
            <ul className="text-sm">
              <li className="mb-2"><a href="#" className="hover:text-blue-400">Datenanalyse</a></li>
              <li className="mb-2"><a href="#" className="hover:text-blue-400">Lead-Generierung</a></li>
              <li className="mb-2"><a href="#" className="hover:text-blue-400">Account-Based Marketing</a></li>
              <li className="mb-2"><a href="#" className="hover:text-blue-400">Content-Marketing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <p className="text-sm mb-2">Email: info@clickraken.de</p>
            <p className="text-sm mb-2">Tel: +49 123 456789</p>
            <p className="text-sm">Adresse: Musterstraße 123, 12345 Berlin</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Folgen Sie uns</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400"><Facebook /></a>
              <a href="#" className="hover:text-blue-400"><Twitter /></a>
              <a href="#" className="hover:text-blue-400"><Linkedin /></a>
              <a href="#" className="hover:text-blue-400"><Instagram /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
          <p>&copy; 2024 Clickraken. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;