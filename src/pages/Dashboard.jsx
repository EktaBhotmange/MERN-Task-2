
import { CheckCircle2, Clock, ListTodo } from 'lucide-react';
import StatCard from '../components/StatCard';

function Dashboard({ search = '' }) {
  const taskCount = 0;
  const completedCount = 0;
  const pendingCount = 0;

  const stats = [
    {
      title: 'Total Tasks',
      value: taskCount,
      icon: ListTodo,
    },
    {
      title: 'Completed',
      value: completedCount,
      icon: CheckCircle2,
    },
    {
      title: 'Pending',
      value: pendingCount,
      icon: Clock,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Welcome back! Here is your task overview.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <StatCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
          />
        ))}
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
        <h2 className="text-xl font-semibold">Recent Tasks</h2>

        <p className="mt-3 text-gray-500 dark:text-gray-400">
          {search
            ? `Search for "${search}" in the Tasks page.`
            : 'Open the Tasks page to view, add, complete, and delete tasks.'}
        </p>
      </div>
    </div>
  );
}

export default Dashboard;
