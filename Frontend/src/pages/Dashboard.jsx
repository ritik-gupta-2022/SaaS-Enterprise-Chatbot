import { useState } from 'react'
import { Sidebar } from '../components/shared/Sidebar'
import { DashboardOverview } from '../components/dashboard/Overview'


function Dashboard() {
  const [activeSection, setActiveSection] = useState('overview')

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return <DashboardOverview/>
      case 'conversations':
        return <h2 className="text-2xl font-bold">Conversations</h2>
      case 'settings':
        return <h2 className="text-2xl font-bold">Settings</h2>
      case 'appointments':
        return <h2 className="text-2xl font-bold">Appointments</h2>
      case 'email':
        return <h2 className="text-2xl font-bold">Email Marketing</h2>
      default:
        return <h2 className="text-2xl font-bold">Dashboard Overview</h2>
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar onNavigation={setActiveSection} active={activeSection} />
      <main className="flex-1 p-8">
        {renderContent()}
      </main>
    </div>
  )
}

export default Dashboard

