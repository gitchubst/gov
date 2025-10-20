
import React, { useState } from 'react';
import PageContainer from '../PageContainer';
import { CAMPAIGN_ITEMS_DATA } from '../../constants';

const CampaignItemsPage: React.FC = () => {
  const [isBought, setIsBought] = useState(false);
  const item = CAMPAIGN_ITEMS_DATA[0];

  const handleBuyClick = () => {
    setIsBought(true);
  };

  return (
    <PageContainer title="Campaign Store">
      <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
        Show your support for the campaign with our official merchandise. Every purchase is a contribution to our movement.
      </p>
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden md:flex">
        <div className="md:w-1/2 bg-gray-200 flex items-center justify-center p-4">
            <img
                src={item.src}
                alt={item.name}
                className="w-full h-auto object-contain max-h-[500px]"
            />
        </div>
        <div className="md:w-1/2 p-8 flex flex-col justify-center items-center text-center">
            <h2 className="text-3xl font-bold font-serif text-campaign-blue">{item.name}</h2>
            <p className="text-2xl text-gray-700 mt-2 mb-6">{item.price}</p>
            <div className="w-full max-w-xs">
              {isBought ? (
                  <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-md" role="alert">
                      <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <div>
                              <p className="font-bold">Shirt Bought!</p>
                              <p className="text-sm">Thank you for your support.</p>
                          </div>
                      </div>
                  </div>
              ) : (
                  <button
                      onClick={handleBuyClick}
                      className="w-full bg-campaign-red hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-transform transform hover:scale-105 duration-300 unselectable"
                  >
                      Buy Now
                  </button>
              )}
            </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default CampaignItemsPage;