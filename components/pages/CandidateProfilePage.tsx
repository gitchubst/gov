
import React from 'react';
import PageContainer from '../PageContainer';
import { CANDIDATE_PROFILE_TEXT } from '../../constants';

const CandidateProfilePage: React.FC = () => {
  return (
    <PageContainer title="Candidate Profile">
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        <div className="lg:w-2/3">
          <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
            {CANDIDATE_PROFILE_TEXT}
          </p>
        </div>
        <div className="lg:w-1/3">
          <img 
            src="https://picsum.photos/seed/profile/600/800" 
            alt="Shantanu Tiwari"
            className="rounded-lg shadow-xl w-full object-cover"
          />
        </div>
      </div>
    </PageContainer>
  );
};

export default CandidateProfilePage;
