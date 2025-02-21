# Short Description

This is a Task Management Application where users can add, edit, delete, and reorder tasks using a drag-and-drop interface. Tasks are categorized into three sections: To-Do, In Progress, and Done. Users must be authenticated via Firebase to access the app, and all changes are saved instantly in the MongoDB database to ensure persistence.


# Live Links
Live Demo: https://todo-assignment-bbaaf.web.app/

# Dependencies

"dependencies": {
  "@dnd-kit/core": "^6.3.1",
  "@dnd-kit/react": "^0.0.9",
  "@tanstack/react-query": "^5.66.7",
  "axios": "^1.7.9",
  "firebase": "^11.3.1",
  "immutability-helper": "^3.1.1",
  "moment": "^2.30.1",
  "react": "^19.0.0",
  "react-dnd": "^16.0.1",
  "react-dnd-html5-backend": "^16.0.1",
  "react-dom": "^19.0.0",
  "react-hook-form": "^7.54.2",
  "react-icons": "^5.5.0",
  "react-router-dom": "^7.2.0",
  "sweetalert2": "^11.17.2"
}

#  Installation Steps

1. git clone <repo-link>
2. cd todo-client  # Navigate to the frontend folder
3. npm run dev

# Technologies Used

# Frontend:

React (Vite.js)
React DND (Drag & Drop)
Tailwind CSS (UI Styling)
React Query (State Management)
Firebase (Authentication)

# Backend:

Node.js & Express (Server-side)
MongoDB (Database)
Mongoose (MongoDB ORM)
Cors & Dotenv (Security & Configuration)

# Features

✅ User Authentication (Google Sign-in via Firebase)
✅ Create, Edit, Delete, and Reorder Tasks
✅ Drag & Drop Functionality
✅ Real-time Database Synchronization
✅ Responsive UI for Mobile & Desktop
✅ Modern UI with Tailwind CSS

# Future Improvements

1. Dark Mode Toggle
2. Due Dates with Color Indicators
3. Activity Log to Track Changes