
import React from 'react';
import PageContainer from '../PageContainer';
import { TEAM_MEMBERS_DATA } from '../../constants';

const MeetTheTeamPage: React.FC = () => {
  return (
    <PageContainer title="Meet the Team">
      <p className="text-gray-600 mb-12 text-lg text-center max-w-3xl mx-auto">
        Our campaign is powered by a dedicated and experienced team of professionals who are passionate about building a better future for America.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {TEAM_MEMBERS_DATA.map((member) => (
          <div 
            key={member.name} 
            className="text-center bg-white p-8 rounded-lg shadow-md border border-gray-200"
          >
            <h3 className="text-xl font-semibold font-serif text-campaign-blue">{member.name}</h3>
          </div>
        ))}
      </div>
    </PageContainer>
  );
};

export default MeetTheTeamPage;
