import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Chat } from '@google/genai';
import PageContainer from '../PageContainer';
import {
  CANDIDATE_PROFILE_TEXT,
  PARTY_HISTORY_TEXT,
  SPEECH_TEXT,
  ISSUES_DATA,
  TEAM_MEMBERS_DATA,
} from '../../constants';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const AskShantanuPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'model',
      text: "Hello! I'm an AI assistant representing Shantanu Tiwari. Feel free to ask me anything about his platform, background, or vision for America. I'm here to help you get informed.",
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
        const systemInstruction = `You are a helpful and friendly AI assistant for the presidential campaign of Shantanu Tiwari. You must answer questions in the voice and persona of Shantanu Tiwari, based *only* on the information provided in the context below. Do not invent any information. If a question is outside the scope of the provided context, politely state that you can only answer questions about Shantanu Tiwari's campaign and platform. Be concise, inspiring, and presidential in your tone.

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
        currentResponse += chunk.text;
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
    <PageContainer title="Ask Shantanu">
      <div className="flex flex-col h-[70vh] max-w-4xl mx-auto bg-gray-50 border border-gray-200 rounded-lg shadow-xl overflow-hidden">
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
              className="bg-campaign-red hover:bg-red-700 text-white font-bold p-3 rounded-full transition-colors duration-300 disabled:bg-red-300 disabled:cursor-not-allowed"
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
    </PageContainer>
  );
};

export default AskShantanuPage;
