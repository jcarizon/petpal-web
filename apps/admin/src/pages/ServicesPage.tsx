import { CheckCircle2, MapPin, Star } from 'lucide-react'

interface Service {
  id: string
  name: string
  type: string
  badge: string
  badgeColor: string
  verified: boolean
  rating: number
  reviews: number
  distance: string
}

const MOCK_SERVICES: Service[] = [
  {
    id: '1',
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
    id: '2',
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
    id: '3',
    name: 'Happy Tails Pet Hotel',
    type: 'Pet Hotel',
    rating: 4.7,
    reviews: 56,
    distance: '1.2 km',
    verified: true,
    badge: 'New',
    badgeColor: '#3B82F6',
  },
  {
    id: '4',
    name: 'Paw Haven Veterinary Center',
    type: 'Veterinarian',
    rating: 4.9,
    reviews: 102,
    distance: '1.8 km',
    verified: true,
    badge: 'Top Rated',
    badgeColor: '#8B5CF6',
  },
  {
    id: '5',
    name: 'Snip & Shine Grooming',
    type: 'Pet Groomer',
    rating: 4.6,
    reviews: 64,
    distance: '2.1 km',
    verified: true,
    badge: 'Popular',
    badgeColor: '#F59E0B',
  },
  {
    id: '6',
    name: 'Cuddle Stay Pet Boarding',
    type: 'Pet Hotel',
    rating: 4.8,
    reviews: 78,
    distance: '2.7 km',
    verified: true,
    badge: 'Verified',
    badgeColor: '#10B981',
  },
]

export default function ServicesPage() {
  return (
    <div className="space-y-6">
      <div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Services List</h2>
          <p className="text-gray-500 text-sm mt-1">Trusted and verified services near users</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {MOCK_SERVICES.map((service) => (
          <article key={service.id} className="rounded-2xl border border-gray-200 bg-white p-5">
            <div className="mb-5 flex items-start justify-between gap-3">
              <div>
                <span
                  className="inline-flex rounded-full px-3 py-1 text-xs font-semibold text-white"
                  style={{ backgroundColor: service.badgeColor }}
                >
                  {service.badge}
                </span>
                <h3 className="mt-3 text-2xl font-semibold text-gray-900">{service.name}</h3>
                <p className="mt-1 text-xl text-gray-500">{service.type}</p>
              </div>
              {service.verified ? <CheckCircle2 className="h-8 w-8 shrink-0 text-emerald-500" /> : null}
            </div>

            <div className="flex items-center gap-6 text-lg text-gray-600">
              <div className="flex items-center gap-1.5">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="font-medium text-gray-800">{service.rating.toFixed(1)}</span>
                <span className="text-gray-400">({service.reviews})</span>
              </div>
              <div className="flex items-center gap-1.5 text-violet-500">
                <MapPin className="h-5 w-5" />
                <span>{service.distance}</span>
              </div>
            </div>

            <button className="mt-5 w-full rounded-xl border border-violet-500 py-2.5 text-lg font-semibold text-violet-500 hover:bg-violet-50">
              View Details
            </button>
          </article>
        ))}
      </div>
        </div>
  )
}
