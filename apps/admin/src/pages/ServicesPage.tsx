import { useState } from 'react'
import { Plus, Pencil, Trash2, CheckCircle, XCircle } from 'lucide-react'

interface Service {
  id: string
  name: string
  type: string
  location: string
  status: 'active' | 'inactive'
  verified: boolean
  rating: number
}

const MOCK_SERVICES: Service[] = [
  { id: '1', name: 'PetCare Veterinary Clinic', type: 'Veterinarian', location: 'Makati, Manila', status: 'active', verified: true, rating: 4.9 },
  { id: '2', name: 'Fluffy Paws Grooming', type: 'Groomer', location: 'BGC, Taguig', status: 'active', verified: true, rating: 4.8 },
  { id: '3', name: 'Happy Tails Pet Hotel', type: 'Pet Hotel', location: 'Pasig City', status: 'active', verified: false, rating: 4.7 },
  { id: '4', name: 'City Vet Animal Clinic', type: 'Veterinarian', location: 'Quezon City', status: 'inactive', verified: false, rating: 4.2 },
]

export default function ServicesPage() {
  const [services, setServices] = useState(MOCK_SERVICES)
  const [showForm, setShowForm] = useState(false)
  const [newService, setNewService] = useState({ name: '', type: 'Veterinarian', location: '' })

  const toggleVerified = (id: string) => {
    setServices((prev) => prev.map((s) => s.id === id ? { ...s, verified: !s.verified } : s))
  }

  const deleteService = (id: string) => {
    setServices((prev) => prev.filter((s) => s.id !== id))
  }

  const addService = () => {
    if (!newService.name || !newService.location) return
    setServices((prev) => [...prev, {
      id: String(Date.now()),
      ...newService,
      status: 'active',
      verified: false,
      rating: 0,
    }])
    setNewService({ name: '', type: 'Veterinarian', location: '' })
    setShowForm(false)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Service Management</h2>
          <p className="text-gray-500 text-sm mt-1">Manage service listings</p>
        </div>
        <button onClick={() => setShowForm(!showForm)} className="btn-primary flex items-center gap-2">
          <Plus className="w-4 h-4" /> Add Service
        </button>
      </div>

      {showForm && (
        <div className="card">
          <h3 className="font-semibold text-gray-900 mb-4">Add New Service</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <input className="input" placeholder="Service name" value={newService.name} onChange={(e) => setNewService({ ...newService, name: e.target.value })} />
            <select className="input" value={newService.type} onChange={(e) => setNewService({ ...newService, type: e.target.value })}>
              <option>Veterinarian</option>
              <option>Groomer</option>
              <option>Pet Hotel</option>
              <option>Pet Store</option>
            </select>
            <input className="input" placeholder="Location" value={newService.location} onChange={(e) => setNewService({ ...newService, location: e.target.value })} />
          </div>
          <div className="flex gap-2 mt-4">
            <button onClick={addService} className="btn-primary">Add Service</button>
            <button onClick={() => setShowForm(false)} className="btn-secondary">Cancel</button>
          </div>
        </div>
      )}

      <div className="card">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="table-header text-left">Name</th>
                <th className="table-header text-left">Type</th>
                <th className="table-header text-left">Location</th>
                <th className="table-header text-left">Rating</th>
                <th className="table-header text-left">Verified</th>
                <th className="table-header text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => (
                <tr key={service.id} className="hover:bg-gray-50">
                  <td className="table-cell font-medium text-gray-900">{service.name}</td>
                  <td className="table-cell text-gray-500">{service.type}</td>
                  <td className="table-cell text-gray-500">{service.location}</td>
                  <td className="table-cell">{service.rating > 0 ? `⭐ ${service.rating}` : '—'}</td>
                  <td className="table-cell">
                    <button onClick={() => toggleVerified(service.id)} className="flex items-center gap-1">
                      {service.verified
                        ? <CheckCircle className="w-5 h-5 text-green-500" />
                        : <XCircle className="w-5 h-5 text-gray-300" />}
                    </button>
                  </td>
                  <td className="table-cell">
                    <div className="flex items-center gap-1">
                      <button className="p-1.5 text-blue-500 hover:bg-blue-50 rounded-lg">
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button onClick={() => deleteService(service.id)} className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg">
                        <Trash2 className="w-4 h-4" />
                      </button>
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
