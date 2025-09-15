import { Link } from "@tanstack/react-router";
import UserDropdown from "./UserDropdown";
const Header = () => {
  const isActive = "text-blue-600";
  return (
    <div>
      <div className="bg-white shadow-md">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 ">
          <div className="flex items-center">
            <Link className="text-xl font-semibold text-gray-600" to="/">
              Budgetly
            </Link>
          </div>
          <nav className="flex space-x-15">
            <Link
              to="/"
              activeProps={{
                className: isActive,
              }}
            >
              Home
            </Link>
            <Link
              to="/dashboard"
              activeProps={{
                className: isActive,
              }}
            >
              Dashboard
            </Link>
            <Link
              to="/analytics"
              activeProps={{
                className: isActive,
              }}
            >
              Analytics
            </Link>
            <UserDropdown />
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
