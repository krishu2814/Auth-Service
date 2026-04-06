# 🔐 Auth Service (User Authentication Microservice)

A secure and scalable **Authentication Service** built using **Node.js, Express, and MongoDB**, designed as part of a **microservices-based architecture**.

This service handles **user authentication, authorization, and user management**, including signup, login, and user CRUD operations.

---

## 🚀 Features

* 🔐 User Signup (Registration)
* 🔑 User Login (Authentication) -> Using JWT Token
* 👤 Get User by ID
* 📧 Get User by Email
* ✏️ Update User Details
* ❌ Delete User
* 🔒 Password Storage (hashed - assumed) -> Using Bcrypt
* 🧩 Designed for Microservices Integration

---

## 🏗️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose ODM)
* **Authentication:** JWT (assumed in controller)
* **Architecture:** Microservices
* **Version Control:** Git & GitHub

---

## 📂 Project Structure

```id="k92xsl"
auth-service/
│
├── src/
│   ├── controllers/
│   │   └── user-controller.js
│   ├── routes/
│   │   └── v1/
│   │       └── user-routes.js
│   ├── models/
│   │   └── user-model.js
│   ├── services/
│   ├── repository/
│   └── config/
│
├── package.json
├── .env
└── README.md
```

---

## ⚙️ API Endpoints

### 🔐 Authentication APIs

| Method | Endpoint  | Description         |
| ------ | --------- | ------------------- |
| POST   | `/signup` | Register a new user |
| POST   | `/login`  | Authenticate user   |

---

### 👤 User APIs

| Method | Endpoint             | Description       |
| ------ | -------------------- | ----------------- |
| GET    | `/user/:id`          | Get user by ID    |
| GET    | `/user/email/:email` | Get user by email |
| PATCH  | `/user/:id`          | Update user       |
| DELETE | `/user/:id`          | Delete user       |

---

## 🧠 Data Model

```js id="x92lsl"
{
  userName: String,
  email: String,     // unique
  password: String   // hashed password
}
```

---

## 🔐 Authentication Flow

1. User signs up → credentials stored in DB
2. User logs in → credentials verified
3. JWT token generated (in controller)
4. Token used to access protected services

---

## 🛠️ Installation & Setup

### 1️⃣ Clone Repository

```bash id="p92kls"
git clone https://github.com/your-username/auth-service.git
cd auth-service
```

### 2️⃣ Install Dependencies

```bash id="l82kls"
npm install
```

### 3️⃣ Environment Variables

Create `.env` file:

```id="m92ksl"
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

### 4️⃣ Run Server

```bash id="z82ksl"
npm start
```

---

## 🧪 API Testing

Use tools like:

* Postman
* Thunder Client
* Mongodb Compass
* Mongodb Atlas

---

## 📈 Future Enhancements

* 🔒 Password Hashing (bcrypt)
* 🔁 Refresh Tokens
* 🚫 Token Blacklisting (Logout Support)
* 🔐 Role-Based Access Control (RBAC)
* 📧 Email Verification
* 🔑 OAuth (Google, GitHub Login)

---

## 🌐 Role in Microservices Architecture

This service acts as the **core authentication provider**:

* Auth Service ✅
* Product Service ✅
* Cart Service ✅
* Order Service ✅
* Payment Service 🚧
* API Gateway 🚧

---

## 🔄 Service Communication

* JWT-based authentication
* API Gateway validation
* Inter-service communication via REST/events

---

## 🧪 Best Practices Followed

* ✅ RESTful API Design
* ✅ MVC Architecture
* ✅ Secure Authentication Flow
* ✅ Separation of Concerns
* ✅ Scalable Folder Structure

---

## 💼 Why This Project?

This project demonstrates:

* Secure backend development
* Authentication & authorization systems
* Microservices architecture understanding
* Real-world user management

---

## 🤝 Contributing

```bash id="c92lsl"
# Fork the repository
git checkout -b feature/NewFeature

# Commit changes
git commit -m "Add feature"

# Push changes
git push origin feature/NewFeature
```

---

## 📬 Contact

**Krishu Kumar**  
📧 Email: [krishukumarsingh06@gmail.com](mailto:krishukumarsingh06@gmail.com)  
🐙 GitHub: https://github.com/krishu2814

---
