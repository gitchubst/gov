import React from 'react';
import PageContainer from '../PageContainer';
import DonationForm from '../DonationForm';

const ContributePage: React.FC = () => {
  return (
    <PageContainer title="Contribute to the Campaign">
      <div className="text-center">
        <p className="text-gray-600 mb-8 text-lg max-w-3xl mx-auto">
          Your contribution, no matter the size, is a powerful statement. It's an investment in a future built on progress, equality, and opportunity for every American. Join us today and help fuel our movement for change.
        </p>
      </div>
      <DonationForm />
    </PageContainer>
  );
};

export default ContributePage;
