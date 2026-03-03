import { Users, PawPrint, AlertTriangle, Briefcase, TrendingUp, ArrowUp } from 'lucide-react'
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts'

const KPI_STATS = [
  { label: 'Total Users', value: '12,847', change: '+12%', icon: Users, color: '#8B5CF6', bg: '#EDE9FE' },
  { label: 'Total Pets', value: '18,234', change: '+8%', icon: PawPrint, color: '#10B981', bg: '#D1FAE5' },
  { label: 'Active Alerts', value: '43', change: '+5%', icon: AlertTriangle, color: '#F59E0B', bg: '#FEF3C7' },
  { label: 'Services Listed', value: '289', change: '+15%', icon: Briefcase, color: '#3B82F6', bg: '#DBEAFE' },
]

const USER_GROWTH = [
  { month: 'Sep', users: 4200 },
  { month: 'Oct', users: 6800 },
  { month: 'Nov', users: 8100 },
  { month: 'Dec', users: 9500 },
  { month: 'Jan', users: 11200 },
  { month: 'Feb', users: 12847 },
]

const ALERT_STATS = [
  { month: 'Sep', lost: 12, found: 9 },
  { month: 'Oct', lost: 18, found: 14 },
  { month: 'Nov', lost: 15, found: 12 },
  { month: 'Dec', lost: 20, found: 18 },
  { month: 'Jan', lost: 25, found: 22 },
  { month: 'Feb', lost: 43, found: 38 },
]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
        <p className="text-gray-500 text-sm mt-1">Welcome back! Here's what's happening.</p>
      </div>

      {/* KPI Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {KPI_STATS.map((stat) => (
          <div key={stat.label} className="card">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: stat.bg }}>
                <stat.icon className="w-5 h-5" style={{ color: stat.color }} />
              </div>
              <span className="text-xs font-semibold text-green-600 flex items-center gap-0.5">
                <ArrowUp className="w-3 h-3" />
                {stat.change}
              </span>
            </div>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            <p className="text-sm text-gray-500 mt-0.5">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* User Growth */}
        <div className="card">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-gray-900">User Growth</h3>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={USER_GROWTH}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="users"
                stroke="#8B5CF6"
                strokeWidth={2}
                dot={{ fill: '#8B5CF6', r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Alert Stats */}
        <div className="card">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-amber-500" />
            <h3 className="font-semibold text-gray-900">Lost &amp; Found Alerts</h3>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={ALERT_STATS}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="lost" fill="#EF4444" radius={[4, 4, 0, 0]} name="Lost" />
              <Bar dataKey="found" fill="#10B981" radius={[4, 4, 0, 0]} name="Found" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
