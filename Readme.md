## Node.js User Management API

## Description
This Node.js app provides basic CRUD (Create, Read, Update, Delete) operations for user management. It uses MongoDB via Mongoose for database interaction and follows the MVC (Model-View-Controller) design pattern to organize the code in a structured and maintainable way.

## Features
- **Sign Up**: Create a new user with a name, email, and hashed password.
- **Get User**: Retrieve user details by email.
- **Update User**: Update user information.
- **Delete User**: Remove a user by email.

## Technologies Used
- **Node.js**: JavaScript runtime environment
- **Express.js**: Web framework for Node.js
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling for Node.js
- **bcrypt**: Password hashing library for secure storage
- **dotenv**: Load environment variables from a `.env` file
- **Postman**: For testing APIs
- **Git**: Version control

## Prerequisites
Before setting up the project, ensure you have the following installed:
- **Node.js** - Version 12 or later
- **MongoDB** - Local or cloud instance (e.g., MongoDB Atlas)
- **Postman** or any API testing tool

##  Setup Instructions

1. **Download the Project**
   - Download the zip file of the project from GitHub.
   - Extract the zip file and navigate to the project directory.

2. **Install Dependencies**

```bash
   npm install
```

3. **Configure Environment Variables** 
    - Create a .env file in the root directory of the project and add the following environment variables:
    (I have already setupped .env file already in this project and I will also upload it on github for minimizing your efforts)

    1) PORT=3001
    2) MONGO_DB_URL=mongodb://localhost:27017/yourDatabaseName
    3) SALT_ROUNDS=10

    - **PORT:** Port where the server will run.
    - **MONGO_URI:** MongoDB connection string.
    - **SALT_ROUNDS:** Number of rounds for bcrypt password hashing.



4. **Run the Application Start the Node.js server:**
    
Start the Node.js server:

```bash
    npm start
```

The app should now be running at http://localhost:3001.

## Testing the API with Postman
### 1. Sign Up a New User
   - **URL**: `/user/signup`
   - **Method**: `POST`

   **Steps in Postman**:
   1. Open Postman.
   2. Select the `POST` method and enter the URL: `http://localhost:3001/user/signup`.
   3. Go to the `Body` tab.
   4. Select `x-www-form-urlencoded`.
   5. Add the following fields:
      - `name`: John Doe
      - `email`: johndoe@example.com
      - `password`: yourpassword
   6. Click `Send`.

### 2. Get User by Email
   - **URL**: `/user/getUser`
   - **Method**: `GET`

   **Steps in Postman**:
   1. Select the `GET` method and enter the URL: `http://localhost:3001/user/getUser`.
   2. Go to the `Body` tab.
   3. Select `x-www-form-urlencoded`.
   4. Add the field:
      - `email`: johndoe@example.com
   5. Click `Send`.

### 3. Update User Information
   - **URL**: `/user/update`
   - **Method**: `PUT`

   **Steps in Postman**:
   1. Select the `PUT` method and enter the URL: `http://localhost:3001/user/update`.
   2. Go to the `Body` tab.
   3. Select `x-www-form-urlencoded`.
   4. Add the fields:
      - `email`: johndoe@example.com
      - `name`: John Updated Doe
   5. Click `Send`.

### 4. Delete a User
   - **URL**: `/user/delete`
   - **Method**: `DELETE`

   **Steps in Postman**:
   1. Select the `DELETE` method and enter the URL: `http://localhost:3001/user/delete`.
   2. Go to the `Body` tab.
   3. Select `x-www-form-urlencoded`.
   4. Add the field:
      - `email`: johndoe@example.com
   5. Click `Send`.

---

## Project Structure

```bash
├── connection
│   └── index.js               # Establishes Connection between MongoDB (database) and Project
├── Repository
│   └── userRepo               # Handles database interactions for user-related operations
├── controllers
│   └── UserController.js      # Handles requests for user-related operations
├── models
│   └── User.js                # User schema definition using Mongoose
├── routes
│   └── index.js               # API routes for user-related requests
├── services
│   └── UserService.js         # Handles business logic for user-related operations
├── index.js                   # Main entry point for the application
├── .env                       # Environment variables (to be created manually)
├── package.json               # Project dependencies and scripts
