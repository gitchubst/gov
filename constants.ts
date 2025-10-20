import { NavItem, Issue, InterestGroup, TeamMember, CampaignEvent, CampaignItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  {
    title: 'Profile',
    children: ['Candidate Profile', 'Party History'],
  },
  'Speech',
  'Issues',
  {
    title: 'Campaign',
    children: ['Events', 'Meet the Team', 'Interest Groups', 'Brochure', 'Campaign Items', 'TV Commercial', 'Contribute'],
  },
];

export const CANDIDATE_PROFILE_TEXT = `Shantanu Tiwari represents the next generation of American leadership. Born from a family of immigrants, he learned early on the values of hard work, community, and the promise of the American Dream. After graduating with honors from law school, Shantanu dedicated his career to public service, fighting for working families as a district attorney and later as a state senator.

His legislative record is a testament to his commitment to progress. He has championed bills to expand access to affordable healthcare, invest in renewable energy, and reform our criminal justice system. Shantanu believes in a future where the economy works for everyone, not just those at the top. He understands the challenges facing everyday Americans – from rising costs of living to the urgent threat of climate change – and has concrete, actionable plans to address them.

More than just a politician, Shantanu is a husband and father who is deeply invested in building a safer, more prosperous nation for the generations to come. He leads with empathy, integrity, and a bold vision for a united America that lives up to its founding ideals. His campaign is about bringing people together, bridging divides, and restoring faith in our government's ability to be a force for good in people's lives.`;

export const PARTY_HISTORY_TEXT = `The Democratic Party is the oldest voter-based political party in the world. It was founded on the principles of liberty and equality, championing the cause of the common person against the concentration of power and wealth. Throughout its history, the party has been at the forefront of major social and economic progress.

In the 20th century, Democrats led the way with Franklin D. Roosevelt's New Deal, which created Social Security and lifted the nation out of the Great Depression. In the 1960s, Lyndon B. Johnson's Great Society programs, including Medicare and Medicaid, and the historic Civil Rights Act and Voting Rights Act, reshaped the fabric of American society, striving to create a more just and equitable nation.

Today, the Democratic Party continues to fight for progress for all Americans. It stands for protecting and expanding access to affordable healthcare, combating the climate crisis with bold investments in clean energy, ensuring a fair economy through workers' rights and tax fairness, and protecting the fundamental rights of every citizen. The party believes that our diversity is our strength and that we are stronger together when we build an inclusive society where everyone has a chance to succeed.`;

export const SPEECH_TEXT = `My fellow Americans, we stand today at a crossroads. A moment in our history that calls not for division, but for unity. Not for fear, but for hope. We are faced with great challenges, it's true. An economy that feels rigged against working families. A climate that is changing before our very eyes. A world that looks to America for leadership, for moral clarity.

But for every challenge, I see an opportunity. An opportunity to rebuild our nation's infrastructure, creating millions of good-paying jobs. An opportunity to lead the world in clean energy, protecting our planet for our children and grandchildren. An opportunity to ensure that healthcare is a right, not a privilege. An opportunity to restore justice and equality for every community.

This will not be easy. It requires us to listen to one another, to find common ground, and to remember that we are all Americans. We share a common destiny. The cynics will tell you it can't be done. They will try to divide us. But I have faith in the American people. I have faith in our capacity for greatness, for innovation, for compassion.

This campaign is not about me. It's about you. It's about our shared future. Together, let us choose hope over fear. Unity over division. Let us choose to build a better America, a more perfect union, for all. Thank you, God bless you, and God bless the United States of America.`;

