import React, { useState } from "react";
import "../styles/Form.css";

function ComplaintForm({ onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    type: "",
    description: "",
    priority: "Medium"
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: "100%" }}>
      <h2 style={{ color: "#ff2e53", marginBottom: "20px", textAlign: "center" }}>
        Register New Complaint
      </h2>
      
      <select
        name="type"
        value={formData.type}
        onChange={handleChange}
        className="form-input"
        required
      >
        <option value="">Select Complaint Type</option>
        <option value="Plumbing">Plumbing</option>
        <option value="Electricity">Electricity</option>
        <option value="Cleanliness">Cleanliness</option>
        <option value="Food Quality">Food Quality</option>
        <option value="Internet">Internet</option>
        <option value="Security">Security</option>
        <option value="Other">Other</option>
      </select>

      <select
        name="priority"
        value={formData.priority}
        onChange={handleChange}
        className="form-input"
        required
      >
        <option value="Low">Low Priority</option>
        <option value="Medium">Medium Priority</option>
        <option value="High">High Priority</option>
        <option value="Urgent">Urgent</option>
      </select>

      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        className="form-input"
        placeholder="Describe your complaint in detail..."
        rows={4}
        required
      />

      <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
        <button
          type="submit"
          className="form-button"
          style={{ width: "50%" }}
        >
          Submit Complaint
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="form-button"
          style={{ 
            width: "50%", 
            background: "#666", 
            color: "#fff" 
          }}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default ComplaintForm;