import { APP_NAME } from '../../lib/constants'

export default function CTASection() {
  return (
    <section id="cta" className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Download {APP_NAME} for free
        </h2>
        <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
          Join 10,000+ pet owners who trust PetPal to keep their pets healthy and happy.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* App Store Button */}
          <a
            href="#"
            className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-900 transition-colors"
          >
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <div className="text-left">
              <p className="text-xs text-gray-300">Download on the</p>
              <p className="text-base font-semibold">App Store</p>
            </div>
          </a>

          {/* Google Play Button */}
          <a
            href="#"
            className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-900 transition-colors"
          >
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.61.37.61 1.23 0 1.6l-14 8.5c-.66.5-1.6.03-1.6-.8zM5 7.07v9.86L14.5 12 5 7.07z"/>
            </svg>
            <div className="text-left">
              <p className="text-xs text-gray-300">Get it on</p>
              <p className="text-base font-semibold">Google Play</p>
            </div>
          </a>
        </div>

        <p className="mt-6 text-sm text-white/60">
          Free to download • No credit card required • Available on iOS &amp; Android
        </p>
      </div>
    </section>
  )
}
