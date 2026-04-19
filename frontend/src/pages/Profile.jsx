import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import barakLogo from "../assets/baraklogo.png";
import defaultUserImage from "../assets/default-user.png";
import "../styles/Profile.css";

function Profile() {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    username: "john_doe",
    email: "john@example.com",
    name: "John Doe",
    batch: "2021",
    room: "A-205",
    phone: "+91 98765 43210",
    linkedin: "https://linkedin.com/in/johndoe",
    photo: defaultUserImage
  });

  const [formData, setFormData] = useState(userData);

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    // TODO: Send updated data to API
    setUserData(formData);
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  const handleCancel = () => {
    setFormData(userData);
    setIsEditing(false);
  };

  return (
    <div className="profile-page">
      {/* Logo */}
      <div className="profile-logo" onClick={handleLogoClick}>
        <img src={barakLogo} alt="Barak Hostel Logo" />
      </div>

      <div className="profile-container">
        <div className="profile-header">
          <h1>User Profile</h1>
          <p>Manage your account information</p>
        </div>

        <div className="profile-content">
          <div className="profile-photo-section">
            <img src={userData.photo} alt="Profile" className="profile-photo-large" />
            <button className="change-photo-btn">Change Photo</button>
          </div>

          <div className="profile-form">
            <div className="form-row">
              <div className="form-group">
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="profile-input"
                />
              </div>
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="profile-input"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="profile-input"
                />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="profile-input"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Batch</label>
                <input
                  type="text"
                  name="batch"
                  value={formData.batch}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="profile-input"
                />
              </div>
              <div className="form-group">
                <label>Room Number</label>
                <input
                  type="text"
                  name="room"
                  value={formData.room}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="profile-input"
                />
              </div>
            </div>

            <div className="form-group">
              <label>LinkedIn Profile</label>
              <input
                type="url"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleInputChange}
                disabled={!isEditing}
                className="profile-input"
              />
            </div>

            <div className="profile-actions">
              {!isEditing ? (
                <button 
                  className="edit-btn"
                  onClick={() => setIsEditing(true)}
                >
                  Edit Profile
                </button>
              ) : (
                <div className="edit-actions">
                  <button className="save-btn" onClick={handleSave}>
                    Save Changes
                  </button>
                  <button className="cancel-btn" onClick={handleCancel}>
                    Cancel
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;