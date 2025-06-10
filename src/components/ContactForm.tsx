import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaComment, FaMapMarkerAlt, FaPhoneAlt, FaEnvelopeOpen } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message || 'Failed to send message');

      setSubmitStatus({ success: true, message: 'Message sent successfully!' });
      setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
    } catch (error) {
      let errorMessage = 'Failed to send message';
      if (error instanceof Error) {
        errorMessage = error.message || errorMessage;
      }
      setSubmitStatus({ success: false, message: errorMessage });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Form Section */}
      <div className="w-full md:w-1/2 bg-secondary p-8 md:p-12">
        <h1 className="text-3xl font-bold text-white mb-8">Contact us</h1>
        
        {submitStatus && (
          <div className={`mb-6 p-4 rounded ${
            submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            {submitStatus.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <label htmlFor="firstName" className="block text-white mb-2">First Name</label>
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white opacity-70" />
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 rounded bg-white bg-opacity-10 border border-white border-opacity-20 text-white"
                  required
                />
              </div>
            </div>
            <div className="relative">
              <label htmlFor="lastName" className="block text-white mb-2">Last Name</label>
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white opacity-70" />
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 rounded bg-white bg-opacity-10 border border-white border-opacity-20 text-white"
                  required
                />
              </div>
            </div>
          </div>

          <div className="relative">
            <label htmlFor="email" className="block text-white mb-2">Email</label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white opacity-70" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 rounded bg-white bg-opacity-10 border border-white border-opacity-20 text-white"
                required
              />
            </div>
          </div>

          <div className="relative">
            <label htmlFor="phone" className="block text-white mb-2">Phone Number</label>
            <div className="relative">
              <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white opacity-70" />
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 rounded bg-white bg-opacity-10 border border-white border-opacity-20 text-white"
                required
              />
            </div>
          </div>

          <div className="relative">
            <label htmlFor="message" className="block text-white mb-2">Message</label>
            <div className="relative">
              <FaComment className="absolute left-3 top-4 text-white opacity-70" />
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full pl-10 pr-4 py-3 rounded bg-white bg-opacity-10 border border-white border-opacity-20 text-white"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full md:w-auto px-8 py-3 bg-primary text-white font-medium rounded hover:bg-opacity-90 transition disabled:opacity-50 flex items-center justify-center"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : 'Submit'}
          </button>
        </form>
      </div>

      {/* Info Section with Google Map */}
      <div className="w-full md:w-1/2 bg-primary p-8 md:p-12 text-white">
        <div className="max-w-md mx-auto h-full flex flex-col">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Location</h2>
            <div className="aspect-w-16 aspect-h-9 mb-6 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3029.215708661198!2d-74.23942292423978!3d40.61479097140739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3b2a1a6a5a5a5%3A0x8c3b2a1a6a5a5a5!2s114%20Route%2034%2C%20Matawan%2C%20NJ%2007747!5e0!3m2!1sen!2sus!4v1623456789012!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start">
              <FaMapMarkerAlt className="text-white mt-1 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-1">Address</h3>
                <p>114 Route 34, Matawan, NJ 07747</p>
              </div>
            </div>

            <div className="flex items-start">
              <FaPhoneAlt className="text-white mt-1 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-1">Phone</h3>
                <a href="tel:732-696-8162" className="hover:underline">732-696-8162</a>
              </div>
            </div>

            <div className="flex items-start">
              <FaEnvelopeOpen className="text-white mt-1 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-1">Email</h3>
                <a href="mailto:info@graceaboundsrecovery.com" className="hover:underline">info@graceaboundsrecovery.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;