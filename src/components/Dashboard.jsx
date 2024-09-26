import Sidebar from './Sidebar';
import Header from './Header';
import Forecasting from '../pages/Forecasting';

const Dashboard = () => (
  <div className="h-screen flex">
    {/* Fixed Sidebar */}
    <Sidebar className="fixed top-0 left-0 w-64 h-full bg-gray-800 text-white" />

    {/* Main content area next to sidebar */}
    <div className="flex-1 ml-64">
      {/* Fixed Header */}
      <Header className="fixed top-0 left-64 w-full bg-gray-200 z-10" />

      {/* Scrollable main content area */}
      <main className="pt-16 px-8 h-screen overflow-y-auto">
        <div className="h-full overflow-y-auto">
          <Forecasting />
        </div>
      </main>
    </div>
  </div>
);

export default Dashboard;
