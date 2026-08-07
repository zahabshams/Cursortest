'use client';

import { useState } from 'react';
import { Send, Bot, User, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function AIConsultationPage() {
  const [messages, setMessages] = useState([
    { id: '1', role: 'assistant', content: 'Hello! Tell me about your dream home. What kind of architecture inspires you?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, { id: Date.now().toString(), role: 'user', content: input }]);
    setTimeout(() => {
      setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), role: 'assistant', content: 'Great! Could you tell me more about your budget and plot size?' }]);
    }, 1000);
    setInput('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-white">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-amber-700 mb-6">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden" style={{ height: 'calc(100vh - 200px)' }}>
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-6">
            <h1 className="text-2xl font-bold flex items-center gap-3">
              <Bot className="w-8 h-8" />
              AI Architectural Consultant
            </h1>
          </div>

          <div className="flex flex-col" style={{ height: 'calc(100% - 100px)' }}>
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {msg.role === 'assistant' && <Bot className="w-10 h-10 p-2 rounded-full bg-amber-100 text-amber-600" />}
                  <div className={`max-w-[70%] p-4 rounded-2xl ${msg.role === 'user' ? 'bg-amber-600 text-white' : 'bg-gray-100'}`}>
                    {msg.content}
                  </div>
                  {msg.role === 'user' && <User className="w-10 h-10 p-2 rounded-full bg-gray-200" />}
                </div>
              ))}
            </div>

            <div className="border-t p-4 flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 rounded-full border-2 focus:border-amber-500 outline-none"
              />
              <button onClick={handleSend} className="px-6 py-3 bg-amber-600 text-white rounded-full">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