export const ISSUES_DATA: Issue[] = [
  {
    title: 'Economy & Job Growth',
    stance: 'I believe in building a fair economy from the bottom up and the middle out. My plan focuses on investing in American manufacturing, strengthening unions, and raising the minimum wage. We will create good-paying jobs by rebuilding our infrastructure and leading the global transition to clean energy, ensuring that American workers and businesses can compete and win in the 21st century.',
  },
  {
    title: 'Healthcare',
    stance: 'Healthcare is a right, not a privilege. I will work to defend and expand the Affordable Care Act, lower prescription drug costs by taking on pharmaceutical price gouging, and expand access to mental health and reproductive healthcare services. No American should ever have to choose between their health and financial security.',
  },
  {
    title: 'Climate Change',
    stance: 'The climate crisis is the existential threat of our time. I will pursue a bold agenda to achieve 100% clean electricity by 2035 and net-zero emissions by 2050. This includes massive investments in renewable energy like solar and wind, modernizing our power grid, and promoting electric vehicles. This is not just an environmental issue; it is an economic and national security imperative.',
  },
  {
    title: 'Education',
    stance: 'A world-class education should be accessible to every child, regardless of their zip code. My administration will invest in public schools, increase teacher pay, and expand access to affordable childcare and universal pre-K. I also support making community college and trade schools tuition-free, and I will work to reduce the burden of student loan debt.',
  },
  {
    title: 'Foreign Policy & National Security',
    stance: 'America must lead on the world stage with confidence and strength, grounded in our democratic values. I will restore our alliances, stand up to autocrats, and re-engage in diplomacy. We will maintain the strongest military in the world while recognizing that military might alone cannot solve global challenges. We must lead with both our power and our principles.',
  },
];

export const INTEREST_GROUPS_DATA: InterestGroup[] = [
  {
    name: 'Environmental Action Alliance',
    description: 'A coalition of scientists, activists, and citizens dedicated to advocating for policies that combat climate change, protect our natural resources, and ensure a sustainable future for all.'
  },
  {
    name: 'National Educators Association',
    description: 'Representing teachers and education professionals across the country, this group fights for better funding for public schools, fair wages for educators, and policies that support student success.'
  },
  {
    name: 'American Health Equity Coalition',
    description: 'A non-profit organization working to ensure that every American has access to affordable, high-quality healthcare, regardless of their income, race, or background.'
  },
  {
    name: 'Union of American Workers',
    description: 'An umbrella organization for labor unions, advocating for workers\' rights, collective bargaining, safe working conditions, and a living wage for all working families.'
  },
  {
    name: 'Tech for Progress',
    description: 'A group of innovators, entrepreneurs, and tech workers who believe in harnessing technology to solve societal problems, promote economic opportunity, and strengthen democratic institutions.'
  }
];

export const EVENTS_DATA: CampaignEvent[] = [
  {
    title: 'Democrats Press Conference',
    date: 'October 24, 2025',
    time: '9:40 AM EST',
    locationName: 'Dover Sherborn High School',
    locationAddress: '9 Junction St, Dover, MA 02030',
    description: ''
  },
  {
    title: 'Democrats Press',
    date: 'October 24, 2025',
    time: '10:00 AM EST',
    locationName: 'Dover Sherborn High School',
    locationAddress: '9 Junction St, Dover, MA 02030',
    description: ''
  },
  {
    title: 'Democrats Protest',
    date: 'October 25, 2025',
    time: '10:40 AM EST',
    locationName: 'Dover Sherborn High School',
    locationAddress: '9 Junction St, Dover, MA 02030',
    description: ''
  },
];


// Placeholder images - replace these with actual brochure image paths
export const BROCHURE_IMAGES: string[] = [
  'https://picsum.photos/seed/brochure1/800/1100',
  'https://picsum.photos/seed/brochure2/800/1100',
  'https://picsum.photos/seed/brochure3/800/1100',
  'https://picsum.photos/seed/brochure4/800/1100',
];

export const CAMPAIGN_ITEMS_DATA: CampaignItem[] = [
    {
        name: "'Tiwari Is My President' T-Shirt",
        price: "$25.00",
        src: 'https://mms-images.out.customink.com/mms/images/catalog/colors/176101/views/alt/front_medium_extended.png?design=epd0-00d0-9py5&pblegacy=1&pblegacysize=small&pblegacywm=1'
    }
];

export const TEAM_MEMBERS_DATA: TeamMember[] = [
    {
        name: 'Neal Tandon',
        title: '',
        bio: '',
        image: ''
    },
    {
        name: 'Sebastian Hussar',
        title: '',
        bio: '',
        image: ''
    },
    {
        name: 'Maisie Gilchrist',
        title: '',
        bio: '',
        image: ''
    },
    {
        name: 'Nicole Chen',
        title: '',
        bio: '',
        image: ''
    },
];