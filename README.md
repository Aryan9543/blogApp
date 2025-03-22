# Blog Project

## 📌 Overview
This is a **Node.js blog application** that uses **Express.js** for the backend and **EJS (Embedded JavaScript)** for the frontend templating. Users can create, read, update, and delete blog posts.

## 🚀 Features
- Create, edit, and delete blog posts
- Display all blog posts on the homepage
- Individual blog post pages
- User authentication (optional)
- Responsive UI with EJS templates

## 🛠 Tech Stack
- **Backend:** Node.js, Express.js, MongoDB (Mongoose)
- **Frontend:** EJS, Bootstrap/CSS
- **Authentication:** Passport.js (if implemented)
- **Database:** MongoDB (Mongoose ORM)

## 📂 Project Structure
```
blog-project/
│-- node_modules/
│-- public/            # Static files (CSS, JS, Images)
│-- views/             # EJS Templates
│-- routes/            # Application routes
│-- models/            # Mongoose models
│-- controllers/       # Business logic
│-- .gitignore         # Git ignore file
│-- package.json       # Dependencies and scripts
│-- server.js          # Main entry point
```

## 🔧 Installation & Setup
### 1️⃣ Clone the repository
```sh
git clone https://github.com/your-username/blog-project.git
cd blog-project
```
### 2️⃣ Install dependencies
```sh
npm install
```
### 3️⃣ Setup environment variables
Create a `.env` file in the root directory and add:
```
PORT=3000
MONGO_URI=your-mongodb-connection-string
SESSION_SECRET=your-secret-key
```

### 4️⃣ Start the server
```sh
npm start
```
The server will start on `http://localhost:3000`

## 📝 Usage
- Open the browser and go to `http://localhost:3000`
- Create new blog posts
- View individual posts
- Edit or delete posts

## 🛠 Available Scripts
- `npm start` - Start the application
- `npm run dev` - Start in development mode with nodemon

## 🛡 Security Considerations
- Do not expose the `.env` file in a public repo.
- Implement authentication for blog post management (optional).

## 🤝 Contributing
Feel free to fork this repository and create pull requests. Contributions are welcome!

## 📜 License
This project is licensed under the MIT License.

