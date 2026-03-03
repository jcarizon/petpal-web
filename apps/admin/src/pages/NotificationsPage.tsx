import { useState, FormEvent } from 'react'
import { Send, Users, Globe } from 'lucide-react'

const SENT_NOTIFICATIONS = [
  { id: '1', title: 'App Update Available', message: 'Version 2.1 is now live with new features!', audience: 'all', sentAt: '2024-03-01 10:00', delivered: 12847 },
  { id: '2', title: 'Pet Health Reminder', message: 'Don\'t forget to update your pet\'s vaccination records.', audience: 'all', sentAt: '2024-02-28 09:00', delivered: 11200 },
]

export default function NotificationsPage() {
  const [title, setTitle] = useState('')
  const [message, setMessage] = useState('')
  const [audience, setAudience] = useState('all')
  const [sending, setSending] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSend = async (e: FormEvent) => {
    e.preventDefault()
    setSending(true)
    // Mock send — replace with: POST /api/notifications/broadcast
    await new Promise((r) => setTimeout(r, 1000))
    setSending(false)
    setSuccess(true)
    setTitle('')
    setMessage('')
    setTimeout(() => setSuccess(false), 3000)
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Push Notifications</h2>
        <p className="text-gray-500 text-sm mt-1">Broadcast notifications to users</p>
      </div>

      {/* Compose form */}
      <div className="card">
        <h3 className="font-semibold text-gray-900 mb-4">Compose Notification</h3>
        <form onSubmit={handleSend} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input className="input" placeholder="Notification title" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea className="input resize-none" rows={4} placeholder="Notification message..." value={message} onChange={(e) => setMessage(e.target.value)} required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Audience</label>
            <div className="flex gap-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" value="all" checked={audience === 'all'} onChange={() => setAudience('all')} className="text-primary" />
                <Globe className="w-4 h-4 text-gray-500" />
                <span className="text-sm">All Users</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" value="active" checked={audience === 'active'} onChange={() => setAudience('active')} className="text-primary" />
                <Users className="w-4 h-4 text-gray-500" />
                <span className="text-sm">Active Users Only</span>
              </label>
            </div>
          </div>
          {success && (
            <div className="bg-green-50 text-green-700 px-4 py-3 rounded-lg text-sm">
              ✅ Notification sent successfully!
            </div>
          )}
          <button type="submit" className="btn-primary flex items-center gap-2" disabled={sending}>
            <Send className="w-4 h-4" />
            {sending ? 'Sending...' : 'Send Notification'}
          </button>
        </form>
      </div>

      {/* Sent notifications */}
      <div className="card">
        <h3 className="font-semibold text-gray-900 mb-4">Recent Broadcasts</h3>
        <div className="space-y-3">
          {SENT_NOTIFICATIONS.map((notif) => (
            <div key={notif.id} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
              <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                <Send className="w-4 h-4 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-gray-900">{notif.title}</p>
                <p className="text-sm text-gray-500 truncate">{notif.message}</p>
                <p className="text-xs text-gray-400 mt-1">Sent {notif.sentAt} • {notif.delivered.toLocaleString()} delivered</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
