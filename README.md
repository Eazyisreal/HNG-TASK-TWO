# Movie Discovery Web Application

Welcome to the Movie Discovery Web Application! This application allows users to search for movies, view movie details, and save their favorite movies. It consumes data from the TMDB API.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [API Integration](#api-integration)
- [Error Handling](#error-handling)
- [Deployment](#deployment)
- [Built With](#built-with)
- [Contributing](#contributing)
- [License](#license)

## Features

1. **User Interface**
   - Responsive and visually appealing design.
   - Displays top 10 movies on the homepage in a grid layout.
   - Card component displaying movie title and release date.

2. **Movie Search**
   - Allows users to search for movies by title.
   - Displays search results, including movie posters, titles, and release dates.
   - Shows a loading indicator while fetching search results.

3. **Movie Details**
   - Movie details page at `/movies/:id` route.
   - Displays movie title, release date (in UTC), runtime (in minutes), and overview.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:

Install dependencies:
cd movie-discovery-app
npm install

Create a .env file in the root directory and add your TMDB API key
REACT_APP_TMDB_API_KEY=YOUR_API_KEY_HERE

Start the development server:
npm run dev


Open your browser and navigate to http://localhost:3000 to view the application.

API Integration
This project integrates with the TMDB API to fetch movie data. Make sure to add your TMDB API key to the .env file as mentioned in the "Getting Started" section.

API Integration functions are located in the services/api.js file.

Error Handling
The application includes error handling to display meaningful error messages to users in case of API failures or other issues. Errors are logged to the console.

Deployment
You can deploy this application to your preferred hosting platform. For example, to deploy on GitHub Pages:

Build the project:
npm run build

Deploy to GitHub Pages:
npm run deploy


Your application will be live at https://your-username.github.io/movie-discovery-app.

Built With
Vite
React
SWC
Tailwind CSS
Contributing
Contributions are welcome! Please read the Contributing Guidelines for details on how to contribute to this project.

License
This project is licensed under the MIT License - see the LICENSE file for details.