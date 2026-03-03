import { Heart, MapPin, Search, Trophy } from 'lucide-react'
import { FEATURES } from '../../lib/constants'

const ICON_MAP = { Heart, MapPin, Search, Trophy }

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Everything your pet needs</h2>
          <p className="section-subtitle mx-auto">
            PetPal brings together all the tools you need to be the best pet parent possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature) => {
            const Icon = ICON_MAP[feature.icon as keyof typeof ICON_MAP]
            return (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${feature.color}20` }}
                >
                  <Icon className="w-6 h-6" style={{ color: feature.color }} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
