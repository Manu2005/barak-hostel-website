# Hostel Management Website

A full-stack web application for hostel management with features for boarders, alumni, complaints, and hostel management committee information.

## 🚀 Tech Stack

### Frontend
- **React** - UI Framework
- **React Router** - Client-side routing
- **Three.js** (@react-three/fiber, @react-three/drei) - 3D trophy carousel
- **Axios** - HTTP client
- **Vite** - Build tool and dev server

### Backend
- **Django** - Web framework
- **Django REST Framework** - API development
- **SQLite** - Database
- **JWT** - Authentication (djangorestframework-simplejwt)
- **CORS Headers** - Cross-origin resource sharing

## 📋 Prerequisites

Before running this project locally, ensure you have the following installed:

- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **Python** (v3.8 or higher) - [Download](https://www.python.org/)
- **pip** - Python package manager (comes with Python)
- **Git** - Version control

## 🛠️ Local Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Barakitess/Hostel-Website.git
cd Hostel-Website
```

### 2. Backend Setup (Django)

#### Step 2.1: Create Virtual Environment

**On Windows:**
```bash
cd backend
python -m venv env
env\Scripts\activate
```

**On macOS/Linux:**
```bash
cd backend
python3 -m venv env
source env/bin/activate
```

#### Step 2.2: Install Python Dependencies

```bash
pip install -r requirements.txt
```

#### Step 2.3: Run Database Migrations

```bash
python manage.py migrate
```

#### Step 2.4: Create Superuser (Optional)

```bash
python manage.py createsuperuser
```
Follow the prompts to create an admin account.

#### Step 2.5: Start Django Development Server

```bash
python manage.py runserver
```

The backend will be running at `http://localhost:8000`

### 3. Frontend Setup (React)

Open a **new terminal** window/tab and navigate to the frontend directory:

```bash
cd frontend
```

#### Step 3.1: Install Node Dependencies

```bash
npm install
```

#### Step 3.2: Start Vite Development Server

```bash
npm run dev
```

The frontend will be running at `http://localhost:5173`

### 4. Access the Application

Open your browser and navigate to:
- **Frontend:** `http://localhost:5173`
- **Backend Admin:** `http://localhost:8000/admin`

## 📁 Project Structure

```
Hostel-Website/
├── backend/
│   ├── backend/           # Django project settings
│   ├── myapp/             # Main Django app
│   │   ├── models.py      # Database models
│   │   ├── views.py       # API views
│   │   ├── serializers.py # DRF serializers
│   │   └── urls.py        # API routes
│   ├── manage.py          # Django management script
│   └── requirements.txt   # Python dependencies
│
├── frontend/
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/         # Page components
│   │   ├── styles/        # CSS files
│   │   ├── api.js         # API configuration
│   │   └── App.jsx        # Main app component
│   ├── public/            # Static assets
│   ├── package.json       # Node dependencies
│   └── vite.config.js     # Vite configuration
│
└── README.md              # This file
```

## ✨ Features

### 🏠 Home Page
- **Interactive 3D Trophy Carousel** - Animated golden trophies using Three.js showcasing hostel achievements
- **Dynamic Navigation** - Smooth navigation to different sections
- **Meet the HMC 2024-25** - Hostel Management Committee member profiles with contact information

<img width="1728" height="993" alt="Screenshot 2025-10-10 at 1 59 09 AM" src="https://github.com/user-attachments/assets/df72cc40-c514-4f7a-9757-669d011f4e66" />


---

### 👤 User Authentication

#### Registration
- New user registration with username and password
- Form validation and error handling
- Automatic redirect to login after successful registration

<img width="3456" height="1984" alt="image" src="https://github.com/user-attachments/assets/b53f301b-a9a7-4fe8-a84e-12ed2ca1ce1a" />


#### Login
- Secure JWT-based authentication
- Session persistence with token storage
- Protected routes for authenticated users

<img width="1728" height="992" alt="Screenshot 2025-10-10 at 1 56 57 AM" src="https://github.com/user-attachments/assets/ce296a7c-7e03-4c7e-98b1-055612de7372" />

---

### 🎓 Boarders Section
- View all current hostel boarders
- Grid layout with user profiles
- Search and filter functionality
- Profile photos and information display

<img width="1728" height="995" alt="Screenshot 2025-10-15 at 7 28 13 AM" src="https://github.com/user-attachments/assets/69eba51f-9810-4f77-b182-f95649c91de8" />

---

### 🎖️ Alumni Section
- Dedicated section for hostel alumni
- Alumni profiles with photos
- Grid-based responsive layout
- Easy navigation and browsing


---

### 📝 Complaint Portal
- **Submit Complaints** - Easy-to-use complaint submission form
- **View Complaints** - List of all submitted complaints
- **User-specific Complaints** - Only authenticated users can submit
- **Timestamps** - Track when complaints were submitted
- **Author Tracking** - Complaints linked to user accounts

<img width="1728" height="992" alt="Screenshot 2025-10-15 at 4 12 35 AM" src="https://github.com/user-attachments/assets/35eaf3f9-7322-43f9-b79f-04adfbb5d595" />

---

### 👤 User Profile
- **Profile Information Display**
  - Username
  - Profile photo
  - User details
- **Photo Upload** - Change profile photo functionality
- **Centered Layout** - Clean and organized profile view

<img width="1728" height="993" alt="Screenshot 2025-10-15 at 8 21 45 AM" src="https://github.com/user-attachments/assets/86ccb4a1-fe5e-47f3-b37f-5a1f72621aa1" />

---

### 🏆 Meet the HMC 2024-25

**General Secretary** (Featured prominently):
- Name and position
- Contact number
- Profile photo
- Larger card design

**Other Secretaries**:
1. **Cultural Secretary** - Organizing cultural events
2. **Sports Secretary** - Managing sports activities
3. **Mess Secretary** - Handling mess operations
4. **Maintenance Secretary** - Facility maintenance
5. **Academic Secretary** - Academic support
6. **Technical Secretary** - Technical infrastructure
7. **Welfare Secretary** - Student welfare

<img width="3456" height="1986" alt="image" src="https://github.com/user-attachments/assets/edea2d50-75fa-481e-b94e-b6adf3dc0eec" />

---

### 🌐 Footer
- **Creator Credits** - Website development team acknowledgment
- **Social Media Links**:
  - Instagram - Hostel's official Instagram page
  - YouTube - Hostel's YouTube channel
- **Quick Links**:
  - Home
  - Boarders
  - Alumni
  - Complaints
- **Responsive Design** - Works on all screen sizes
- **Gradient Theme** - Matches overall website aesthetics

<img width="3456" height="806" alt="image" src="https://github.com/user-attachments/assets/37dc4571-9abe-4b0a-97ec-4fce053206c6" />

---

## 🔒 Authentication & Security

- **JWT Tokens** - Secure token-based authentication
- **Protected Routes** - Restricted access to authenticated features
- **Token Refresh** - Automatic token renewal
- **CORS Configuration** - Secure cross-origin requests
- **Password Hashing** - Secure password storage

## 🎨 Design Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Modern UI** - Clean and intuitive interface
- **Gradient Themes** - Attractive color schemes throughout
- **Smooth Animations** - Enhanced user experience with subtle animations
- **Grid Layouts** - Organized content presentation
- **Consistent Styling** - Unified design language across all pages

## 🔧 Configuration Files

### Backend Configuration
- `backend/backend/settings.py` - Django settings
- `backend/requirements.txt` - Python dependencies

### Frontend Configuration
- `frontend/vite.config.js` - Vite build configuration
- `frontend/package.json` - Node dependencies and scripts
- `frontend/src/api.js` - API base URL configuration

## 📝 API Endpoints

### Authentication
- `POST /api/user/register/` - User registration
- `POST /api/token/` - Login and get JWT token
- `POST /api/token/refresh/` - Refresh JWT token

### Complaints
- `GET /api/complains/` - Get all complaints
- `POST /api/complains/` - Create new complaint
- `DELETE /api/complains/delete/<id>/` - Delete complaint

## 🐛 Troubleshooting

### Backend Issues

**Problem:** `ModuleNotFoundError: No module named 'django'`
**Solution:** Make sure you've activated the virtual environment and installed requirements:
```bash
source env/bin/activate  # or env\Scripts\activate on Windows
pip install -r requirements.txt
```

**Problem:** `django.db.utils.OperationalError: no such table`
**Solution:** Run migrations:
```bash
python manage.py migrate
```

### Frontend Issues

**Problem:** `Cannot find module` errors
**Solution:** Install dependencies:
```bash
npm install
```

**Problem:** API connection errors
**Solution:** Ensure backend is running on `http://localhost:8000`

## 🚀 Deployment

### Backend Deployment (Django)
1. Set `DEBUG = False` in settings.py
2. Configure allowed hosts
3. Set up production database (PostgreSQL recommended)
4. Collect static files: `python manage.py collectstatic`
5. Deploy to platform (Heroku, Railway, AWS, etc.)

### Frontend Deployment (React)
1. Update API base URL in `src/api.js` to production backend URL
2. Build for production: `npm run build`
3. Deploy `dist` folder to hosting service (Vercel, Netlify, etc.)

## 👥 Credits

**Development Team:**
- Ritwij
- Naman
- Yuvraj
- Nikhil
- Rajat
- Raunak
- Mayank
- Ishan
- Pushpak
- Kanan

## 📄 License

This project is developed for hostel management purposes.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

For any queries or support, please contact the HMC team.

---

**Made with ❤️ by the Hostel Development Team**
