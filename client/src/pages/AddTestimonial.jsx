import React, { useState } from 'react';
import axios from 'axios';

const AddTestimonial = ({ onAddSuccess }) => {
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const backend = import.meta.env.VITE_BASE_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!author || !text || !image) {
      alert("Please fill in all fields and select an image.");
      return;
    }

    const formData = new FormData();
    formData.append('author', author);
    formData.append('text', text);
    formData.append('image', image);

    try {
      setLoading(true);
      await axios.post(`${backend}/api/testimonials`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      setAuthor('');
      setText('');
      setImage(null);
      onAddSuccess?.();
      alert("Testimonial added successfully!");
    } catch (err) {
      console.error("Failed to add testimonial:", err);
      alert("Failed to add testimonial.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white/10 p-6 rounded-lg space-y-4">
      <div>
        <label className="block text-white font-semibold mb-1">Name</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full px-4 py-2 rounded bg-white/20 text-white"
          required
        />
      </div>

      <div>
        <label className="block text-white font-semibold mb-1">Testimonial</label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full px-4 py-2 rounded bg-white/20 text-white"
          required
        />
      </div>

      <div>
        <label className="block text-white font-semibold mb-1">Upload Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className="text-white"
          required
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
      >
        {loading ? "Submitting..." : "Submit Testimonial"}
      </button>
    </form>
  );
};

export default AddTestimonial;
