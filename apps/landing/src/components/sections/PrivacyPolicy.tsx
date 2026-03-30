import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use PetPal.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Information We Collect</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Personal information you provide (e.g., name, email, pet details)</li>
        <li>Usage data and analytics</li>
        <li>Cookies and similar technologies</li>
      </ul>
      <h2 className="text-xl font-semibold mt-8 mb-2">How We Use Information</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>To provide and improve our services</li>
        <li>To communicate with you</li>
        <li>To ensure security and prevent fraud</li>
      </ul>
      <h2 className="text-xl font-semibold mt-8 mb-2">Your Rights</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Access, update, or delete your information</li>
        <li>Opt out of marketing communications</li>
      </ul>
      <p className="text-gray-500 text-sm mt-8">For more details, contact us at support@petpal.com.</p>
    </div>
  );
}
