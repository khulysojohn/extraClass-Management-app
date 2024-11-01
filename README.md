# Extra Class Management App

The **Extra Class Management App** is a full-stack MERN (MongoDB, Express.js, React, Node.js) application designed to streamline the management of extra classes for students and tutors. The app provides dedicated dashboards for both students and tutors, offering features such as assignment submission, attendance tracking, and progress monitoring.

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

## Features

### Student Dashboard
- **Course Registration:** Allows students to enroll in three available subjects (e.g., Math, Science, and History).
- **Assignment Submission:** Students can view and submit assignments for each subject.
- **Progress Tracking:** Students can monitor their assignment status and track their completion progress.

### Tutor Dashboard
- **Attendance Management:** Tutors can mark and review attendance records for each student.
- **Assignment Review:** Tutors can view and provide feedback on assignments submitted by students.
- **Student Support:** Features to help tutors communicate and offer support to students, including announcements and resources.

### Authentication and Security
- **User Authentication:** Secure registration and login with JSON Web Tokens (JWT) for role-based access.
- **Role-based Access Control:** Different dashboards and permissions based on the user role (student or tutor).

## Technology Stack

- **Frontend:** React, React Router, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JSON Web Tokens (JWT)

## Installation

1. **Clone the Repository**

    ```bash
    git clone https://github.com/your-username/extra-class-management-app.git
    cd extra-class-management-app
    ```

2. **Install Server Dependencies**

    ```bash
    cd server
    npm install
    ```

3. **Install Client Dependencies**

    ```bash
    cd ../client
    npm install
    ```

4. **Set Up Environment Variables**
   
   In the `/server` folder, create a `.env` file with the following keys:
   
   ```plaintext
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret


