import { Star, MapPin, CheckCircle } from 'lucide-react'
import { SERVICES } from '../../lib/constants'

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Trusted services near you</h2>
          <p className="section-subtitle mx-auto">
            Find verified vets, groomers, and pet hotels in your area.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.name}
              className="rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white mb-2"
                    style={{ backgroundColor: service.badgeColor }}
                  >
                    {service.badge}
                  </span>
                  <h3 className="font-semibold text-gray-900">{service.name}</h3>
                  <p className="text-sm text-gray-500">{service.type}</p>
                </div>
                {service.verified && (
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                )}
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{service.rating}</span>
                  <span className="text-gray-400">({service.reviews})</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>{service.distance}</span>
                </div>
              </div>

              <button className="mt-4 w-full py-2 border border-primary text-primary rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-colors">
                View Details
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#cta" className="btn-secondary inline-flex">Browse All Services</a>
        </div>
      </div>
    </section>
  )
}
