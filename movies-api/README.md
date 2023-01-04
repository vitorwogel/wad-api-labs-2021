# Assignment 2 - Web API.
​
Name: Vitor Andre Brochado Wogel da Costa
​
## Features.
​
 + Feature 1 - An endpoint to get all upcoming movies
​
 + Feature 2 - An endpoint to get the most popular movies
​
 + Feature 3 - An endpoint to get the TV Shows

## Installation Requirements
​
To run this APP you will need to have NodeJS installed on your machine and one MongoDB instance running

You will also need a The Movie Database Key

Clone this repository (use the movies-api folder) and also the front end:

Open different windows to use each repository
​
```bat
git clone https://github.com/vitorwogel/wad-api-labs-2021.git
git clone https://github.com/vitorwogel/labMoviesApp.git
```
Install all packages needed to run both app​s

```bat
npm install
```
Configure the .env file
```bat
NODE_ENV=development
PORT=8080
HOST=localhost
MONGO_DB='your_mongo_connection_link'
SEED_DB=True
SECRET=ilikecake
REACT_APP_TMDB_KEY='your_tmdb_key'
```
Start the backend server then the React app server using the following command
```bat
npm start
```
​
## API Design
​
|  |  GET | POST | PUT | DELETE
| -- | -- | -- | -- | -- 
| /api/movies | Gets a list of movies | N/A | N/A | N/A
| /api/movies/{movieid} | Get a Movie | N/A | N/A | N/A
| /api/movies/{movieid}/reviews | Get all reviews for movie | Create a new review for Movie | N/A | N/A  
| /api/movies/{movieid}/images | Get all images that represents the movie | N/A | N/A | N/A  
| /api/movies/tmdb/upcoming | Get a list of upcoming movies | N/A | N/A | N/A
| /api/movies/tmdb/popular | Get a list of most popular movies | N/A | N/A | N/A
​| /api/tv | Gets a list of TV Shows | N/A | N/A | N/A
| /api/tv/{tv_id} | Get a TV Show | N/A | N/A | N/A
| /api/tv/{tv_id}/images | Get all images that represents the TV Show | N/A | N/A | N/A  
| /api/genres | Gets a list of all genres | N/A | N/A | N/A​
​