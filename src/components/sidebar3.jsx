import { Menu, X } from "lucide-react"; // Optional: icon library
import { useState } from "react";


export default function Sidebar3() {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`bg-gray-900 text-white h-screen transition-all duration-300 ease-in-out
         ${open ? 'w-64' : 'w-16'} overflow-hidden`}
      >
        <div className="p-4 flex items-center justify-between">
          <h1 className="text-lg font-bold">{open ? 'ChatGPT' : '🤖'}</h1>
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        <ul className="space-y-4 mt-10 px-4">
          <li className="hover:text-green-400 cursor-pointer">New Chat</li>
          <li className="hover:text-green-400 cursor-pointer">History</li>
          <li className="hover:text-green-400 cursor-pointer">Settings</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold">Main Content</h1>
        <p>This is the main chat area.</p>
      </div>
    </div>
  );
}
