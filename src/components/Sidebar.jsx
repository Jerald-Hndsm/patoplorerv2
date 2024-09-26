import { Link } from 'react-router-dom';

const Sidebar = () => (
  <div className="w-64 h-800 bg-gray-800 text-white p-4">
    <ul>
      <li className="mb-4">
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li className="mb-4">
        <Link to="/forecasting">Forecasting</Link>
      </li>
      <li className="mb-4">
        <Link to="/egg-inventory">Inventory</Link>
      </li>
      <li className="mb-4">
        <Link to="/statistics">Statistics</Link>
      </li>

    </ul>
  </div>
);

export default Sidebar;