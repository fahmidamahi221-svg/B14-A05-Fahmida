import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import Navbar from './componenets/Navbar';
import Hero from './componenets/Hero';
import TechnologyCard from './componenets/TechnologyCard';
import StackSidebar from './componenets/StackSidebar';
import Footer from './componenets/Footer';
import techData from './data/technologies.json';

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => {
      setTechnologies(techData);
      setLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

 
  const handleAddToStack = (tech) => {
    const isAlreadyAdded = stack.some((item) => item.id === tech.id);

    if (isAlreadyAdded) {
      toast.warning(`${tech.name} is already added to your stack!`);
      return;
    }

    setStack((prev) => [...prev, tech]);
    toast.success(`Added ${tech.name} to your stack!`);
  };

  
  const handleRemoveFromStack = (id) => {
    const itemToRemove = stack.find((item) => item.id === id);
    setStack((prev) => prev.filter((item) => item.id !== id));
    toast.info(`Removed ${itemToRemove?.name || 'technology'} from stack.`);
  };

  
  const handleRemoveAll = () => {
    setStack([]);
    toast.error('Cleared all technologies from your stack.');
  };

  return (
    <div className="min-h-screen bg-gray-50/30 flex flex-col font-sans">
      <Navbar />
      <Hero />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 w-full" id="technologies">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Explore the <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-gray-500 mt-1">
            Pick technologies per category to build your ideal stack.
          </p>
        </div>

       
        {loading ? (
          <div className="flex justify-center items-center py-24">
            <span className="loading loading-spinner loading-lg text-pink-500"></span>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* 3-column overall layout (Responsive: 1 col mobile, 2 col tablet) */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {technologies.map((tech) => (
                <TechnologyCard
                  key={tech.id}
                  tech={tech}
                  onAdd={handleAddToStack}
                  isAdded={stack.some((item) => item.id === tech.id)}
                />
              ))}
            </div>

           
            <div className="lg:col-span-1">
              <StackSidebar
                stack={stack}
                onRemove={handleRemoveFromStack}
                onRemoveAll={handleRemoveAll}
              />
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;