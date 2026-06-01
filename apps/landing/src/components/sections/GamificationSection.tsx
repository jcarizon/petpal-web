import { BADGES, LEADERBOARD } from '../../lib/constants'

export default function GamificationSection() {
  return (
    <section id="community" className="py-20 bg-gradient-to-br from-cardGradientStart to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Level up your pet parenting</h2>
          <p className="section-subtitle mx-auto">
            Earn badges for responsible pet care and see how you rank in the community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Badges */}
          <div>
            <h3 className="text-xl font-bold text-textPrimary mb-6">🏅 Achievement Badges</h3>
            <div className="grid grid-cols-3 gap-4">
              {BADGES.map((badge) => (
                <div
                  key={badge.name}
                  className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow border border-border"
                >
                  <div className="text-3xl mb-2">{badge.icon}</div>
                  <p className="text-xs font-semibold text-textPrimary">{badge.name}</p>
                  <p className="text-xs text-textSecondary mt-1">{badge.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Leaderboard */}
          <div>
            <h3 className="text-xl font-bold text-textPrimary mb-6">🏆 Top Community Members</h3>
            <div className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden">
              {LEADERBOARD.map((entry, index) => (
                <div
                  key={entry.rank}
                  className={`flex items-center gap-4 p-4 ${index < LEADERBOARD.length - 1 ? 'border-b border-border' : ''}`}
                >
                  <span className="text-xl w-8 text-center">{entry.badge}</span>
                  <div className="flex-1">
                    <p className="font-semibold text-textPrimary">{entry.name}</p>
                    <p className="text-xs text-textSecondary">{entry.pets} pets</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-primary">{entry.points.toLocaleString()}</p>
                    <p className="text-xs text-textSecondary">points</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
