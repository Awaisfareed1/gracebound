import React from 'react';
import { FaPhone, FaEnvelope, FaClipboardList, FaUserMd, FaHandsHelping } from 'react-icons/fa';

const AdmissionContent = () => {
  return (
    <div className="responsive-container py-12">
      <div className="text-center mb-12">
        <h2 className=" mb-4">
          Recovery can start today.
        </h2>
        <p className="text-xl text-secondary max-w-3xl mx-auto">
          Beginning treatment doesn't have to be overwhelming. Our team is here to assist you every step of the way.
        </p>
      </div>

      <div className="bg-secondary-50 rounded-xl p-8 mb-12">
        <h2 className="text-2xl font-bold text-primary mb-6 text-center">
          Contact us to explore treatment options
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div className="flex items-center">
            <div className="bg-primary p-3 rounded-full mr-4">
              <FaPhone className="text-white " />
            </div>
            <div>
              <h3 className=" text-secondary">Phone</h3>
              <a href="tel:732-696-8162" className="text-secondary hover:text-primary transition">
                732-696-8162
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <div className="bg-primary p-3 rounded-full mr-4">
              <FaEnvelope className="text-white " />
            </div>
            <div>
              <h3 className=" text-secondary">Email</h3>
              <a href="mailto:info@graceaboundsrecovery.com" className="text-secondary hover:text-primary transition">
                info@graceaboundsrecovery.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-primary mb-8 text-center">
          What happens when I reach out?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Intake */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="bg-primary-100 p-2 rounded-full mr-3">
                <FaClipboardList className="text-primary" />
              </div>
              <h3 className="text-lg font-bold text-primary">Intake</h3>
            </div>
            <p className="text-secondary">
              We gather your information and verify your insurance benefits.
            </p>
          </div>

          {/* Assessment */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="bg-primary-100 p-2 rounded-full mr-3">
                <FaUserMd className="text-primary" />
              </div>
              <h3 className="text-lg font-bold text-primary">Assessment</h3>
            </div>
            <p className="text-secondary">
              A clinician meets with you to conduct a level of care assessment and determine treatment recommendations.
            </p>
          </div>

          {/* Treatment */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="bg-primary-100 p-2 rounded-full mr-3">
                <FaHandsHelping className="text-primary" />
              </div>
              <h3 className="text-lg font-bold text-primary">Treatment</h3>
            </div>
            <p className="text-secondary">
              You work with compassionate, knowledgeable therapists who understand the impacts of addiction and who are passionate about helping you in your recovery.
            </p>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-primary mb-4">
          Contact us to learn more
        </h2>
        <p className="text-secondary mb-6 max-w-2xl mx-auto">
          Take the next step in your recovery today. Our admissions team is ready to help you begin your journey.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="tel:732-696-8162"
            className="px-6 py-3 bg-primary hover:bg-primary-600 text-white rounded-lg flex items-center"
          >
            <FaPhone className="mr-2" /> Call Now
          </a>
          <a
            href="mailto:info@graceaboundsrecovery.com"
            className="px-6 py-3 bg-secondary hover:bg-secondary-600 text-white rounded-lg flex items-center"
          >
            <FaEnvelope className="mr-2" /> Email Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdmissionContent;