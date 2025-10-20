
import React from 'react';
import PageContainer from '../PageContainer';
import { INTEREST_GROUPS_DATA } from '../../constants';

const InterestGroupsPage: React.FC = () => {
  return (
    <PageContainer title="Coalition of Supporters">
      <p className="text-gray-600 mb-8">
        Our campaign is proud to be supported by a diverse coalition of groups and individuals who share our commitment to progress.
      </p>
      <div className="space-y-10">
        {INTEREST_GROUPS_DATA.map((group) => (
          <div key={group.name} className="bg-gray-50 p-6 rounded-lg border-l-4 border-campaign-blue">
            <h3 className="text-2xl font-bold font-serif text-campaign-blue">{group.name}</h3>
            <p className="mt-2 text-gray-700 leading-relaxed">{group.description}</p>
          </div>
        ))}
      </div>
    </PageContainer>
  );
};

export default InterestGroupsPage;
