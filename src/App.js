import { useState } from "react";
import { Menu, Moon, Sun, Home, Settings, User } from "lucide-react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="flex h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
        {/* Sidebar */}
        <div
          className={`${
            sidebarOpen ? "w-64" : "w-16"
          } bg-white dark:bg-gray-800 transition-all duration-300 shadow-lg flex flex-col`}
        >
          <div className="flex items-center justify-between p-4">
            <span className="text-lg font-bold text-gray-800 dark:text-white hidden md:block">
              MyApp
            </span>
            <button
              onClick={toggleSidebar}
              className="text-gray-600 dark:text-gray-200"
            >
              <Menu size={20} />
            </button>
          </div>
          <nav className="flex-1 p-2 space-y-2">
            <a
              href="#"
              className="flex items-center p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
            >
              <Home className="mr-3" size={20} />
              <span className={sidebarOpen ? "inline" : "hidden"}>Dashboard</span>
            </a>
            <a
              href="#"
              className="flex items-center p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
            >
              <User className="mr-3" size={20} />
              <span className={sidebarOpen ? "inline" : "hidden"}>Users</span>
            </a>
            <a
              href="#"
              className="flex items-center p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
            >
              <Settings className="mr-3" size={20} />
              <span className={sidebarOpen ? "inline" : "hidden"}>Settings</span>
            </a>
          </nav>
        </div>

        {/* Main content */}
        <div className="flex flex-col flex-1">
          {/* Navbar */}
          <div className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow">
            <h1 className="text-xl font-bold text-gray-800 dark:text-white">
              Admin Dashboard
            </h1>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded bg-gray-200 dark:bg-gray-700"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
              📊 Card 1
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
              📈 Card 2
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
              📁 Card 3
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
