import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Movie from './Movie';
import MovieForm from './MovieForm'; // Assuming you have a MovieForm component
import MovieList from './MovieList'; // Assuming you have a MovieList component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/movies" element={<Movie />}>
          <Route index element={<MovieList />} /> {/* Default route */}
          <Route path="create" element={<MovieForm />} />
          <Route path="edit/:movieId" element={<MovieForm />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;