import { useEffect, useState } from "react";

function AllPictures() {
  const [pictures, setPictures] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all pictures
  useEffect(() => {
    fetchPictures();
  }, []);

  const fetchPictures = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/pictures/list/");
      if (!res.ok) throw new Error("Failed to fetch pictures");
      const data = await res.json();
      setPictures(data);
    } catch (err) {
      console.error("Error fetching pictures:", err);
    } finally {
      setLoading(false);
    }
  };

  // Delete a picture
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this picture?"
    );
    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("access"); // use correct key
      if (!token) {
        alert("You must be logged in to delete!");
        return;
      }

      const res = await fetch(
        `http://127.0.0.1:8000/api/pictures/delete/${id}/`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.ok) {
        alert("Picture deleted successfully!");
        setPictures(pictures.filter((pic) => pic.id !== id));
      } else if (res.status === 403) {
        alert("You can only delete your own pictures!");
      } else if (res.status === 401) {
        alert("Unauthorized! Please log in.");
      } else {
        const text = await res.text();
        console.error("Delete failed response:", text);
        alert("Delete failed. Check console for details.");
      }
    } catch (error) {
      console.error("Error deleting picture:", error);
      alert("An error occurred while deleting.");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl">Loading pictures...</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">All Pictures</h1>

      {pictures.length === 0 ? (
        <p>No pictures uploaded yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {pictures.map((pic) => {
            const imageUrl = pic.image.startsWith("http")
              ? pic.image
              : `http://127.0.0.1:8000/${pic.image.replace(/^\/+/, "")}`;

            return (
              <div
                key={pic.id}
                className="border rounded-lg p-2 shadow hover:shadow-lg transition relative bg-white"
              >
                <img
                  src={imageUrl}
                  alt={pic.title || "uploaded"}
                  className="w-full h-48 object-contain rounded mb-2 bg-gray-100 transition-transform duration-300 ease-in-out transform hover:scale-105"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/300x300?text=Image+Not+Found";
                  }}
                />
                <p className="text-center font-medium mb-2">
                  {pic.title || "Untitled"}
                </p>
                <button
                  onClick={() => handleDelete(pic.id)}
                  className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 text-sm rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default AllPictures;
