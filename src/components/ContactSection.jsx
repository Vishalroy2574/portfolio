import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! (Demo only)');
  };

  return (
    <div className="max-w-2xl">
      <h2 className="text-3xl font-bold text-white mb-6">Get In Touch</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full bg-gray-900 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full bg-gray-900 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          required
        />
        <textarea
          placeholder="Your Message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows="6"
          className="w-full bg-gray-900 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          required
        />
        <button
          type="submit"
          className="bg-yellow-500 text-black font-semibold px-8 py-3 rounded-lg hover:bg-yellow-400 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactSection;
