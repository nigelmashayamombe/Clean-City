import React, { useState } from 'react';
import { useToast } from '../../hooks/useToast';
import { MessageSquare } from 'lucide-react';

export function Feedback() {
  const [message, setMessage] = useState('');
  const [type, setType] = useState<'suggestion' | 'issue'>('suggestion');
  const toast = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      toast.success('Thank you for your feedback!');
      setMessage('');
    } else {
      toast.error('Please enter a message');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center space-x-2 mb-4">
        <MessageSquare className="h-6 w-6 text-emerald-600" />
        <h2 className="text-xl font-semibold">Share Your Feedback</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex space-x-4 mb-4">
          <button
            type="button"
            onClick={() => setType('suggestion')}
            className={`flex-1 py-2 rounded-md ${
              type === 'suggestion'
                ? 'bg-emerald-600 text-white'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            Suggestion
          </button>
          <button
            type="button"
            onClick={() => setType('issue')}
            className={`flex-1 py-2 rounded-md ${
              type === 'issue'
                ? 'bg-emerald-600 text-white'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            Report Issue
          </button>
        </div>

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
          rows={4}
          placeholder={
            type === 'suggestion'
              ? 'Share your ideas for improvement...'
              : 'Describe the issue you encountered...'
          }
        />

        <button
          type="submit"
          className="w-full bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
}