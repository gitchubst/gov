import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Chat } from '@google/genai';
import { Page } from '../../types';
import {
  CANDIDATE_PROFILE_TEXT,
  PARTY_HISTORY_TEXT,
  SPEECH_TEXT,
  ISSUES_DATA,
  TEAM_MEMBERS_DATA,
  EVENTS_DATA,
  INTEREST_GROUPS_DATA
} from '../../constants';

interface HomePageProps {
  setActivePage: (page: Page) => void;
}

interface Message {
  role: 'user' | 'model';
  text: string;
}

const HomePage: React.FC<HomePageProps> = ({ setActivePage }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'model',
      text: "Hello! I'm an AI assistant representing Shantanu Tiwari. Ask me anything about his platform, background, or vision for America.",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const chatSessionRef = useRef<Chat | null>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const buildContext = () => {
    const issuesContext = ISSUES_DATA.map(
      (issue) => `Issue: ${issue.title}\nStance: ${issue.stance}`
    ).join('\n\n');

    const teamContext = TEAM_MEMBERS_DATA.map(
      (member) => `${member.name}, ${member.title}: ${member.bio}`
    ).join('\n');
    
    const eventsContext = EVENTS_DATA.map(
      (event) => `Event: ${event.title} on ${event.date} at ${event.time}. Location: ${event.locationName}, ${event.locationAddress}. Description: ${event.description}`
    ).join('\n\n');

    const interestGroupsContext = INTEREST_GROUPS_DATA.map(
      (group) => `Supporting Group: ${group.name}. Description: ${group.description}`
    ).join('\n\n');
    
    const brochureContext = `The campaign offers several brochures for supporters to view and share, which can be found on the 'Brochure' page.`;
    const campaignItemsContext = `Supporters can show their support by purchasing official merchandise from the campaign store, available on the 'Campaign Items' page. Every purchase is a contribution to the movement.`;
    const tvCommercialContext = `The campaign's latest television commercial, titled 'Our Message to America,' is available for viewing on the website's 'TV Commercial' page.`;
    const contributionContext = `Supporters can contribute financially to the movement through the 'Contribute' page on the website. Every donation is vital to the campaign's success.`;

    return `
      CANDIDATE PROFILE:
      ${CANDIDATE_PROFILE_TEXT}

      PARTY HISTORY:
      ${PARTY_HISTORY_TEXT}

      KEY SPEECH:
      ${SPEECH_TEXT}

      POSITIONS ON KEY ISSUES:
      ${issuesContext}

      CAMPAIGN TEAM:
      ${teamContext}

      UPCOMING EVENTS:
      ${eventsContext}
      
      SUPPORTING INTEREST GROUPS:
      ${interestGroupsContext}
      
      CAMPAIGN MATERIALS & WAYS TO SUPPORT:
      - Brochures: ${brochureContext}
      - Campaign Store: ${campaignItemsContext}
      - TV Commercial: ${tvCommercialContext}
      - Donations: ${contributionContext}
    `;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    const currentInput = input;
    setInput('');
    setIsLoading(true);
    setError('');

    try {
      if (!chatSessionRef.current) {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const context = buildContext();
        const systemInstruction = `You are a specialized AI assistant for the Shantanu Tiwari presidential campaign. Your *only* function is to answer questions based *strictly* on the context provided below. You must adhere to these rules without exception:
        1.  **Confine your answers to the provided context.** The context contains all the information you are allowed to know, including the candidate's profile, party history, a key speech, stances on specific issues, team members, events, supporting groups, and campaign materials.
        2.  **Do not invent or infer information.** If the context does not contain the answer to a question, you must state that you do not have information on that topic.
        3.  **Handle out-of-scope questions correctly.** For questions about topics not covered in the context (e.g., specific policies like abortion, personal details not mentioned, or current events), you must politely decline to answer. A correct response would be: "I can only answer questions based on the information available on the campaign website."
        4.  **Maintain the persona.** Answer as a helpful campaign assistant in the voice of Shantanu Tiwari: presidential, inspiring, and concise.
        5.  **Do not mention you are an AI or that you are working from a "context".** Simply answer the questions as if you are the official source of this information.

        CONTEXT:
        ---
        ${context}
        ---
        `;
        chatSessionRef.current = ai.chats.create({
          model: 'gemini-2.5-flash',
          config: {
            systemInstruction,
          },
        });
      }
      
      const responseStream = await chatSessionRef.current.sendMessageStream({ message: currentInput });

      let currentResponse = '';
      setMessages((prev) => [...prev, { role: 'model', text: '' }]);
      
      for await (const chunk of responseStream) {
        const cleanedText = chunk.text.replace(/(\*\*|\*)/g, '');
        currentResponse += cleanedText;
        setMessages((prev) => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1].text = currentResponse;
          return newMessages;
        });
      }
    } catch (err) {
      console.error(err);
      const errorMessage = 'Sorry, I encountered an issue. Please try again in a moment.';
      setError(errorMessage);
      setMessages((prev) => {
        const newMessages = [...prev];
        const lastMessage = newMessages[newMessages.length - 1];
        if (lastMessage && lastMessage.role === 'model' && lastMessage.text === '') {
            lastMessage.text = errorMessage;
        } else {
            newMessages.push({ role: 'model', text: errorMessage });
        }
        return newMessages;
      });
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div>
      <div className="relative bg-campaign-blue text-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 py-20 md:py-32 lg:py-48 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold font-serif tracking-tight">
              A New Vision for America
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-blue-100">
              Leadership for a Stronger, Fairer, and more Prosperous Future.
            </p>
            <div className="mt-10">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setActivePage('Contribute');
                }}
                className="inline-block bg-campaign-red text-white font-bold tracking-wider uppercase py-4 px-10 rounded-full text-lg hover:bg-red-700 transition-transform transform hover:scale-105 duration-300 unselectable"
              >
                Join the Movement
              </a>
            </div>
          </div>
        </div>
        <div 
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-20"
          style={{ backgroundImage: `url('https://picsum.photos/seed/politics/1920/1080')`}}
        ></div>
         <div className="absolute inset-0 bg-gradient-to-t from-campaign-blue via-campaign-blue to-transparent z-0"></div>
      </div>

      <div className="py-16 bg-campaign-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold font-serif text-campaign-blue">Ask Shantanu Anything</h2>
            <p className="text-gray-600 my-4 text-lg max-w-3xl mx-auto">
              Have a question about the campaign? Use our AI-powered assistant to get an instant answer.
            </p>
            <div className="flex flex-col h-[60vh] max-w-4xl mx-auto bg-gray-50 border border-gray-200 rounded-lg shadow-xl overflow-hidden">
              <div ref={chatContainerRef} className="flex-1 p-6 space-y-4 overflow-y-auto">
                {messages.map((msg, index) => (
                  <div key={index} className={`flex items-end gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                    {msg.role === 'model' && (
                      <div className="w-10 h-10 rounded-full bg-campaign-blue flex-shrink-0 flex items-center justify-center text-white font-bold text-lg unselectable">
                        ST
                      </div>
                    )}
                    <div
                      className={`max-w-md lg:max-w-lg p-3 rounded-2xl whitespace-pre-wrap ${
                        msg.role === 'user'
                          ? 'bg-campaign-blue text-white rounded-br-none'
                          : 'bg-white text-campaign-dark border border-gray-200 rounded-bl-none'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex items-end gap-3">
                    <div className="w-10 h-10 rounded-full bg-campaign-blue flex-shrink-0 flex items-center justify-center text-white font-bold text-lg unselectable">
                      ST
                    </div>
                    <div className="max-w-lg p-3 rounded-2xl bg-white text-campaign-dark border border-gray-200 rounded-bl-none">
                      <div className="flex items-center justify-center space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:-0.3s]"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:-0.15s]"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {error && <div className="p-4 bg-red-100 text-red-700 border-t text-center">{error}</div>}

              <div className="p-4 bg-white border-t border-gray-200">
                <form onSubmit={handleSubmit} className="flex items-center gap-4">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask a question..."
                    className="flex-1 w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-campaign-blue"
                    aria-label="Chat input"
                    disabled={isLoading}
                  />
                  <button
                    type="submit"
                    className="bg-campaign-blue hover:bg-blue-800 text-white font-bold p-3 rounded-full transition-colors duration-300 disabled:bg-blue-300 disabled:cursor-not-allowed"
                    aria-label="Send message"
                    disabled={isLoading || !input.trim()}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold font-serif text-campaign-blue">Meet Shantanu Tiwari</h2>
            <div className="w-20 h-1 bg-campaign-light-blue mx-auto mt-2 mb-6"></div>
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/3">
                    <img src="https://picsum.photos/seed/candidate/600/600" alt="Shantanu Tiwari" className="rounded-full shadow-2xl mx-auto w-64 h-64 md:w-80 md:h-80 object-cover" />
                </div>
                <div className="md:w-2/3 text-left">
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Shantanu Tiwari is a dedicated public servant with a proven track record of fighting for working families. He believes in an America where everyone has a fair shot at success. His campaign is built on the core values of integrity, compassion, and progress.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mt-4">
                        "I'm running for President because I believe we can build a better future together. A future with a stronger economy, accessible healthcare, and a protected environment for the next generation. It's time for leadership that listens and delivers."
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;