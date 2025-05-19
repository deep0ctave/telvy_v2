import React from "react";
import { Link } from "react-router-dom";

const settingsOptions = [
  { title: "Account Settings", description: "Manage your name, email, and password.", path: "/settings/account" },
  { title: "Notification Settings", description: "Set how and when you want to be notified.", path: "/settings/notifications" },
  { title: "Privacy Settings", description: "Control your visibility and data sharing preferences.", path: "/settings/privacy" },
];

const SettingsPage = () => {
  return (
    <div className="flex-1">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary text-primary-content px-10 py-12">
        <h1 className="text-5xl font-extrabold">Settings</h1>
        <p className="mt-4 max-w-2xl text-base opacity-90">
          Manage your account, privacy, and notification preferences.
        </p>
      </div>

      {/* Submenus */}
      <div className="p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {settingsOptions.map((option, index) => (
          <Link
            key={index}
            to={option.path}
            className="card bg-base-200 hover:bg-base-300 transition-shadow border border-base-300 rounded-box shadow"
          >
            <div className="card-body">
              <h2 className="card-title">{option.title}</h2>
              <p className="text-sm opacity-80">{option.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SettingsPage;
