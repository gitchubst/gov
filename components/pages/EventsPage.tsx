
import React from 'react';
import PageContainer from '../PageContainer';
import { EVENTS_DATA } from '../../constants';

const EventsPage: React.FC = () => {
  return (
    <PageContainer title="Upcoming Events">
      <div className="space-y-8 max-w-4xl mx-auto">
        {EVENTS_DATA.map((event, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <div className="md:w-1/3 bg-campaign-blue text-white p-6 flex flex-col justify-center items-center text-center">
              <p className="text-6xl font-bold font-serif">{event.date.split(' ')[1].replace(',', '')}</p>
              <p className="text-xl font-semibold">{event.date.split(' ')[0]}, {event.date.split(' ')[2]}</p>
            </div>
            <div className="md:w-2/3 p-6 flex flex-col justify-center">
              <h3 className="text-2xl font-bold font-serif text-campaign-blue mb-2">{event.title}</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-campaign-light-blue flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.414-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-campaign-light-blue flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>{event.locationName}</strong>, {event.locationAddress}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageContainer>
  );
};

export default EventsPage;