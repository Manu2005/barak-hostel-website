import Form from "../components/Form"
import barakLogo from "../assets/baraklogo.png"

function Login() {
    return (
        <div>
            {/* Logo */}
            <div 
                style={{ 
                    position: "absolute", 
                    top: "20px", 
                    left: "20px", 
                    cursor: "pointer",
                    zIndex: 0
                }}
                onClick={() => window.location.href = "/"}
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
            <Form route="/api/token/" method="login" />
        </div>
    )
}

export default Login