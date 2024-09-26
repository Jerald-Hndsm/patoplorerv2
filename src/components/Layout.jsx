import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout = () => (
  <div className="flex flex-col h-screen bg-gray-100">
    <Header />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-8">
        <Outlet /> {/* This will render the matched nested routes */}
      </main>
    </div>
  </div>
);

export default Layout;
