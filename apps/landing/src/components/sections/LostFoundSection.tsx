import { Bell, Eye, MapPin } from 'lucide-react'

const DIFFERENTIATORS = [
  {
    icon: Bell,
    title: 'Radius Notifications',
    description: 'Alert all pet owners within a customizable radius when a pet goes missing.',
    color: '#F59E0B',
  },
  {
    icon: Eye,
    title: 'Community Sightings',
    description: 'Community members can report sightings with photos and exact location.',
    color: '#3B82F6',
  },
  {
    icon: MapPin,
    title: 'Smart Geofencing',
    description: 'Set safe zones and get instant alerts when your pet leaves the area.',
    color: '#EF4444',
  },
]

export default function LostFoundSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Alert mockup */}
          <div className="flex justify-center">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 max-w-sm w-full">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-xl">🐕</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full font-semibold">LOST</span>
                      <span className="text-xs text-gray-500">2 hours ago</span>
                    </div>
                    <p className="font-semibold text-gray-900">Max - Golden Retriever</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">Last seen near Ayala Avenue, Makati. Male, 3 years old, wearing blue collar.</p>
                <div className="flex gap-2">
                  <button className="flex-1 bg-primary text-white py-2 rounded-lg text-sm font-medium">I Saw Max!</button>
                  <button className="flex-1 border border-gray-200 text-gray-600 py-2 rounded-lg text-sm font-medium">Share</button>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs text-gray-500">
                  <Bell className="w-3 h-3 text-primary" />
                  <span>14 people within 2km have been notified</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="section-title">Reunite lost pets faster</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our GPS-powered Lost &amp; Found network helps reunite pets with their families through community alerts and smart geofencing.
            </p>

            <div className="space-y-6">
              {DIFFERENTIATORS.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="flex gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${item.color}20` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: item.color }} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
