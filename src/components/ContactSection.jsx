import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      // Validate form data
      if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
        setStatus('Please fill in all fields.');
        setLoading(false);
        return;
      }

      // Submit to Formspree endpoint
      const response = await fetch('https://formspree.io/f/mblnkarj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus('✓ Message sent successfully! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form error:', error);
      setStatus('✗ Failed to send message. Please try again or email directly: vishalroy2574@gmail.com');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl">
      <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500 mb-8">Get In Touch</h2>
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-10 border border-gray-700">
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full bg-gray-800 text-white rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-yellow-500 border border-gray-700 text-lg transition-all"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full bg-gray-800 text-white rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-yellow-500 border border-gray-700 text-lg transition-all"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            rows="6"
            className="w-full bg-gray-800 text-white rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-yellow-500 border border-gray-700 text-lg transition-all"
            required
          />

          {/* Status message */}
          {status && (
            <div className={`p-4 rounded-xl ${status.includes('✓') ? 'bg-green-900/30 text-green-400 border border-green-700' : 'bg-red-900/30 text-red-400 border border-red-700'}`}>
              {status}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold px-10 py-4 rounded-xl hover:from-yellow-400 hover:to-orange-400 transition-all transform hover:scale-105 shadow-lg shadow-yellow-500/30 text-lg ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        <div className="mt-6 p-4 bg-gray-800 rounded-xl text-gray-400 text-sm">
          <p><strong>Direct email:</strong> <a href="mailto:vishalroy2574@gmail.com" className="text-yellow-500 hover:text-yellow-400">vishalroy2574@gmail.com</a></p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;