
import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import HomePage from './components/pages/HomePage';
import CandidateProfilePage from './components/pages/CandidateProfilePage';
import PartyHistoryPage from './components/pages/PartyHistoryPage';
import SpeechPage from './components/pages/SpeechPage';
import IssuesPage from './components/pages/IssuesPage';
import BrochurePage from './components/pages/BrochurePage';
import InterestGroupsPage from './components/pages/InterestGroupsPage';
import CampaignItemsPage from './components/pages/CampaignItemsPage';
import TVCommercialPage from './components/pages/TVCommercialPage';
import MeetTheTeamPage from './components/pages/MeetTheTeamPage';
import ContributePage from './components/pages/ContributePage';
import EventsPage from './components/pages/EventsPage';
import { Page } from './types';
import { NAV_ITEMS } from './constants';


const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>('Home');

  const renderPage = () => {
    switch (activePage) {
      case 'Home':
        return <HomePage setActivePage={setActivePage} />;
      case 'Candidate Profile':
        return <CandidateProfilePage />;
      case 'Party History':
        return <PartyHistoryPage />;
      case 'Speech':
        return <SpeechPage />;
      case 'Issues':
        return <IssuesPage />;
      case 'Brochure':
        return <BrochurePage />;
      case 'Interest Groups':
        return <InterestGroupsPage />;
      case 'Campaign Items':
        return <CampaignItemsPage />;
      case 'TV Commercial':
        return <TVCommercialPage />;
      case 'Meet the Team':
        return <MeetTheTeamPage />;
      case 'Events':
        return <EventsPage />;
      case 'Contribute':
        return <ContributePage />;
      default:
        return <HomePage setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-campaign-light text-campaign-dark">
      <Header navItems={NAV_ITEMS} activePage={activePage} setActivePage={setActivePage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer setActivePage={setActivePage} />
    </div>
  );
};

export default App;