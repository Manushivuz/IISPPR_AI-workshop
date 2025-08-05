import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddTestimonial from './AddTestimonial';


const ManageTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const backend = import.meta.env.VITE_BASE_URL;
  

  const fetchTestimonials = async () => {
    try {
      const res = await axios.get(`${backend}/api/testimonials`);
      setTestimonials(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("Error fetching testimonials:", err);
    }
  };

  const deleteTestimonial = async (id) => {
    if (!window.confirm("Are you sure you want to delete this testimonial?")) return;

    try {
      await axios.delete(`${backend}/api/testimonials/${id}`);
      setTestimonials(prev => prev.filter(t => t._id !== id));
    } catch (err) {
      console.error("Error deleting testimonial:", err);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-white">Manage Testimonials</h1>

      {testimonials.length === 0 ? (
        <p className="text-white/60">No testimonials available.</p>
      ) : (
        <ul className="space-y-4">
          {testimonials.map((t) => (
            <li key={t._id} className="bg-white/10 p-4 rounded-lg flex justify-between items-center">
              <div>
                <p className="text-white font-semibold">{t.author}</p>
                <p className="text-white/80 italic">{t.text}</p>
              </div>
              <button
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                onClick={() => deleteTestimonial(t._id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-8">
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
        >
          {showAddForm ? "Cancel" : "Add Testimonial"}
        </button>
      </div>

      {showAddForm && (
        <div className="mt-8">
          <AddTestimonial onAddSuccess={fetchTestimonials} />
        </div>
      )}
    </div>
  );
};

export default ManageTestimonials;
