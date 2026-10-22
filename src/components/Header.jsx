
import { Menu, Search, Bell, UserRound } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function Header({ onMenuClick, search, setSearch }) {
  const navigate = useNavigate()

  return (
    <header className="sticky top-0 z-30 flex items-center gap-3
      border-b border-slate-200 bg-white/90 px-4 py-4 backdrop-blur
      dark:border-slate-800 dark:bg-slate-950/90 sm:px-8">

      <button
        onClick={onMenuClick}
        className="rounded-lg p-2 text-slate-600 hover:bg-slate-100
          dark:text-slate-300 dark:hover:bg-slate-800 lg:hidden"
        aria-label="Open menu"
      >
        <Menu size={22} />
      </button>

      <div className="relative max-w-md flex-1">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />
        <input
          type="search"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border border-slate-200 bg-slate-50
            py-2.5 pl-10 pr-3 text-sm text-slate-800 outline-none
            focus:border-indigo-500 dark:border-slate-800
            dark:bg-slate-900 dark:text-white"
        />
      </div>

      <button
        className="rounded-xl p-2 text-slate-500 hover:bg-slate-100
          dark:text-slate-300 dark:hover:bg-slate-800"
        aria-label="Notifications"
        title="Notifications"
      >
        <Bell size={20} />
      </button>

      <button
        onClick={() => navigate('/profile')}
        className="flex h-10 w-10 items-center justify-center rounded-full
          bg-indigo-100 text-indigo-700 dark:bg-indigo-950
          dark:text-indigo-300"
        aria-label="Open profile"
      >
        <UserRound size={20} />
      </button>
    </header>
  )
}

export default Header
