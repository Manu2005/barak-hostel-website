import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Grid from "../components/Grid";
import Modal from "../components/Modal";
import ComplaintForm from "../components/ComplaintForm";
import barakLogo from "../assets/baraklogo.png";
import "../styles/Form.css";


const dummyComplaints = [
  { no: 1, type: "Plumbing", by: "John Doe", status: "Pending", priority: "High", handledBy: "Mr. Sharma", date: "2024-01-15" },
  { no: 2, type: "Electricity", by: "Jane Smith", status: "Resolved", priority: "Medium", handledBy: "Mr. Kumar", date: "2024-01-14" },
  { no: 3, type: "Cleanliness", by: "Amit Singh", status: "In Progress", priority: "Low", handledBy: "Ms. Roy", date: "2024-01-13" },
  { no: 4, type: "Food Quality", by: "Rahul Gupta", status: "Pending", priority: "Urgent", handledBy: "Mr. Verma", date: "2024-01-12" },
  { no: 5, type: "Internet", by: "Priya Sharma", status: "Resolved", priority: "Medium", handledBy: "Ms. Tech", date: "2024-01-11" },
  { no: 6, type: "Plumbing", by: "Vikash Kumar", status: "In Progress", priority: "High", handledBy: "Mr. Sharma", date: "2024-01-10" },
];

const columns = [
  { key: 'no', label: 'No.' },
  { key: 'type', label: 'Type' },
  { key: 'by', label: 'Complained By' },
  { key: 'priority', label: 'Priority', render: (value) => (
    <span style={{ 
      padding: '4px 8px', 
      borderRadius: '4px', 
      background: value === 'Urgent' ? '#f44336' : value === 'High' ? '#ff9800' : value === 'Medium' ? '#2196f3' : '#4caf50',
      color: '#fff',
      fontSize: '0.8rem'
    }}>
      {value}
    </span>
  )},
  { key: 'status', label: 'Status', render: (value) => (
    <span style={{ 
      padding: '4px 8px', 
      borderRadius: '4px', 
      background: value === 'Resolved' ? '#4caf50' : value === 'Pending' ? '#ff9800' : '#2196f3',
      color: '#fff',
      fontSize: '0.8rem'
    }}>
      {value}
    </span>
  )},
  { key: 'handledBy', label: 'Handled By' },
  { key: 'date', label: 'Date' }
];


function ComplainPortal() {
  const [complaints, setComplaints] = useState(dummyComplaints);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleRegisterClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleComplaintSubmit = (formData) => {
    // TODO: Send to API when available
    const newComplaint = {
        no: complaints.length + 1,
        type: formData.type,
        by: "Current User", // Replace with actual user
        status: "Pending",
        priority: formData.priority, // Add this line
        handledBy: "Unassigned",
        date: new Date().toISOString().split('T')[0]
    };

    setComplaints([newComplaint, ...complaints]);
    setIsModalOpen(false);
    alert("Complaint registered successfully!");
  };

  return (
    <div className="form-bg" style={{ padding: "20px" }}>
      {/* Logo */}
      <div 
        style={{ 
          position: "absolute", 
          top: "20px", 
          left: "20px", 
          cursor: "pointer",
          zIndex: 10
        }}
        onClick={handleLogoClick}
      >
        <img 
          src={barakLogo} 
          alt="Barak Hostel Logo" 
          style={{ 
            width: "80px", 
            height: "80px",
            transition: "transform 0.2s"
          }}
          onMouseEnter={(e) => e.target.style.transform = "scale(1.1)"}
          onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
        />
      </div>

      <div style={{ width: "95%", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 30 }}>
          <h2 style={{ margin: 0, color: "#ff2e53", fontSize: "2.5rem" }}>Live Complaints</h2>
          <button
            className="form-button"
            style={{ width: "auto", padding: "12px 24px", margin: 0 }}
            onClick={handleRegisterClick}
          >
            Register New Complaint
          </button>
        </div>
        
        <Grid 
          data={complaints} 
          columns={columns}
          onFilterChange={(filters) => console.log('Filters changed:', filters)}
        />

        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <ComplaintForm 
            onSubmit={handleComplaintSubmit}
            onCancel={handleCloseModal}
          />
        </Modal>
      </div>
    </div>
  );
}

export default ComplainPortal;