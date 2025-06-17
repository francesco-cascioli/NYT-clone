# 📰 NYT Clone

This is a front-end project built with React that replicates the core layout and functionality of the New York Times homepage.  
The app displays top articles from various sections using the official New York Times API, and includes features such as article search, favorites, and dark mode.

👉 [Live Demo](https://francesco-cascioli.github.io/NYT-clone/)

---

## 🔑 Main Features

- Browse top stories by category (World, Technology, Arts)
- Search articles by keyword
- Mark and store favorite articles using localStorage
- Responsive layout for mobile and desktop
- Toggle between light and dark mode
- Custom 404 error page

---

## 🧰 Tech Stack

- **React** – UI and component logic  
- **Vite** – Fast development and build tool  
- **Axios** – API requests  
- **React Router DOM** – Routing system  
- **New York Times API** – Article data  
- **CSS** – Styling and responsive layout

---

## 🛠 Setup Instructions

To run the project locally:

1. **Clone the repository**
   ```bash
   git clone https://github.com/francesco-cascioli/NYT-clone.git
   cd NYT-clone
Install dependencies

bash
Copia
Modifica
npm install
Get your New York Times API key

Sign up at developer.nytimes.com

Replace the placeholder key in /src/api/nyt.js with your own API key

Start the development server

bash
Copia
Modifica
npm run dev
Build and deploy to GitHub Pages

bash
Copia
Modifica
npm run build
npm run deploy
📁 Project Structure
bash
Copia
Modifica
src/
├── api/           # API logic (fetch & search)
├── components/    # Reusable UI components
├── context/       # Theme and favorites context
├── pages/         # Page views (Home, Search, Favorites, etc.)
├── router/        # App routing
├── utils/         # Utility functions (e.g. localStorage)
📌 About the Project
This application was developed as part of my front-end learning journey.
It combines core concepts such as state management, routing, API integration, and responsive design.

The main goal was to create a clean, functional, and user-friendly experience using real-world data.

👤 Author
Developed by Francesco Cascioli

Feel free to explore more of my projects on GitHub!
