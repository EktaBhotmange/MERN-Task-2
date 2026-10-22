
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Header from './components/Header';

import Dashboard from './pages/Dashboard';
import Tasks from './pages/Tasks';
import Profile from './pages/Profile';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState('');

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-950 dark:text-white">
      <div className="flex min-h-screen">
        <Sidebar
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <div className="flex min-w-0 flex-1 flex-col">
          <Header
            onMenuClick={() => setSidebarOpen(true)}
            search={search}
            setSearch={setSearch}
          />

          <main className="flex-1 p-4 sm:p-6 lg:p-8">
            <Routes>
              <Route
                path="/"
                element={<Dashboard search={search} />}
              />

              <Route
                path="/tasks"
                element={<Tasks search={search} />}
              />

              <Route
                path="/profile"
                element={<Profile />}
              />

              <Route
                path="*"
                element={
                  <div className="py-10 text-center">
                    <h1 className="text-2xl font-bold">
                      404 - Page Not Found
                    </h1>
                    <p className="mt-2 text-gray-500">
                      The page you are looking for does not exist.
                    </p>
                  </div>
                }
              />
            </Routes>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
