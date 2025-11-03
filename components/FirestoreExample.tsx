'use client';

import { useState, useEffect } from 'react';
import { addDocument, getDocuments } from '@/lib/firestore';

export default function FirestoreExample() {
  const [documents, setDocuments] = useState<any[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDocuments();
  }, []);

  const fetchDocuments = async () => {
    setLoading(true);
    const { documents, error } = await getDocuments('examples');
    if (!error) {
      setDocuments(documents);
    }
    setLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const { error } = await addDocument('examples', {
      title,
      content,
      createdAt: new Date()
    });
    
    if (!error) {
      setTitle('');
      setContent('');
      fetchDocuments(); // Refresh the list
    }
  };

  if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-900 rounded-lg">
      <h2 className="text-2xl font-bold text-white mb-4">Firestore Example</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <div>
          <label className="block text-gray-300 mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 bg-gray-800 text-white rounded border border-gray-700 focus:outline-none focus:border-yellow-400"
            required
          />
        </div>
        
        <div>
          <label className="block text-gray-300 mb-2">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-3 py-2 bg-gray-800 text-white rounded border border-gray-700 focus:outline-none focus:border-yellow-400"
            rows={3}
            required
          />
        </div>
        
        <button
          type="submit"
          className="bg-yellow-400 text-black px-4 py-2 font-semibold rounded hover:bg-yellow-300 transition"
        >
          Add Document
        </button>
      </form>
      
      <div>
        <h3 className="text-xl font-bold text-white mb-4">Documents</h3>
        {documents.length === 0 ? (
          <p className="text-gray-400">No documents found</p>
        ) : (
          <div className="space-y-4">
            {documents.map((doc) => (
              <div key={doc.id} className="p-4 bg-gray-800 rounded">
                <h4 className="text-lg font-semibold text-white">{doc.title}</h4>
                <p className="text-gray-300">{doc.content}</p>
                <p className="text-gray-500 text-sm mt-2">
                  {doc.createdAt?.toDate?.().toLocaleString() || 'No date'}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}