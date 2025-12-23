# 📝 MERN Stack Authentication & Role-Based Dashboard

A backend-focused MERN Stack mini project built to demonstrate Authentication, JWT, Role-Based Access Control, and CRUD operations using MongoDB, Express, React, and Node.js.

This project was created as part of a MERN Stack Intern Assignment.
UI is intentionally kept simple, with focus on backend correctness and security.

---

## 🎯 Features

### 🔐 Authentication

- User Signup & Login using Email & Password
- Passwords hashed using bcrypt
- Authentication handled via JWT (JSON Web Token)

### 👥 Role-Based Access

Two user roles:

- Admin
- Student

Access is controlled at the API level using middleware.

---

## 📊 Dashboards

### 👨‍💼 Admin Dashboard

- View all students
- Add new students
- Edit student records
- Delete students

### 🎓 Student Dashboard

- View own profile only
- Update own profile (Name, Course)

---

## 🧱 Student Entity

Each student contains:

- Name
- Email
- Course (e.g., MERN Bootcamp)
- Enrollment Date

---

## 🛠 Tech Stack (Pure MERN)

Frontend:

- React (Vite)
- Axios
- React Router DOM

Backend:

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt

---

## 📂 Project Structure

Backend
backend/
├── controllers/
├── middleware/
├── models/
├── routes/
├── config/
├── server.js
└── .env

Frontend
frontend/
├── src/
│ ├── api/
│ ├── context/
│ ├── routes/
│ ├── pages/
│ ├── App.jsx
│ └── main.jsx

---

## ⚙️ Environment Variables

Create a .env file inside the backend folder:

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/mernAuth
JWT_SECRET=your_secret_key

---

## 🚀 Installation & Setup

1. Clone Repository
   git clone <your-github-repo-url>
   cd mern-auth-role-dashboard

2. Backend Setup
   cd backend
   npm install
   npm run dev

Backend runs on http://localhost:5000

3. Frontend Setup
   cd frontend
   npm install
   npm run dev

Frontend runs on http://localhost:5173

---

## 🔐 API Routes Overview

Auth Routes
POST /api/auth/signup – Register user
POST /api/auth/login – Login user

Student Routes
GET /api/students – Admin
POST /api/students – Admin
PUT /api/students/:id – Admin
DELETE /api/students/:id – Admin
GET /api/students/me/profile – Student
PUT /api/students/me/profile – Student

---

## 🛡️ Security

- Password hashing using bcrypt
- JWT-based authentication
- Protected routes using middleware
- Role-based authorization (Admin vs Student)

---

## ⚡ Bonus Implemented

- Logout functionality
- Protected frontend routes
- Centralized Axios with token interceptor

---

## 🧪 Testing

- APIs tested using Postman
- JWT token passed via Authorization: Bearer <token>

---

## 🙌 Author

Laxman
MERN Stack Developer

---

## 📎 Submission Ready

This project fulfills all requirements of the MERN Stack Intern Assignment.
