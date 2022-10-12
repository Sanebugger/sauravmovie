import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import SingleMovie from './SingleMovie';
import Error from './Error';

function App() {
  return (
    <>
      {/* <h2>jhj</h2> */}
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="movie/:id" element={<SingleMovie />} />
            <Route path="*" element={<Error />} />

          </Route>
        </Routes>

    </>
  );
}

export default App;
