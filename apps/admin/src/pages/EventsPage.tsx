import { useState } from 'react'
import { Plus, Pencil, Trash2, Calendar } from 'lucide-react'

interface Event {
  id: string
  title: string
  date: string
  location: string
  type: string
  attendees: number
}

const MOCK_EVENTS: Event[] = [
  { id: '1', title: 'Pet Vaccination Drive', date: '2024-03-15', location: 'Ayala, Makati', type: 'Health', attendees: 150 },
  { id: '2', title: 'Dog Agility Contest', date: '2024-03-22', location: 'BGC Park, Taguig', type: 'Competition', attendees: 200 },
  { id: '3', title: 'Pet Adoption Fair', date: '2024-04-01', location: 'SM Mall of Asia', type: 'Community', attendees: 500 },
]

const EVENT_TYPES = ['Health', 'Competition', 'Community', 'Training', 'Other']

export default function EventsPage() {
  const [events, setEvents] = useState(MOCK_EVENTS)
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [form, setForm] = useState({ title: '', date: '', location: '', type: 'Health' })

  const handleSave = () => {
    if (!form.title || !form.date || !form.location) return
    if (editingId) {
      setEvents((prev) => prev.map((e) => e.id === editingId ? { ...e, ...form } : e))
      setEditingId(null)
    } else {
      setEvents((prev) => [...prev, { id: String(Date.now()), ...form, attendees: 0 }])
    }
    setForm({ title: '', date: '', location: '', type: 'Health' })
    setShowForm(false)
  }

  const startEdit = (event: Event) => {
    setForm({ title: event.title, date: event.date, location: event.location, type: event.type })
    setEditingId(event.id)
    setShowForm(true)
  }

  const deleteEvent = (id: string) => {
    setEvents((prev) => prev.filter((e) => e.id !== id))
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Event Management</h2>
          <p className="text-gray-500 text-sm mt-1">Create and manage community events</p>
        </div>
        <button onClick={() => { setShowForm(!showForm); setEditingId(null); setForm({ title: '', date: '', location: '', type: 'Health' }) }} className="btn-primary flex items-center gap-2">
          <Plus className="w-4 h-4" /> Add Event
        </button>
      </div>

      {showForm && (
        <div className="card">
          <h3 className="font-semibold text-gray-900 mb-4">{editingId ? 'Edit Event' : 'Add New Event'}</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <input className="input" placeholder="Event title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
            <input className="input" type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
            <input className="input" placeholder="Location" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} />
            <select className="input" value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
              {EVENT_TYPES.map((t) => <option key={t}>{t}</option>)}
            </select>
          </div>
          <div className="flex gap-2 mt-4">
            <button onClick={handleSave} className="btn-primary">{editingId ? 'Save Changes' : 'Add Event'}</button>
            <button onClick={() => { setShowForm(false); setEditingId(null) }} className="btn-secondary">Cancel</button>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map((event) => (
          <div key={event.id} className="card hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <Calendar className="w-5 h-5 text-primary" />
              </div>
              <span className="badge bg-purple-100 text-purple-700">{event.type}</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">{event.title}</h3>
            <p className="text-sm text-gray-500 mb-1">📅 {event.date}</p>
            <p className="text-sm text-gray-500 mb-3">📍 {event.location}</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">{event.attendees} expected attendees</span>
              <div className="flex gap-1">
                <button onClick={() => startEdit(event)} className="p-1.5 text-blue-500 hover:bg-blue-50 rounded-lg">
                  <Pencil className="w-4 h-4" />
                </button>
                <button onClick={() => deleteEvent(event.id)} className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
