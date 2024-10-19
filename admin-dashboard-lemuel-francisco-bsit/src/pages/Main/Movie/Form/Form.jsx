import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Form.css';

const Form = () => {
  const [query, setQuery] = useState('');
  const [searchedMovieList, setSearchedMovieList] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(undefined);
  const [movie, setMovie] = useState(undefined);
  let { movieId } = useParams();

  const handleSearch = useCallback(() => {
    axios({
      method: 'get',
      url: `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer YOUR_API_KEY', // Use a secure method for managing keys
      },
    })
      .then((response) => {
        setSearchedMovieList(response.data.results);
      })
      .catch((error) => console.error('Error fetching movies:', error));
  }, [query]);

  const handleSelectMovie = (movie) => {
    setSelectedMovie(movie);
  };

  const handleSave = () => {
    const accessToken = localStorage.getItem('accessToken');
    if (!selectedMovie) {
      alert('Please search and select a movie.');
      return;
    }

    const data = {
      tmdbId: selectedMovie.id,
      title: selectedMovie.title,
      overview: selectedMovie.overview,
      popularity: selectedMovie.popularity,
      releaseDate: selectedMovie.release_date,
      voteAverage: selectedMovie.vote_average,
      backdropPath: `https://image.tmdb.org/t/p/original/${selectedMovie.backdrop_path}`,
      posterPath: `https://image.tmdb.org/t/p/original/${selectedMovie.poster_path}`,
      isFeatured: 0,
    };

    axios({
      method: 'post',
      url: '/movies',
      data: data,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((saveResponse) => {
        alert('Movie saved successfully!');
      })
      .catch((error) => {
        console.error('Error saving movie:', error);
        alert('Failed to save movie. Please try again.');
      });
  };

  useEffect(() => {
    if (movieId) {
      axios.get(`/movies/${movieId}`).then((response) => {
        setMovie(response.data);
        const tempData = {
          id: response.data.tmdbId,
          original_title: response.data.title,
          overview: response.data.overview,
          popularity: response.data.popularity,
          poster_path: response.data.posterPath,
          release_date: response.data.releaseDate,
          vote_average: response.data.voteAverage,
        };
        setSelectedMovie(tempData);
      })
      .catch((error) => console.error('Error fetching movie details:', error));
    }
  }, [movieId]);

  return (
    <>
      <h1>{movieId ? 'Edit Movie' : 'Create Movie'}</h1>

      {!movieId && (
        <div className='search-container'>
          <label>
            Search Movie: 
            <input
              type='text'
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>
          <button type='button' onClick={handleSearch}>
            Search
          </button>
          <div className='searched-movie'>
            {searchedMovieList.map((movie) => (
              <p key={movie.id} onClick={() => handleSelectMovie(movie)}>
                {movie.original_title}
              </p>
            ))}
          </div>
        </div>
      )}
      <hr />

      <div className='container'>
        <form>
          {selectedMovie && (
            <img
              className='poster-image'
              src={`https://image.tmdb.org/t/p/original/${selectedMovie.poster_path}`}
              alt={`${selectedMovie.title} Poster`}
            />
          )}
          <div className='field'>
            <label>
              Title:
              <input
                type='text'
                value={selectedMovie ? selectedMovie.original_title : ''}
                readOnly
              />
            </label>
          </div>
          <div className='field'>
            <label>
              Overview:
              <textarea
                rows={10}
                value={selectedMovie ? selectedMovie.overview : ''}
                readOnly
              />
            </label>
          </div>
          <div className='field'>
            <label>
              Popularity:
              <input
                type='text'
                value={selectedMovie ? selectedMovie.popularity : ''}
                readOnly
              />
            </label>
          </div>
          <div className='field'>
            <label>
              Release Date:
              <input
                type='text'
                value={selectedMovie ? selectedMovie.release_date : ''}
                readOnly
              />
            </label>
          </div>
          <div className='field'>
            <label>
              Vote Average:
              <input
                type='text'
                value={selectedMovie ? selectedMovie.vote_average : ''}
                readOnly
              />
            </label>
          </div>

          <button type='button' onClick={handleSave}>
            Save
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;

