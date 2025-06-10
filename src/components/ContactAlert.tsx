import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';

const ContactAlert = () => {
  return (
    <div className=" py-8">
      <div className="max-w-2xl mx-auto bg-[#d1eff8]">
        <div className="flex items-start p-4 rounded-lg">
          <FaInfoCircle className="text-secondary flex-shrink-0 mt-1 mr-3" size={20} />
          <div className="text-secondary">
            <p>
              Grace Abounds Counseling does not provide emergency services. Please call 911 or go to your nearest emergency room if you believe you are experiencing a medical emergency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactAlert;