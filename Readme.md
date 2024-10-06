## Node.js User Management API

### Description
This Node.js app provides basic CRUD (Create, Read, Update, Delete) operations for user management. It uses MongoDB via Mongoose for database interaction and follows the MVC (Model-View-Controller) design pattern to organize the code in a structured and maintainable way.

### Features
- **Sign Up**: Create a new user with a name, email, and hashed password.
- **Get User**: Retrieve user details by email.
- **Update User**: Update user information.
- **Delete User**: Remove a user by email.

### Technologies Used
- **Node.js**: JavaScript runtime environment
- **Express.js**: Web framework for Node.js
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling for Node.js
- **bcrypt**: Password hashing library for secure storage
- **dotenv**: Load environment variables from a `.env` file
- **Postman**: For testing APIs
- **Git**: Version control

### Prerequisites
Before setting up the project, ensure you have the following installed:
- **Node.js** - Version 12 or later
- **MongoDB** - Local or cloud instance (e.g., MongoDB Atlas)
- **Postman** or any API testing tool

### Setup Instructions

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

### API Endpoints

1. ***Sign Up a New User***

    1) URL: /user/signup
    2) Method: POST
    3) Description: Creates a new user with the provided name, email, and password.
    4) Request Body:
        {
        "name": "John Doe",
        "email": "johndoe@example.com",
        "password": "yourpassword"
        }
    5) Response:
        {
        "message": "Successfully created the User",
        "data": {
            "_id": "user-id",
            "name": "John Doe",
            "email": "johndoe@example.com"
        },
        "success": true
        }

2. ***Get User by Email***

    1) URL: /user/getUser
    2) Method: GET
    3) Description: Retrieves user details using email.
    4) Request Body:
        {
        "email": "johndoe@example.com"
        }
    5) Response:
        {
        "message": "Successfully Signed IN",
        "data": {
            "_id": "user-id",
            "name": "John Doe",
            "email": "johndoe@example.com"
        },
        "success": true
        }

3) ***Update User Information***

    1) URL: /user/update
    2) Method: PUT
    3) Description: Updates an existing user's name or email.
    4) Request Body:
        {
        "email": "johndoe@example.com",
        "name": "John Updated Doe"
        }
    5) Response:
        {
        "message": "User Updation Successful",
        "data": {
            "_id": "user-id",
            "name": "John Updated Doe",
            "email": "johndoe@example.com"
        },
        "success": true
        }

4) ***Delete a User***

    1) URL: /user/delete
    2) Method: DELETE
    3) Description: Deletes a user by email.
    4) Request Body:
        {
        "email": "johndoe@example.com"
        }
    5) Response:
        {
        "message": "User Deletion Successful",
        "success": true
        }

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
