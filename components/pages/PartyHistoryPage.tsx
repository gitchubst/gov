import React from 'react';
import { PARTY_HISTORY_TEXT } from '../../constants';

const PartyHistoryPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
        <h1 className="text-4xl md:text-4xl font-bold font-serif text-campaign-blue mb-2">History of the Democratic Party</h1>
        <div className="w-24 h-1.5 bg-campaign-light-blue mb-8"></div>
        <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
          {PARTY_HISTORY_TEXT}
        </p>
      </div>
    </div>
  );
};

export default PartyHistoryPage;