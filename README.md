

# 📝 Personal Journaling App

Personal Journaling App is a full-stack web application designed to help users quickly create and manage personal notes. The app supports fast note creation, editing, adding reminders, and password protection for sensitive notes.

---

## ⚙️ Technologies Used

### Frontend:
- [React](https://reactjs.org/)
- [Zustand](https://github.com/pmndrs/zustand) – for state management
- [Tailwind CSS](https://tailwindcss.com/) – for UI styling
- [Axios](https://axios-http.com/) – for HTTP communication

### Backend:
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)

---

## 📦 Project Initialization

To set up the project locally:

### 1. **Clone the repository**
```bash
git clone ...
cd ...
```

### 2. **Install dependencies**
For frontend:
```bash
cd client
npm install
```

For backend:
```bash
cd server
npm install
```

---

## 🔐 Environment Setup

Inside the `/server` directory, create a `.env` file and add the following:

```env
PORT=3500
MONGO_URI=your_mongodb_connection_string
```

> Replace `your_mongodb_connection_string` with your actual MongoDB URI.

---

## 🚀 Running the Application

### Frontend:
```bash
cd client
npm start
```

### Backend:
```bash
cd server
npm run dev
```

The frontend will typically run at `http://localhost:3000`, and the backend at `http://localhost:3500`.

---

## 📌 Features

- ✍️ Fast note creation and editing  
- 🔔 Add custom reminders to notes  
- 🔒 Password protection for sensitive notes  
- 💾 Persistent storage via MongoDB  
- ⚡ Responsive and minimal UI with Tailwind CSS

---

## 📃 License

This project is for educational and personal use.