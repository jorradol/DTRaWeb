import React, { useRef, useState, useEffect } from 'react';
import Hero from './components/Hero';
import AssistanceForm from './components/AssistanceForm';
import EducationSection from './components/EducationSection';
import Footer from './components/Footer';
import AdminDashboard from './components/AdminDashboard';

function App() {
  const formRef = useRef<HTMLDivElement>(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Simple hash-based router for demo purposes
    const handleHashChange = () => {
      setIsAdmin(window.location.hash === '#admin');
    };

    // Check on mount
    handleHashChange();

    // Listen for changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBackToHome = () => {
      window.location.hash = '';
  };

  if (isAdmin) {
      return <AdminDashboard onBack={handleBackToHome} />;
  }

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Hero onScrollToForm={scrollToForm} />
      
      <main className="flex-grow bg-gray-100">
        <div ref={formRef} className="max-w-3xl mx-auto px-4 py-12 -mt-10 md:-mt-20 relative z-10">
           <AssistanceForm />
        </div>
        
        <EducationSection />
      </main>

      <Footer />
      
      {/* Sticky Bottom Call Button for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-gray-200 md:hidden z-40 flex gap-2 shadow-lg">
        <a href="tel:0633435534" className="flex-1 bg-red-600 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 shadow">
            <span className="text-lg">📞 โทรเลย</span>
        </a>
        <button onClick={scrollToForm} className="flex-1 bg-slate-800 text-white py-3 rounded-lg font-bold shadow">
            แจ้งเหตุ
        </button>
      </div>
    </div>
  );
}

export default App;