# 📰 NYT Clone

This is a React-based clone of the New York Times homepage that displays top articles using the official [New York Times API](https://developer.nytimes.com/).  
Built as a portfolio project to demonstrate front-end development skills using **React**, **Axios**, **React Router**, and **localStorage**.

---

## 🔍 Features

- ✅ Browse top articles from various sections: World, Tech, Arts, Sports  
- 🔎 Search functionality (with keyword filtering)  
- ⭐ Favorite articles saved with localStorage  
- 📱 Responsive design with a hamburger menu for mobile  
- 🌙 Dark mode support (coming soon)

---

## 🛠️ Technologies Used

- [React](https://reactjs.org/)  
- [Axios](https://axios-http.com/)  
- [React Router DOM](https://reactrouter.com/)  
- [New York Times API](https://developer.nytimes.com/)  
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)  
- CSS (Vanilla)

---

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/francesco-cascioli/NYT-clone.git
   cd NYT-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Get your NYT API key**
   - Register at [developer.nytimes.com](https://developer.nytimes.com/)
   - Replace `"YOUR_API_KEY"` in `/src/api/nyt.js` with your personal key

4. **Run the development server**
   ```bash
   npm run dev
   ```

---

## 📁 Folder Structure

```
src/
├── api/                // API call logic
├── components/         // Reusable components like Navbar, NewsCard
├── context/            // Favorites context
├── pages/              // Route views: Home, Search, Section, Favorites
├── router/             // Routing logic
├── utils/             // Local Storage
```

---

## 📄 License

This project is open source and free to use for educational or portfolio purposes.

---

## 🙋‍♂️ Author

 **Francesco Cascioli**

- GitHub: [@francesco-cascioli](https://github.com/francesco-cascioli)
