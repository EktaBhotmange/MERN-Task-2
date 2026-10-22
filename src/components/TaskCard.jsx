
import { Check, Trash2 } from 'lucide-react'

function TaskCard({ task, onToggle, onDelete }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border
      border-slate-200 bg-white p-4 dark:border-slate-800
      dark:bg-slate-900">

      <button
        onClick={() => onToggle(task.id)}
        aria-label={task.completed ? 'Mark incomplete' : 'Mark complete'}
        className={`flex h-6 w-6 shrink-0 items-center justify-center
          rounded-md border ${
            task.completed
              ? 'border-emerald-500 bg-emerald-500 text-white'
              : 'border-slate-300 dark:border-slate-600'
          }`}
      >
        {task.completed && <Check size={15} />}
      </button>

      <div className="min-w-0 flex-1">
        <p className={`break-words font-medium ${
          task.completed
            ? 'text-slate-400 line-through'
            : 'text-slate-800 dark:text-white'
        }`}>
          {task.title}
        </p>
        <p className="mt-1 text-xs text-slate-500">
          {task.category || 'General'}
        </p>
      </div>

      <span className={`rounded-full px-3 py-1 text-xs ${
        task.completed
          ? 'bg-emerald-100 text-emerald-700'
          : 'bg-amber-100 text-amber-700'
      }`}>
        {task.completed ? 'Completed' : 'Pending'}
      </span>

      <button
        onClick={() => onDelete(task.id)}
        aria-label="Delete task"
        className="rounded-lg p-2 text-slate-400 hover:bg-red-50
          hover:text-red-600 dark:hover:bg-red-950"
      >
        <Trash2 size={18} />
      </button>
    </div>
  )
}

export default TaskCard
