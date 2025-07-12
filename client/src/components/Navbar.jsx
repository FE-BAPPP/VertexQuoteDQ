import { Link } from 'react-router-dom';
import { Home, FileText, History, User, LogOut } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <span className="text-xl font-bold text-blue-600 dark:text-blue-400">VertexQuoteDQ</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/" className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white">
                <Home className="mr-1 h-4 w-4" />
                Dashboard
              </Link>
              <Link to="/create-quotation" className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white">
                <FileText className="mr-1 h-4 w-4" />
                Tạo báo giá
              </Link>
              <Link to="/history" className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white">
                <History className="mr-1 h-4 w-4" />
                Lịch sử
              </Link>
              <Link to="/profile" className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white">
                <User className="mr-1 h-4 w-4" />
                Hồ sơ
              </Link>
              <button className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300">
                <LogOut className="mr-1 h-4 w-4" />
                Đăng xuất
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
