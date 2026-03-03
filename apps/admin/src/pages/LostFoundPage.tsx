import { useState } from 'react'
import { Flag, CheckCircle2 } from 'lucide-react'

interface Alert {
  id: string
  petName: string
  species: string
  owner: string
  location: string
  status: 'active' | 'resolved' | 'flagged'
  date: string
}

const MOCK_ALERTS: Alert[] = [
  { id: '1', petName: 'Max', species: 'Dog', owner: 'Maria Santos', location: 'Makati, Manila', status: 'active', date: '2024-03-01' },
  { id: '2', petName: 'Luna', species: 'Cat', owner: 'Juan dela Cruz', location: 'BGC, Taguig', status: 'resolved', date: '2024-02-28' },
  { id: '3', petName: 'Buddy', species: 'Dog', owner: 'Ana Reyes', location: 'Pasig City', status: 'flagged', date: '2024-03-02' },
  { id: '4', petName: 'Mochi', species: 'Cat', owner: 'Carlos Gomez', location: 'Quezon City', status: 'active', date: '2024-03-03' },
]

const STATUS_STYLES: Record<Alert['status'], string> = {
  active: 'bg-amber-100 text-amber-700',
  resolved: 'bg-green-100 text-green-700',
  flagged: 'bg-red-100 text-red-700',
}

export default function LostFoundPage() {
  const [alerts, setAlerts] = useState(MOCK_ALERTS)

  const flagAlert = (id: string) => {
    setAlerts((prev) => prev.map((a) => a.id === id ? { ...a, status: 'flagged' as const } : a))
  }

  const resolveAlert = (id: string) => {
    setAlerts((prev) => prev.map((a) => a.id === id ? { ...a, status: 'resolved' as const } : a))
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Lost &amp; Found Moderation</h2>
        <p className="text-gray-500 text-sm mt-1">Review and moderate lost pet alerts</p>
      </div>

      <div className="card">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="table-header text-left">Pet Name</th>
                <th className="table-header text-left">Species</th>
                <th className="table-header text-left">Owner</th>
                <th className="table-header text-left">Location</th>
                <th className="table-header text-left">Status</th>
                <th className="table-header text-left">Date</th>
                <th className="table-header text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {alerts.map((alert) => (
                <tr key={alert.id} className="hover:bg-gray-50">
                  <td className="table-cell font-medium text-gray-900">{alert.petName}</td>
                  <td className="table-cell text-gray-500">{alert.species}</td>
                  <td className="table-cell text-gray-500">{alert.owner}</td>
                  <td className="table-cell text-gray-500">{alert.location}</td>
                  <td className="table-cell">
                    <span className={`badge ${STATUS_STYLES[alert.status]}`}>{alert.status}</span>
                  </td>
                  <td className="table-cell text-gray-500">{alert.date}</td>
                  <td className="table-cell">
                    <div className="flex items-center gap-1">
                      {alert.status !== 'flagged' && (
                        <button onClick={() => flagAlert(alert.id)} className="p-1.5 text-amber-500 hover:bg-amber-50 rounded-lg" title="Flag">
                          <Flag className="w-4 h-4" />
                        </button>
                      )}
                      {alert.status !== 'resolved' && (
                        <button onClick={() => resolveAlert(alert.id)} className="p-1.5 text-green-500 hover:bg-green-50 rounded-lg" title="Resolve">
                          <CheckCircle2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
