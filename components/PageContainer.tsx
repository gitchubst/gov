
import React, { ReactNode } from 'react';

interface PageContainerProps {
  title: string;
  children: ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({ title, children }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
        <h1 className="text-4xl md:text-5xl font-bold font-serif text-campaign-blue mb-2">{title}</h1>
        <div className="w-24 h-1.5 bg-campaign-light-blue mb-8"></div>
        {children}
      </div>
    </div>
  );
};

export default PageContainer;