
import React from 'react';
import PageContainer from '../PageContainer';
import { SPEECH_TEXT } from '../../constants';

const SpeechPage: React.FC = () => {
  return (
    <PageContainer title="A Vision for Tomorrow">
      <blockquote className="border-l-4 border-campaign-light-blue pl-6 italic text-xl text-gray-800 leading-relaxed">
        <p className="whitespace-pre-line">{SPEECH_TEXT}</p>
      </blockquote>
    </PageContainer>
  );
};

export default SpeechPage;