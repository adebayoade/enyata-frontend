import Sidebar from '@/pages/dashboard/sidebar';
import Topbar from '@/pages/dashboard/topbar';
import { Outlet } from 'react-router-dom';

export default function DashboardLayout() {
  return (
    <div className="dashboard">
      <div className={`grid h-full grid-cols-1 xl:grid-cols-[272px_1fr]`}>
        <Sidebar />

        <div className="h-screen pb-10 overflow-y-auto">
          <Topbar />
          <Outlet />
        </div>
      </div>
    </div>
  );
}
