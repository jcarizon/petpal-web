import React from 'react';
import { PrivacyPolicy } from './components/sections';
import { TermsOfService } from './components/sections';

export default function LegalPages({ page }: { page: 'privacy' | 'terms' }) {
  return page === 'privacy' ? <PrivacyPolicy /> : <TermsOfService />;
}
