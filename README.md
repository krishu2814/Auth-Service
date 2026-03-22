# 🔐 Auth Service (Microservices Architecture)

A scalable and secure **Authentication Service** built using **Node.js, Express, MongoDB**, implementing **JWT-based authentication** and clean architecture (Controller → Service → Repository).

----------------

## 🚀 Features

- 🔑 User Signup & Login (JWT-based authentication)
- 🔒 Password hashing using bcrypt
- 🧾 Token-based authentication using JWT
- 🏗️ Clean architecture (Controller, Service, Repository pattern)
- 📦 RESTful APIs
- 🛡️ Input validation & error handling
- ⚡ Scalable microservice-ready structure

------------------

## 🧱 Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose)  
- **Authentication:** JWT (jsonwebtoken)  
- **Security:** bcrypt  
- **Environment:** dotenv  

---

## 📁 Project Structure
src/
├── controllers/
├── services/
├── repository/
├── models/
├── routes/
├── config/
├── middlewares/
└── index.js

--------------------

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
`git clone https://github.com/your-username/auth-service.git`
`cd auth-service`

### 2️⃣ Install dependencies -> 
`npm install`


### 3️⃣ Setup environment variables

Create a `.env` file:
    PORT=3000
    MONGO_URL=your_mongodb_connection
    JWT_SECRET=your_secret_key
    

### 4️⃣ Run the server -> 
`npm run dev`


### 🔐 Authentication
| Method | Endpoint | Description |
|--------|---------|------------|
| POST   | /signup | Register a new user |
| POST   | /login  | Login user & get JWT |

### 👤 User Management
| Method | Endpoint | Description |
|--------|---------|------------|
| GET    | /user/:id | Get user by ID |
| GET    | /user/email/:email | Get user by email |
| PATCH  | /user/:id | Update user |
| DELETE | /user/:id | Delete user |


## 🔐 Authentication Flow
1. User signs up → password hashed using bcrypt  
2. User logs in → password verified  
3. JWT token generated  
4. Token used for accessing protected routes  


## 🧠 Architecture
Controller → Service → Repository → Database
