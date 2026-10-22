
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  CheckSquare,
  UserRound,
  X,
  ListTodo,
} from 'lucide-react';

const navItems = [
  { name: 'Dashboard', path: '/', icon: LayoutDashboard },
  { name: 'Tasks', path: '/tasks', icon: CheckSquare },
  { name: 'Profile', path: '/profile', icon: UserRound },
];

function Sidebar({ open, onClose }) {
  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col
        border-r border-gray-200 bg-white transition-transform duration-300
        dark:border-gray-800 dark:bg-gray-900
        md:static md:translate-x-0
        ${open ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex h-16 items-center justify-between border-b border-gray-200 px-5 dark:border-gray-800">
          <div className="flex items-center gap-2">
            <ListTodo className="text-indigo-600" size={26} />
            <span className="text-xl font-bold">TaskFlow</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800 md:hidden"
            aria-label="Close sidebar"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 space-y-2 p-4">
          {navItems.map(({ name, path, icon: Icon }) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 font-medium transition ${
                  isActive
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                }`
              }
            >
              <Icon size={20} />
              {name}
            </NavLink>
          ))}
        </nav>

        <div className="border-t border-gray-200 p-4 text-sm text-gray-500 dark:border-gray-800 dark:text-gray-400">
          Task Management Dashboard
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
