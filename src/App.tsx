import React, { useState } from 'react';
import { Mail, Lock, ArrowRight, BarChart, Target, Users, Megaphone } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header onLoginClick={() => setShowLoginModal(true)} />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Clickraken: Ihr Partner für B2B Online Marketing</h1>
            <p className="text-xl mb-8">Steigern Sie Ihre Online-Präsenz und generieren Sie qualifizierte Leads im deutschsprachigen Raum.</p>
            <button onClick={() => setShowLoginModal(true)} className="bg-white text-blue-600 py-2 px-6 rounded-full font-semibold hover:bg-blue-100 transition duration-300">
              Jetzt starten
            </button>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Unsere Dienstleistungen</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ServiceCard
                icon={<BarChart className="w-12 h-12 text-blue-600" />}
                title="Datenanalyse"
                description="Nutzen Sie Daten, um fundierte Entscheidungen zu treffen und Ihre Marketingstrategie zu optimieren."
              />
              <ServiceCard
                icon={<Target className="w-12 h-12 text-blue-600" />}
                title="Lead-Generierung"
                description="Gewinnen Sie qualifizierte Leads durch zielgerichtete Kampagnen und Content-Marketing."
              />
              <ServiceCard
                icon={<Users className="w-12 h-12 text-blue-600" />}
                title="Account-Based Marketing"
                description="Personalisierte Strategien für Ihre wichtigsten Zielkunden im B2B-Bereich."
              />
              <ServiceCard
                icon={<Megaphone className="w-12 h-12 text-blue-600" />}
                title="Content-Marketing"
                description="Erstellen Sie wertvolle Inhalte, die Ihre Zielgruppe ansprechen und Ihre Expertise demonstrieren."
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-200 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Bereit, Ihr Online Marketing auf das nächste Level zu bringen?</h2>
            <p className="text-xl mb-8">Kontaktieren Sie uns für eine kostenlose Beratung und erfahren Sie, wie wir Ihr B2B-Unternehmen unterstützen können.</p>
            <button onClick={() => setShowLoginModal(true)} className="bg-blue-600 text-white py-3 px-8 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
              Jetzt Termin vereinbaren <ArrowRight className="inline-block ml-2" />
            </button>
          </div>
        </section>
      </main>

      <Footer />

      {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}
    </div>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default App;