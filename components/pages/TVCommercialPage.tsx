import React from 'react';
import PageContainer from '../PageContainer';

const TVCommercialPage: React.FC = () => {
  const videoId = '9eMYj1V04jY';
  const startTime = 2784;
  const embedUrl = `https://www.youtube.com/embed/${videoId}?start=${startTime}&autoplay=1&mute=1`;

  return (
    <PageContainer title="Our Message to America">
      <p className="text-gray-600 mb-8">
        Watch our latest television commercial and see why Shantanu Tiwari is the right choice for President.
      </p>
      <div className="relative w-full overflow-hidden rounded-lg shadow-2xl" style={{ paddingTop: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={embedUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </PageContainer>
  );
};

export default TVCommercialPage;