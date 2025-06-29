# 📰 NYT Clone

A React-based web app that replicates the layout and core functionality of the New York Times homepage.  
This project fetches top stories from the official [New York Times API](https://developer.nytimes.com/) and allows users to browse, search, and save favorite articles.

Built to practice and demonstrate front-end development skills with **React**, **React Router**, **Axios**, and **localStorage**.

🔗 [Live Demo](https://francesco-cascioli.github.io/NYT-clone/)

---

## 🔍 Features

- 📰 Browse top stories by section (World, Tech, Arts)
- 🔎 Search for articles by keyword
- ⭐ Add/remove favorites (persisted in `localStorage`)
- 🌙 Light & Dark mode toggle
- 🕒 Recently viewed articles (saved in `localStorage`)
- 🔄 Load more articles on demand
- 📱 Responsive layout and mobile-friendly navbar
- ❌ Custom 404 error page
- 🔔 Toast notifications on favorite actions

---

## 🧱 Tech Stack

- **React** – component-based UI
- **React Router DOM** – client-side routing
- **Axios** – data fetching from NYT API
- **Vite** – fast development and build tool
- **React Toastify** – user notifications
- **CSS (vanilla)** – styling and layout
- **localStorage** – client-side persistence


📁 Project Structure
bash
Copia
Modifica
src/
├── api/               # NYT API functions
├── components/        # Reusable UI components
├── context/           # Theme context (dark mode)
├── pages/             # Route views (Home, Search, Favorites, etc.)
├── utils/             # localStorage utils (favorites, recently viewed)
├── App.jsx            # Routing logic
├── main.jsx           # Entry point


🤔 Why this project?
This app was developed to apply React fundamentals while adding a personal touch.
I’ve avoided simply following a tutorial — instead, I focused on:

Structuring components and logic clearly

Applying reusable utilities for favorites and history

Enhancing user experience (dark mode, toasts, loaders)

Making the UI mobile-friendly

Thinking like a developer, not solo like a student



👤 Author
Francesco Cascioli – Front-end developer in training
📍 Umbria, Italy
📫 GitHub



📄 License
This project is for educational purposes only.
All article data is provided by The New York Times.

