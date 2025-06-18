import React, { useState } from 'react'

const roles = [
  { id: 'developer', name: 'Developer' },
  { id: 'community-lead', name: 'Community Lead' },
  { id: 'startup-founder', name: 'Startup Founder' },
  { id: 'other', name: 'Other' },
]

const WaitlistForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement form submission
    console.log('Form submitted:', formData)
  }

  return (
    <div id="waitlist" className="bg-off-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-poppins font-extrabold tracking-tight text-dark-navy sm:text-4xl">Join the Waitlist</h2>
          <p className="mt-2 text-lg leading-8 text-dark-navy">
            Be among the first to know when we launch.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-xl sm:mt-14">
          <div className="grid grid-cols-1 gap-y-6 sm:gap-x-8 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="name" className="block text-sm font-semibold leading-6 text-dark-navy">
                Name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-dark-navy shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-tech-green sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-dark-navy">
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-dark-navy shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-tech-green sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="role" className="block text-sm font-semibold leading-6 text-dark-navy">
                Role
              </label>
              <div className="mt-2.5">
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-dark-navy shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-tech-green sm:text-sm sm:leading-6"
                >
                  <option value="">Select a role</option>
                  {roles.map((role) => (
                    <option key={role.id} value={role.id}>
                      {role.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-tech-green px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tech-green"
            >
              Join Now
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default WaitlistForm 