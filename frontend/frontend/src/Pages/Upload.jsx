import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Upload() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  let token = localStorage.getItem("access");
  const refresh = localStorage.getItem("refresh");
  const user = localStorage.getItem("user");

  // Agar login nahi hai toh sidha login page bhej do
  useEffect(() => {
    if (!token || !user) {
      navigate("/login");
    }
  }, [token, user, navigate]);

  const handleUpload = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/pictures/create/",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (res.status === 201) {
        setMessage("✅ Picture uploaded successfully!");
        setTitle("");
        setImage(null);
      }
    } catch (err) {
      // 🔑 Agar token expire ho gaya
      if (err.response?.data?.code === "token_not_valid" && refresh) {
        try {
          const refreshRes = await axios.post(
            "http://127.0.0.1:8000/api/auth/token/refresh/",
            { refresh }
          );

          // ✅ naya access token save karo
          localStorage.setItem("access", refreshRes.data.access);
          token = refreshRes.data.access;

          // retry upload
          const retryRes = await axios.post(
            "http://127.0.0.1:8000/api/pictures/create/",
            formData,
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
              },
            }
          );

          if (retryRes.status === 201) {
            setMessage("✅ Picture uploaded successfully!");
            setTitle("");
            setImage(null);
            return;
          }
        } catch (refreshErr) {
          console.error("Refresh token expired:", refreshErr);
          setMessage("⚠️ Session expired, please login again.");
          navigate("/login");
        }
      } else {
        console.error("Upload error:", err.response?.data || err.message);
        setMessage("❌ Upload failed. Please try again.");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleUpload}
        className="bg-white p-6 rounded shadow-md w-96 space-y-4"
      >
        <h2 className="text-2xl font-bold">Upload Picture</h2>

        {message && <p className="text-center text-red-600">{message}</p>}

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="w-full p-2 border rounded"
          accept="image/*"
          required
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
          Upload
        </button>
      </form>
    </div>
  );
}

export default Upload;
