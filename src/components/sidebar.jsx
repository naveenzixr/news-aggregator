import { useState } from 'react';


function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="app">
      <button className="toggle-btn" onClick={toggleSidebar}>
        ☰ Menu
      </button>

      <div className="container">
        {showSidebar && (
          <aside className="sidebar">
            <h2>Sidebar</h2>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Settings</a></li>
            </ul>
          </aside>
        )}

        <main className="content">
          <h1>Home Page</h1>
          <p>This is the main content.</p>
        </main>
      </div>
    </div>
  );
}

export default Sidebar;
