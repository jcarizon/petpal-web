import { ArrowRight, Star } from 'lucide-react'
import { APP_TAGLINE, APP_DESCRIPTION } from '../../lib/constants'

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-white to-purple-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 fill-primary" />
              Trusted by 10,000+ pet owners
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              {APP_TAGLINE.split("'").map((part, i, arr) =>
                i < arr.length - 1 ? (
                  <span key={i}>
                    {part}<span className="text-primary">'</span>
                  </span>
                ) : part
              )}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {APP_DESCRIPTION}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#cta" className="btn-primary flex items-center justify-center gap-2">
                Download Free App
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#features" className="btn-secondary flex items-center justify-center gap-2">
                Learn More
              </a>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-6 mt-8">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-primary-dark border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                    {['M', 'J', 'A', 'C'][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-600">4.9/5 from 2,000+ reviews</p>
              </div>
            </div>
          </div>

          {/* App mockup */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-64 h-[500px] bg-gray-900 rounded-[3rem] shadow-2xl overflow-hidden border-4 border-gray-800 relative">
                {/* Phone screen */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark flex flex-col items-center justify-center p-8 text-white text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                    <span className="text-3xl">🐾</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">PetPal</h3>
                  <p className="text-sm text-white/80 mb-6">Your pet's health companion</p>
                  <div className="space-y-3 w-full">
                    {['💉 Vaccination due in 3 days', '🏥 Vet appointment tomorrow', '🏆 New badge earned!'].map((item) => (
                      <div key={item} className="bg-white/10 rounded-xl p-3 text-xs text-left backdrop-blur-sm">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Floating badges */}
              <div className="absolute -left-8 top-16 bg-white rounded-xl shadow-lg p-3 flex items-center gap-2">
                <span className="text-xl">🏆</span>
                <div>
                  <p className="text-xs font-semibold text-gray-900">Badge Earned!</p>
                  <p className="text-xs text-gray-500">Health Hero</p>
                </div>
              </div>
              <div className="absolute -right-8 bottom-24 bg-white rounded-xl shadow-lg p-3 flex items-center gap-2">
                <span className="text-xl">📍</span>
                <div>
                  <p className="text-xs font-semibold text-gray-900">Pet Found!</p>
                  <p className="text-xs text-gray-500">1.2 km away</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
