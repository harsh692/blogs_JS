# MyBlog
MyBlog is a full-stack web application for creating and managing blog posts. It allows users to register, log in, create, edit, and view blog posts. The app is built with a React frontend and an Express.js backend, and it uses MongoDB for storing data.

### Features
* User authentication (register, login, logout)
* Create, edit, and delete blog posts
* View blog posts with rich text formatting
* Responsive design for a great user experience on all devices


### Installation
#### Prerequisites
Make sure you have the following installed on your system:

* Node.js (v14 or later)
* npm (Node package manager)
* MongoDB (running locally or on a remote server)
#### Backend Setup
1. Clone the repository:


```
 git clone https://github.com/yourusername/myblog.git    
 cd myblog/backend 
 ```

2. Install the dependencies:

```
npm install
```

3. Create a .env file in the backend directory and add your MongoDB connection string and other environment variables:


```
MONGO_URL=mongodb://localhost:27017/myblog
JWT_SECRET=your_jwt_secret
```
4. Start the backend server:    

```
npm start
```     
The backend server will run on http://localhost:4000.

5. Frontend Setup   
Navigate to the frontend directory:


```
cd ../frontend
```
6. Install the dependencies:

```
npm install
```

Start the frontend development server:
```
npm run dev
```

The frontend will run on http://localhost:3000.
    
### Usage   
1. Visit http://localhost:3000 in your web browser.
2. Register a new account or log in with an existing one.
3. Create a new blog post, edit existing posts, or view posts created by other users.
### Working   
1. User Authentication
Register: Users can create an account with a username and password.
2. Login: Users can log in to access their account and manage their blog posts.
3. Logout: Users can log out of their account.
### Blog Posts   
1. Create Post: Users can create a new blog post with a title, summary, and rich text content.
2. Edit Post: Users can edit their own posts.
3. View Post: Users can view all posts, including those created by others.
4. Delete Post: (Backend implementation only) Users can delete their posts.
### Technologies Used   
1. Frontend: React, React Router, React Quill (for rich text editing)
2. Backend: Express.js, MongoDB, Mongoose
3. Authentication: JWT (JSON Web Token)
4. Styling: CSS
### License   
This project is licensed under the MIT License.

