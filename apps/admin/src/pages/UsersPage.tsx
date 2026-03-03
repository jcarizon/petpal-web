import { useState } from 'react'
import { Search, UserX, UserCheck } from 'lucide-react'

const MOCK_USERS = [
  { id: '1', name: 'Maria Santos', email: 'maria@example.com', pets: 3, status: 'active', joined: '2024-01-15' },
  { id: '2', name: 'Juan dela Cruz', email: 'juan@example.com', pets: 2, status: 'active', joined: '2024-02-20' },
  { id: '3', name: 'Ana Reyes', email: 'ana@example.com', pets: 4, status: 'suspended', joined: '2024-01-08' },
  { id: '4', name: 'Carlos Gomez', email: 'carlos@example.com', pets: 1, status: 'active', joined: '2024-03-01' },
  { id: '5', name: 'Lisa Tan', email: 'lisa@example.com', pets: 2, status: 'active', joined: '2024-03-10' },
  { id: '6', name: 'Pedro Mendoza', email: 'pedro@example.com', pets: 0, status: 'suspended', joined: '2024-02-14' },
]

export default function UsersPage() {
  const [search, setSearch] = useState('')
  const [users, setUsers] = useState(MOCK_USERS)

  const filtered = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  )

  const toggleStatus = (id: string) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === id ? { ...u, status: u.status === 'active' ? 'suspended' : 'active' } : u
      )
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">User Management</h2>
          <p className="text-gray-500 text-sm mt-1">Manage registered users</p>
        </div>
      </div>

      <div className="card">
        <div className="flex items-center gap-2 mb-4">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              className="input pl-9"
              placeholder="Search users..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="table-header text-left rounded-l-lg">Name</th>
                <th className="table-header text-left">Email</th>
                <th className="table-header text-left">Pets</th>
                <th className="table-header text-left">Status</th>
                <th className="table-header text-left">Joined</th>
                <th className="table-header text-left rounded-r-lg">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="table-cell font-medium text-gray-900">{user.name}</td>
                  <td className="table-cell text-gray-500">{user.email}</td>
                  <td className="table-cell">{user.pets}</td>
                  <td className="table-cell">
                    <span className={`badge ${user.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="table-cell text-gray-500">{user.joined}</td>
                  <td className="table-cell">
                    <button
                      onClick={() => toggleStatus(user.id)}
                      className={`flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-lg transition-colors ${
                        user.status === 'active'
                          ? 'text-red-600 hover:bg-red-50'
                          : 'text-green-600 hover:bg-green-50'
                      }`}
                    >
                      {user.status === 'active' ? (
                        <><UserX className="w-3.5 h-3.5" /> Suspend</>
                      ) : (
                        <><UserCheck className="w-3.5 h-3.5" /> Activate</>
                      )}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filtered.length === 0 && (
            <p className="text-center text-gray-500 py-8 text-sm">No users found.</p>
          )}
        </div>
      </div>
    </div>
  )
}
