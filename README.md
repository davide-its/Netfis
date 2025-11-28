<p align="center">
<img src="src/assets/netfis_nobg.png" style="width: 200px; object-fit: cover;" alt="Netfis Logo" />
</p>

# 🎬 Netfis

Netfis is an improved Netflix clone created for educational and
portfolio purposes by **Dragos Nedelcu** and **Davide Martinelli**.

The application offers:

- Real-time movie & TV show data
- Trailers, cast, seasons, and similar content
- Favorites system (local persistence)
- Smooth UI inspired by modern streaming platforms

The project focuses on clean architecture, performance, and high-quality UX.

---

## 💻 Try it now!

Try our web application through this [link](https://netfis.onrender.com)

**You will need to wait 50-70 seconds to use the link!**

## 🚀 Technologies Used

| Technology    | Version | Why it was chosen                      |
| :------------ | :-----: | :------------------------------------- |
| React         |   19+   | Component architecture, fast rendering |
| Vite          |   7+    | Extremely fast dev server and builds   |
| TailwindCSS   |   4+    | Rapid styling, minimal custom CSS      |
| React Router  |   7.9   | SPA routing, URL params handling       |
| Swiper        |   12+   | Netflix-like sliders/carousels         |
| Lucide React  |  0.553  | Lightweight modern icons               |
| React Youtube |   10+   | Embedding YouTube videos easily, handle player events in React components |
| TMDB API      |    —    | High-quality movie/series data         |

Node recommended: **>= 22.0**

---

## 📂 Project Structure

```
src/
│
├── assets/          # Logos, images, and other static assets
├── components/      # Reusable UI components (Card, Loader, Navbar, etc.)
├── context/         # Context API for global state (MediaContext, FavouritesContext)
├── hooks/           # Custom hooks
├── layouts/         # Layouts (Navbar + Footer wrapper)
├── pages/           # Main pages (Home, Movies, Series, Details, Search)
└── services/        # API functions and fetch utilities
```

---

## ⚙️ Main Features

- Netflix-style homepage with dynamic hero
- Movie & TV show listings
- Detailed pages with cast, episodes, trailers, and similar content
- Global state management using **Context API**
- Favorites stored locally via **localStorage**
- Fully responsive layout
- Smooth animations

---

## 🌐 APIs Used

**TMDB API Documentation:** [https://developer.themoviedb.org/docs/getting-started](https://developer.themoviedb.org/docs/getting-started)

### Movies

| Function                   | Description                                                  |
| -------------------------- | ------------------------------------------------------------ |
| `getPopularMovies()`       | Fetch popular movies                                         |
| `getMovieImages(movieId)`  | Fetch movie backdrops and posters                            |
| `getMovieVideos(movieId)`  | Fetch trailers and video clips                               |
| `getMovieDetails(movieId)` | Fetch full movie details (videos, images, credits, keywords) |
| `getMovieGenres()`         | Fetch all movie genres                                       |

### TV Series

| Function                               | Description                                                    |
| -------------------------------------- | -------------------------------------------------------------- |
| `getPopularSeries()`                   | Fetch popular TV series                                        |
| `getSerieImages(serieId)`              | Fetch TV show backdrops and posters                            |
| `getSerieVideos(serieId)`              | Fetch trailers and video clips                                 |
| `getSerieDetails(serieId)`             | Fetch full TV show details (videos, images, credits, keywords) |
| `getSeasonDetails(tvId, seasonNumber)` | Fetch details for a specific season                            |
| `getSeriesGenres()`                    | Fetch all TV genres                                            |

### Search & Recommendations

| Function                             | Description                           |
| ------------------------------------ | ------------------------------------- |
| `searchMulti(query)`                 | Search for movies, series, and people |
| `similarOperaFunction(genres, type)` | Fetch similar movies/series by genres |

### Homepage / Curated Content

| Function           | Description                                              |
| ------------------ | -------------------------------------------------------- |
| `getHomeContent()` | Fetch curated categories for homepage with movies/series |

### Generic Fetch by ID

| Function                   | Description                                       |
| -------------------------- | ------------------------------------------------- |
| `fetchOperaById(id, type)` | Fetch movie/TV by ID. Returns `null` if not found |

---

## 🔐 Environment Variables

```
VITE_APP_BEARER_TOKEN=YOUR_TMDB_API_KEY
VITE_API_BASE_URL=https://api.themoviedb.org/3
```

---

## ▶️ Running the Project

```bash
npm install
npm run dev
```

---

## 🧠 Why Context API instead of Redux?

- Minimal global state required
- No complex reducers needed
- Zero boilerplate
- Better developer experience
- Context API is sufficient for this project

---

## 📦 External Libraries Justification

| Library       | Problem Solved                                        | Why Necessary (vs Pure React)                               | How Integrated in the Project                                     |
| ------------- | ---------------------------------------------------- | ------------------------------------------------------------ | ---------------------------------------------------------------- |
| TailwindCSS   | Speeds up creation of modern, responsive UI          | Avoids writing complex custom CSS and boilerplate            | Utility classes used directly in JSX components                  |
| Swiper        | Implementation of Netflix-like sliders/carousels    | Pure React would require a lot of JS and logic for swiping   | `<Swiper>` component for movie and series carousels              |
| Lucide-react  | Lightweight, modern icons                             | Pure React does not have a built-in icon library             | Icons imported and used in buttons, navbar, and cards            |
| React Router  | Dynamic SPA routing with parameters and navigation  | Pure React would require manual URL and history management   | `<BrowserRouter>`, `<Routes>`, and `<Route>` used in pages       |
| React YouTube | Embedding YouTube videos with React API              | Pure React would require manual iframes and event handling  | `<YouTube>` component for trailers and videos in detail pages    |


## ⚠️ Known Issues / Limitations

- Missing data for a few films and tv series (trailers, images, overviews, rating etc...)
- API rate limits
- Favorites stored locally only
- No authentication
- No multi-language support

---

## 📜 License

Open-source for educational and portfolio purposes.

---

## ✨ Authors

- **Dragos Nedelcu** — [GitHub](https://github.com/n3dydr4gos) — nedydragos@gmail.com
- **Davide Martinelli** — [GitHub](https://github.com/davide-its) — davide.martelli15@gmail.com
