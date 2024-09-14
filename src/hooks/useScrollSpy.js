// src/hooks/useScrollSpy.js
import { useState, useEffect } from 'react';

function useScrollSpy(sectionIds) {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            console.log('Intersecting:', entry.target.id); // Debug log
            setActiveSection(entry.target.id.replace('section-', '')); // Set only the id
          }
        });
      },
      { threshold: 0.7 } // Adjust this threshold as needed
    );

    sectionIds.forEach(id => {
      const element = document.getElementById(`section-${id}`);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sectionIds.forEach(id => {
        const element = document.getElementById(`section-${id}`);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sectionIds]);

  return activeSection;
}

export default useScrollSpy;
