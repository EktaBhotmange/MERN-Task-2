
import { useState } from 'react'
import { Plus } from 'lucide-react'

function TaskForm({ onAddTask, loading }) {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('Development')
  const [error, setError] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()

    if (!title.trim()) {
      setError('Please enter a task title.')
      return
    }

    setError('')

    try {
      await onAddTask({
        title: title.trim(),
        category,
      })
      setTitle('')
      setCategory('Development')
    } catch {
      setError('Could not add task. Please try again.')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-3 rounded-2xl border border-slate-200
        bg-white p-5 dark:border-slate-800 dark:bg-slate-900"
    >
      <h2 className="font-bold text-slate-900 dark:text-white">
        Create a new task
      </h2>

      <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="What do you need to do?"
        maxLength={150}
        className="w-full rounded-xl border border-slate-200
          bg-transparent px-4 py-3 text-slate-900 outline-none
          focus:border-indigo-500 dark:border-slate-700
          dark:text-white"
      />

      <select
        value={category}
        onChange={(event) => setCategory(event.target.value)}
        className="w-full rounded-xl border border-slate-200
          bg-white px-4 py-3 text-slate-800 dark:border-slate-700
          dark:bg-slate-900 dark:text-white"
      >
        <option>Development</option>
        <option>Learning</option>
        <option>Personal</option>
        <option>General</option>
      </select>

      {error && (
        <p role="alert" className="text-sm text-red-500">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="flex items-center gap-2 rounded-xl
          bg-indigo-600 px-4 py-3 font-semibold text-white
          hover:bg-indigo-700 disabled:opacity-50"
      >
        <Plus size={18} />
        {loading ? 'Adding...' : 'Add Task'}
      </button>
    </form>
  )
}

export default TaskForm
