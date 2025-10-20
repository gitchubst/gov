
import React from 'react';
import PageContainer from '../PageContainer';
import { BROCHURE_IMAGES } from '../../constants';

const BrochurePage: React.FC = () => {
  return (
    <PageContainer title="Campaign Brochures">
      <p className="text-gray-600 mb-8">
        View and download our latest campaign brochures to learn more about our vision for America and share with your community.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {BROCHURE_IMAGES.map((src, index) => (
          <div key={index} className="group overflow-hidden rounded-lg shadow-lg">
            <img 
              src={src} 
              alt={`Brochure page ${index + 1}`} 
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </PageContainer>
  );
};

export default BrochurePage;
