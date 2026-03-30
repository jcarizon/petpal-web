import React from 'react';

export default function TermsOfService() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="mb-4">By using PetPal, you agree to the following terms and conditions. Please read them carefully.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Use of Service</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>You must be at least 13 years old to use PetPal.</li>
        <li>Do not misuse our services or attempt to access them in unauthorized ways.</li>
      </ul>
      <h2 className="text-xl font-semibold mt-8 mb-2">User Content</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>You are responsible for the content you post.</li>
        <li>Do not post illegal, harmful, or offensive content.</li>
      </ul>
      <h2 className="text-xl font-semibold mt-8 mb-2">Limitation of Liability</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>PetPal is provided as-is without warranties.</li>
        <li>We are not liable for damages resulting from your use of the service.</li>
      </ul>
      <p className="text-gray-500 text-sm mt-8">For questions, contact us at support@petpal.com.</p>
    </div>
  );
}
