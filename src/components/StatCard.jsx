
function StatCard({ title, value, description, icon: Icon, color }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5
      shadow-sm dark:border-slate-800 dark:bg-slate-900">

      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {title}
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">
            {value}
          </h2>
        </div>

        <div className={`rounded-xl p-3 ${color}`}>
          <Icon size={22} />
        </div>
      </div>

      <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
        {description}
      </p>
    </div>
  )
}

export default StatCard
