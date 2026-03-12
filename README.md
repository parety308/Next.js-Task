# 🎓 CourseHub – Course Management Platform

CourseHub is a modern web application built with **Next.js (App Router)** that allows users to explore courses, view course details, and manage courses through protected pages with authentication.

The platform provides a clean, responsive UI where students can browse courses and instructors can add or manage courses easily.

---

# 🚀 Live Demo

Live Site: https://your-vercel-link.vercel.app

---

# 📦 Technologies Used

- **Next.js (App Router)**
- **React**
- **NextAuth.js** (Authentication)
- **Tailwind CSS**
- **JavaScript**
- **Vercel** (Deployment)

---

# ✨ Features

### 🌐 Landing Page
The landing page contains **7 sections**:

1. **Navbar**
   - Logo
   - 4+ navigation routes
   - Login / Register buttons
   - Sticky and responsive
   - After login → user dropdown

2. **Hero Section**
   - Headline
   - Subtitle
   - Call‑to‑Action button

3. **Popular Courses Section**
   - Course cards
   - Image, title, short description, price

4. **Platform Features**
   - Cards explaining platform benefits
   - Hover effects and responsive grid

5. **Course Categories**
   - Different learning categories

6. **Student Testimonials**
   - User feedback cards

7. **Footer**
   - Navigation links
   - Social icons
   - Copyright information

---

# 🔐 Authentication

Authentication is implemented using **NextAuth.js**.

Users can login using:

- Google Authentication
- Email and Password

After successful login, the user is redirected to:

```
/
```

---

# 📚 Pages Overview

## 1️⃣ Home Page
```
/
```

Includes:

- Navbar
- Hero Banner
- Popular Courses
- Features
- Categories
- Testimonials
- Footer

---

## 2️⃣ Login Page
```
/login
```

Users can login using:

- Email and Password
- Google Login

---

## 3️⃣ Register Page
```
/register
```

Users can create an account by providing:

- Name
- Email
- Password

---

## 4️⃣ Courses Page
```
/courses
```

Displays a list of courses.

Features:

- Page title and description
- Search bar
- Course grid layout
- Minimum 6 course cards

Each course card contains:

- Image
- Title
- Short description
- Price
- Details button

---

## 5️⃣ Course Details Page
```
/courses/[id]
```

Displays detailed information about a course:

- Large course image
- Course title
- Full description
- Price
- Date
- Priority
- Back button

---

## 6️⃣ Add Course (Protected Page)
```
/add-course
```

Only accessible to **logged-in users**.

Form fields include:

- Title
- Short Description
- Full Description
- Price
- Date
- Priority
- Image URL

After submission:

- A success message appears
- Course is added to the system

---

## 7️⃣ Manage Courses (Protected Page)
```
/manage-courses
```

Displays all courses in a **table layout**.

Each course row contains:

- Course title
- Price
- Priority
- Date
- View button
- Delete button

---

# 📂 Project Folder Structure

```
app
 ├ page.jsx
 ├ login
 │   └ page.jsx
 ├ register
 │   └ page.jsx
 ├ courses
 │   ├ page.jsx
 │   └ [id]
 │       └ page.jsx
 ├ add-course
 │   └ page.jsx
 ├ manage-courses
 │   └ page.jsx

components
 ├ Navbar.jsx
 ├ Banner.jsx
 ├ Footer.jsx
 ├ CourseCard.jsx

public
 └ data.json
```

---

# 🛠️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/yourusername/coursehub.git
```

### 2️⃣ Navigate to the project folder

```bash
cd coursehub
```

### 3️⃣ Install dependencies

```bash
npm install
```

### 4️⃣ Run the development server

```bash
npm run dev
```

Now open:

```
http://localhost:3000
```

---

# 🎯 Project Goals

The goal of this project is to demonstrate:

- Next.js App Router architecture
- Authentication with NextAuth
- Protected routes
- Responsive UI design
- Consistent layout and components

---

# 📸 Screenshots

You can add screenshots of:

- Home Page
- Courses Page
- Course Details Page
- Add Course Page
- Manage Courses Page

---

# 👨‍💻 Author

**Sosmoy Sarkar**

CourseHub – Course Management Platform  
Built using **Next.js and Tailwind CSS**

---

# 📜 License

This project is created for educational purposes.
