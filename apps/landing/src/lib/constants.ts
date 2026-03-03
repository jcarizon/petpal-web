export const APP_NAME = 'PetPal';
export const APP_TAGLINE = "Never forget your pet's health";
export const APP_DESCRIPTION = 'Track health, find trusted services, and connect with the pet community.';

export const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Services', href: '#services' },
  { label: 'Community', href: '#community' },
];

export const FEATURES = [
  {
    icon: 'Heart',
    title: 'Health Tracker',
    description: 'Track vaccinations, medications, vet visits, and health milestones for all your pets.',
    color: '#EF4444',
  },
  {
    icon: 'MapPin',
    title: 'Find Services',
    description: 'Discover verified vets, groomers, and pet hotels near you with real reviews.',
    color: '#8B5CF6',
  },
  {
    icon: 'Search',
    title: 'Lost & Found',
    description: 'Post lost pet alerts with GPS radius notifications to reunite pets with their families.',
    color: '#F59E0B',
  },
  {
    icon: 'Trophy',
    title: 'Gamification',
    description: 'Earn badges for responsible pet care and compete on the community leaderboard.',
    color: '#10B981',
  },
];

export const HOW_IT_WORKS = [
  { step: 1, title: 'Download PetPal', description: 'Available on iOS and Android. Free to download.' },
  { step: 2, title: 'Add Your Pet', description: 'Create a profile with your pet\'s details, photos, and health history.' },
  { step: 3, title: 'Set Reminders', description: 'Never miss vaccinations, medications, or vet appointments again.' },
  { step: 4, title: 'Join the Community', description: 'Connect with pet owners, find trusted services, and earn rewards.' },
];

export const SERVICES = [
  {
    name: 'PetCare Veterinary Clinic',
    type: 'Veterinarian',
    rating: 4.9,
    reviews: 124,
    distance: '0.3 km',
    verified: true,
    badge: 'Top Rated',
    badgeColor: '#8B5CF6',
  },
  {
    name: 'Fluffy Paws Grooming',
    type: 'Pet Groomer',
    rating: 4.8,
    reviews: 89,
    distance: '0.7 km',
    verified: true,
    badge: 'Verified',
    badgeColor: '#10B981',
  },
  {
    name: 'Happy Tails Pet Hotel',
    type: 'Pet Hotel',
    rating: 4.7,
    reviews: 56,
    distance: '1.2 km',
    verified: true,
    badge: 'New',
    badgeColor: '#3B82F6',
  },
];

export const BADGES = [
  { name: 'Health Hero', icon: '🏆', description: 'Completed 10 vet visits' },
  { name: 'Vaccination Star', icon: '⭐', description: 'All vaccinations up to date' },
  { name: 'Community Helper', icon: '🤝', description: 'Helped 5 lost pets' },
  { name: 'Early Bird', icon: '🌅', description: 'First to post in community' },
  { name: 'Pet Expert', icon: '🎓', description: 'Shared 10 helpful tips' },
  { name: 'Loyal Owner', icon: '❤️', description: '1 year on PetPal' },
];

export const LEADERBOARD = [
  { rank: 1, name: 'Maria Santos', pets: 3, points: 2840, badge: '🥇' },
  { rank: 2, name: 'Juan dela Cruz', pets: 2, points: 2650, badge: '🥈' },
  { rank: 3, name: 'Ana Reyes', pets: 4, points: 2410, badge: '🥉' },
  { rank: 4, name: 'Carlos Gomez', pets: 1, points: 2200, badge: '4️⃣' },
  { rank: 5, name: 'Lisa Tan', pets: 2, points: 1980, badge: '5️⃣' },
];
