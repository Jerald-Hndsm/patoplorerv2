import { useState } from 'react';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSignOut = () => {
    localStorage.removeItem('isAuthenticated'); // Remove authentication
    window.location.reload(); // Reload to redirect to login page
  };

  return (
    <header className="flex justify-between items-center bg-white shadow p-4">
      <h1 className="text-xl font-bold">Dashboard</h1>
      <div className="relative">
        <button onClick={toggleDropdown} className="flex items-center focus:outline-none">
          <img
            src="https://via.placeholder.com/40" // Replace with your user icon image
            alt="User Icon"
            className="rounded-full"
          />
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 bg-white shadow-lg rounded mt-2">
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">User</li>
              <li
                onClick={handleSignOut}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                Sign out
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
