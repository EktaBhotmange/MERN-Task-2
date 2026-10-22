
import { useEffect, useState } from 'react'
import { getTasks, createTask, updateTask, deleteTask } from '../services/TaskServices'
import TaskCard from '../components/TaskCard'
import TaskForm from '../components/TaskForm'

function Tasks() {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [filter, setFilter] = useState('All')

  useEffect(() => {
    async function loadTasks() {
      try {
        setError('')
        const data = await getTasks()
        setTasks(data)
      } catch {
        setError('Unable to load tasks. Check your internet connection.')
      } finally {
        setLoading(false)
      }
    }

    loadTasks()
  }, [])

  async function handleAddTask(newTask) {
    setSaving(true)

    try {
      const created = await createTask(newTask)
      setTasks((current) => [
        { ...created, category: newTask.category },
        ...current,
      ])
    } finally {
      setSaving(false)
    }
  }

  async function handleToggle(id) {
    const task = tasks.find((item) => item.id === id)
    if (!task) return

    const updated = { ...task, completed: !task.completed }

    // Update the interface immediately.
    setTasks((current) =>
      current.map((item) => item.id === id ? updated : item)
    )

    try {
      await updateTask(updated)
    } catch {
      // Restore the previous state if the request fails.
      setTasks((current) =>
        current.map((item) => item.id === id ? task : item)
      )
      setError('Could not update the task. Please try again.')
    }
  }

  async function handleDelete(id) {
    const previousTasks = tasks
    setTasks((current) => current.filter((task) => task.id !== id))

    try {
      await deleteTask(id)
    } catch {
      setTasks(previousTasks)
      setError('Could not delete the task. Please try again.')
    }
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'Completed') return task.completed
    if (filter === 'Pending') return !task.completed
    return true
  })

  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          My Tasks
        </h1>
        <p className="mt-2 text-slate-500 dark:text-slate-400">
          Create and manage your daily tasks.
        </p>
      </div>

      <TaskForm onAddTask={handleAddTask} loading={saving} />

      <div className="flex flex-wrap gap-2">
        {['All', 'Pending', 'Completed'].map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`rounded-xl px-4 py-2 text-sm font-medium ${
              filter === item
                ? 'bg-indigo-600 text-white'
                : 'bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {error && (
        <div role="alert" className="rounded-xl bg-red-50 p-4 text-sm text-red-700 dark:bg-red-950 dark:text-red-300">
          {error}
          <button
            onClick={() => setError('')}
            className="ml-3 underline"
          >
            Dismiss
          </button>
        </div>
      )}

      {loading ? (
        <p className="py-8 text-center text-slate-500">
          Loading tasks from API...
        </p>
      ) : filteredTasks.length === 0 ? (
        <p className="py-8 text-center text-slate-500">
          No tasks in this category.
        </p>
      ) : (
        <div className="space-y-3">
          {filteredTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onToggle={handleToggle}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Tasks
