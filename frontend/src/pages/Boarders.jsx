import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import barakLogo from "../assets/baraklogo.png";
import "../styles/Boarders.css";
import defaultUserImage from "../assets/profileicon.jpg";

const studentsData = [
  {
    id: 1,
    name: "Rahul Sharma",
    batch: "2019",
    contact: "+91 98765 43210",
    linkedin: "https://linkedin.com/in/rahulsharma",
    photo: defaultUserImage,
    status: "Alumni"
  },
  {
    id: 2,
    name: "Priya Singh",
    batch: "2020",
    contact: "+91 87654 32109",
    linkedin: "https://linkedin.com/in/priyasingh",
    photo: defaultUserImage,
    status: "Alumni"
  },
  {
    id: 3,
    name: "Amit Kumar",
    batch: "2021",
    contact: "+91 76543 21098",
    linkedin: "https://linkedin.com/in/amitkumar",
    photo: defaultUserImage,
    status: "Current"
  },
  {
    id: 4,
    name: "Sneha Patel",
    batch: "2022",
    contact: "+91 65432 10987",
    linkedin: "https://linkedin.com/in/snehapatel",
    photo: defaultUserImage,
    status: "Current"
  },
  {
    id: 5,
    name: "Vikash Gupta",
    batch: "2019",
    contact: "+91 54321 09876",
    linkedin: "https://linkedin.com/in/vikashgupta",
    photo: defaultUserImage,
    status: "Alumni"
  },
  {
    id: 6,
    name: "Anjali Verma",
    batch: "2023",
    contact: "+91 43210 98765",
    linkedin: "https://linkedin.com/in/anjaliverma",
    photo: defaultUserImage,
    status: "Current"
  },
  {
    id: 7,
    name: "Rohit Jain",
    batch: "2018",
    contact: "+91 32109 87654",
    linkedin: "https://linkedin.com/in/rohitjain",
    photo: defaultUserImage,
    status: "Alumni"
  },
  {
    id: 8,
    name: "Kavya Reddy",
    batch: "2021",
    contact: "+91 21098 76543",
    linkedin: "https://linkedin.com/in/kavyareddy",
    photo: defaultUserImage,
    status: "Current"
  }
];

function Boarders() {
  const [students] = useState(studentsData);
  const [selectedBatch, setSelectedBatch] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  // Get unique batches for filter dropdown
  const uniqueBatches = [...new Set(students.map(student => student.batch))].sort();

  // Filter students based on selected filters
  const filteredStudents = students.filter(student => {
    const batchMatch = selectedBatch === "All" || student.batch === selectedBatch;
    const statusMatch = selectedStatus === "All" || student.status === selectedStatus;
    return batchMatch && statusMatch;
  });

  return (
    <div className="boarders-page">
      {/* Logo */}
      <div className="boarders-logo" onClick={handleLogoClick}>
        <img src={barakLogo} alt="Barak Hostel Logo" />
      </div>

      <div className="boarders-container">
        {/* Header */}
        <div className="boarders-header">
          <h1>Boarders & Alumni</h1>
          <p>Meet our current boarders and distinguished alumni</p>
        </div>

        {/* Filters */}
        <div className="boarders-filters">
          <div className="filter-group">
            <label>Filter by Batch:</label>
            <select 
              value={selectedBatch} 
              onChange={(e) => setSelectedBatch(e.target.value)}
              className="filter-select"
            >
              <option value="All">All Batches</option>
              {uniqueBatches.map(batch => (
                <option key={batch} value={batch}>Batch {batch}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label>Filter by Status:</label>
            <select 
              value={selectedStatus} 
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="filter-select"
            >
              <option value="All">All Students</option>
              <option value="Current">Current Boarders</option>
              <option value="Alumni">Alumni</option>
            </select>
          </div>

          <div className="results-count">
            Showing {filteredStudents.length} students
          </div>
        </div>

        {/* Students Grid */}
        <div className="students-grid">
          {filteredStudents.map(student => (
            <div key={student.id} className="student-card">
              <div className="student-photo">
                <img src={student.photo} alt={student.name} />
                <div className={`status-badge ${student.status.toLowerCase()}`}>
                  {student.status}
                </div>
              </div>
              <div className="student-info">
                <h3 className="student-name">{student.name}</h3>
                <div className="student-details">
                  <div className="detail-item">
                    <span className="detail-label">Batch:</span>
                    <span className="detail-value">{student.batch}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Contact:</span>
                    <span className="detail-value">{student.contact}</span>
                  </div>
                  <div className="student-links">
                    <a 
                      href={student.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="linkedin-link"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredStudents.length === 0 && (
          <div className="no-results">
            <p>No students found for the selected filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Boarders;