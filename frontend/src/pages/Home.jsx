import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";
import barakLogo from "../assets/baraklogo.png";
import defaultUserImage from "../assets/default-user.png";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import TrophyModel from "../components/TrophyModel";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";

const trophies = [
  {
    modelPath: "/assets/golden_trophy.glb",
    caption: "General Champions '2019",
  },
  {
    modelPath: "/assets/golden_trophy.glb",
    caption: "General Champions '2018",
  },
  {
    modelPath: "/assets/golden_trophy.glb",
    caption: "General Champions '2017",
  },
  {
    modelPath: "/assets/golden_trophy.glb",
    caption: "General Champions '2016",
  },
];

const hmcMembers = {
  generalSecretary: {
    name: "Pragyan Srivastava",
    position: "General Secretary",
    contact: "+91 79-85166477",
    photo: null, // Will use defaultUserImage
  },
  secretaries: [
    {
      name: "Pragyan Srivastava",
      position: "Welfare Secretary",
      contact: "+91 79-85166477",
      photo: null,
    },
    {
      name: "Takshay Bansal",
      position: "Sports Secretary",
      contact: "+91 87662 96343",
      photo: null,
    },
    {
      name: "Raman Umare",
      position: "Cultural Secretary",
      contact: "+91 93706 74283",
      photo: null,
    },
    {
      name: "Avanish Gadikar",
      position: "Technical Secretary",
      contact: "+91 86050 16781",
      photo: null,
    },
    {
      name: "Vignesh Kondeti",
      position: "Service Secretary",
      contact: "+91 90141 99268",
      photo: null,
    },
    {
      name: "Vishesh Agarwal",
      position: "Maintenance Secretary",
      contact: "+91 74174 22778",
      photo: null,
    },
    {
      name: "Garv Roy Choudhary",
      position: "Literary Secretary",
      contact: "+91 98260 70016",
      photo: null,
    },
  ],
};

function Home() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const resetRotation = useRef(false);
  const controlsRef = useRef();
  const navigate = useNavigate();

  // Check if user is authenticated and get user data
  useEffect(() => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    setIsAuthenticated(!!token);

    // Mock user data - replace with actual API call
    if (token) {
      setUser({
        username: "john_doe",
        email: "john@example.com",
        name: "John Doe",
        batch: "2021",
        room: "A-205",
        photo: defaultUserImage,
      });
    }
  }, []);

  const handleLogout = () => {
    navigate("/logout");
  };

  const handleAuthClick = () => {
    if (isAuthenticated) {
      handleLogout();
    } else {
      navigate("/login");
    }
  };

  const handleProfileClick = () => {
    navigate("/profile");
  };

  const handleEnd = () => {
    if (controlsRef.current) controlsRef.current.reset();
    resetRotation.current = true;
  };

  const changeTrophy = (nextIdx) => {
    setFade(true);
    setTimeout(() => {
      setCurrent(nextIdx);
      setFade(false);
      resetRotation.current = true;
    }, 300);
  };

  const handlePrev = () => {
    const nextIdx = current === 0 ? trophies.length - 1 : current - 1;
    changeTrophy(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = current === trophies.length - 1 ? 0 : current + 1;
    changeTrophy(nextIdx);
  };

  return (
    <div className="homepage">
      <header className="homepage-header">
        <div className="homepage-logo">
          <img src={barakLogo} alt="Barak Hostel Logo" />
        </div>
        <nav className="homepage-nav">
          <button onClick={() => navigate("/boarders")}>
            Boarders and Alums
          </button>
          <button onClick={() => navigate("/complain-portal")}>
            Complaint Portal
          </button>
          <button onClick={handleAuthClick}>
            {isAuthenticated ? "Logout" : "Login/Sign up"}
          </button>
          {isAuthenticated && user && (
            <div className="user-profile" onClick={handleProfileClick}>
              <img src={user.photo} alt="Profile" className="profile-photo" />
              <span className="profile-name">{user.name}</span>
            </div>
          )}
        </nav>
      </header>
      <section className="homepage-hero">
        <div className="homepage-hero-left">
          <h1>Barak Hostel</h1>
          <p>
            Welcome to the all utility
            <br />
            website of Barak hostel
          </p>
        </div>
        <div className="homepage-hero-right">
          <div
            className={`trophy-bg fade-transition${fade ? " fade-out" : ""}`}
            style={{ width: 600, height: 700, position: "relative" }}
          >
            <button
              className="arrow left"
              style={{ position: "absolute", left: 10, top: "50%", zIndex: 2 }}
              onClick={handlePrev}
              disabled={fade}
            >
              {"<"}
            </button>
            <Canvas camera={{ position: [0, 0, 8] }}>
              <ambientLight intensity={2} />
              <directionalLight position={[5, 5, 5]} intensity={5} />
              <directionalLight position={[-5, 5, 5]} intensity={4} />
              <pointLight position={[0, 0, 8]} intensity={10} />
              <TrophyModel
                modelPath={trophies[current].modelPath}
                resetRotation={resetRotation}
              />
              <OrbitControls
                ref={controlsRef}
                enableZoom={false}
                enablePan={false}
                enableDamping={false}
                onEnd={handleEnd}
              />
            </Canvas>
            <button
              className="arrow right"
              style={{ position: "absolute", right: 10, top: "50%", zIndex: 2 }}
              onClick={handleNext}
              disabled={fade}
            >
              {">"}
            </button>
          </div>
          <div className="trophy-caption">{trophies[current].caption}</div>
        </div>
      </section>

      {/* Meet the HMC Section */}
      <section className="hmc-section">
        <div className="hmc-container">
          <h2 className="hmc-title">Meet the HMC 2024-25</h2>

          {/* General Secretary - Featured */}
          <div className="hmc-general-secretary">
            <div className="hmc-card featured">
              <div className="hmc-photo">
                <img
                  src={hmcMembers.generalSecretary.photo || defaultUserImage}
                  alt={hmcMembers.generalSecretary.name}
                />
                <div className="hmc-badge">
                  {hmcMembers.generalSecretary.position}
                </div>
              </div>
              <div className="hmc-info">
                <h3 className="hmc-name">{hmcMembers.generalSecretary.name}</h3>
                <div className="hmc-details">
                  <div className="hmc-detail-item">
                    <span className="hmc-label">Contact:</span>
                    <span className="hmc-value">
                      {hmcMembers.generalSecretary.contact}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Other Secretaries */}
          <div className="hmc-grid">
            {hmcMembers.secretaries.map((secretary, index) => (
              <div key={index} className="hmc-card">
                <div className="hmc-photo">
                  <img
                    src={secretary.photo || defaultUserImage}
                    alt={secretary.name}
                  />
                  <div className="hmc-badge">{secretary.position}</div>
                </div>
                <div className="hmc-info">
                  <h3 className="hmc-name">{secretary.name}</h3>
                  <div className="hmc-details">
                    <div className="hmc-detail-item">
                      <span className="hmc-label">Contact:</span>
                      <span className="hmc-value">{secretary.contact}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
