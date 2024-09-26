import Sidebar from './Sidebar';
import Header from './Header';
import Forecasting from '../pages/Forecasting';

const Dashboard = () => (
  <div className="h-screen flex">
    {/* Fixed Sidebar */}
    <Sidebar className="fixed top-0 left-0 w-64 h-full bg-gray-800 text-white" />

    {/* Main content area next to sidebar */}
    <div className="flex-1 ml-64 h-full">
      {/* Fixed Header */}
      <Header className="fixed top-0 left-64 w-full bg-gray-200 z-10" />

      {/* Unscrollable main content */}
      <main className="pt-16 px-8 h-full">
        {/* Example content: Replace with your page components */}
        <Forecasting />
      </main>
    </div>
  </div>
);

export default Dashboard;

