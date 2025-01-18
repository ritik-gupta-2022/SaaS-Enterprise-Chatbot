import { Users, DollarSign, Calendar, TrendingUp } from 'lucide-react'
import { MetricCard } from './Metric-card.jsx'
import { Progress } from "../ui/progress"

export function DashboardOverview() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Potential Clients"
          value="2"
          icon={<Users className="w-6 h-6" />}
        />
        <MetricCard
          title="Pipeline Value"
          value="$0"
          icon={<DollarSign className="w-6 h-6" />}
        />
        <MetricCard
          title="Appointments"
          value="1"
          icon={<Calendar className="w-6 h-6" />}
        />
        <MetricCard
          title="Total Sales"
          value="$0"
          icon={<TrendingUp className="w-6 h-6" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Plan Usage</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Email Credits</span>
                <span>499/500</span>
              </div>
              <Progress value={99.8} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Domains</span>
                <span>1/500</span>
              </div>
              <Progress value={0.2} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Contacts</span>
                <span>2/500</span>
              </div>
              <Progress value={0.4} className="h-2" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Recent Transactions</h3>
            <button className="text-sm text-gray-500 hover:text-gray-700">
              See more
            </button>
          </div>
          <div className="flex justify-between items-center py-3 border-b">
            <span>Stripe</span>
            <span className="font-semibold">$35</span>
          </div>
        </div>
      </div>
    </div>
  )
}

