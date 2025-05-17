import { useState } from 'react'
import Navbar from './Navbar'

function Drawer({ showSidebar, children }) {
  return (
    <div className={`drawer ${showSidebar ? 'lg:drawer-open' : ''} overflow-hidden h-screen w-screen`}>
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content overflow-auto flex flex-col">
        <Navbar hasSidebar={showSidebar}/>
        {/*  Content */}
        {children}
      </div>
      {showSidebar && (
        <div className="drawer-side lg:hidden h-full z-40 lg:z-30">
            <div class="bg-base-300 navbar sticky top-0 z-20 hidden items-center gap-2 px-4 py-0 backdrop-blur flex-1 text-xl font-bold lg:flex "><h1>Telvy</h1></div>
          <label htmlFor="my-drawer" className="drawer-overlay" />
          {/* Sidebar Content */}
          <ul className="menu p-4 w-80 min-h-full bg-base-300 text-base-content">
            <li><a>Home</a></li>
            <li><a>Quizzes</a></li>
            <li><a>Groups</a></li>
            <li><a>Notifications</a></li>
            <li><a>Settings</a></li>
            <li><a>Help & Feedback</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Drawer