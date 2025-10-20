
import React, { useState } from 'react';
import PageContainer from '../PageContainer';
import { ISSUES_DATA } from '../../constants';

const IssuesPage: React.FC = () => {
  const [openIssue, setOpenIssue] = useState<string | null>(ISSUES_DATA[0]?.title || null);

  const toggleIssue = (title: string) => {
    setOpenIssue(openIssue === title ? null : title);
  };

  return (
    <PageContainer title="Key Issues">
      <div className="space-y-4">
        {ISSUES_DATA.map((issue) => (
          <div key={issue.title} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleIssue(issue.title)}
              className="w-full text-left p-6 bg-gray-50 hover:bg-gray-100 focus:outline-none"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-campaign-blue font-serif">{issue.title}</h3>
                <span className={`transform transition-transform duration-300 ${openIssue === issue.title ? 'rotate-180' : 'rotate-0'}`}>
                  <svg className="w-6 h-6 text-campaign-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </span>
              </div>
            </button>
            <div className={`transition-all duration-500 ease-in-out ${openIssue === issue.title ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="p-6 border-t border-gray-200">
                <p className="text-gray-700 leading-relaxed">{issue.stance}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageContainer>
  );
};

export default IssuesPage;
