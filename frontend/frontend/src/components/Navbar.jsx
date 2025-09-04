import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 text-white px-6 py-3 flex justify-between items-center shadow-md">
      <Link to="/" className="text-xl font-bold">
        ImageGallery
      </Link>

      <div className="space-x-4 flex items-center">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/all-pictures" className="hover:underline">
          All Pictures
        </Link>
        <Link to="/upload" className="hover:underline">
          Upload
        </Link>

        {user ? (
          <span className="ml-4 flex items-center">
            Welcome, <b className="mx-1">{user}</b>
            <button
              onClick={handleLogout}
              className="ml-2 bg-red-500 px-2 py-1 rounded"
            >
              Logout
            </button>
          </span>
        ) : (
          <Link to="/login" className="ml-4 bg-green-500 px-3 py-1 rounded">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
